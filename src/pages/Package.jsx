import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/config";

const Package = () => {
  const [testData, setTestData] = useState([]);
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [testResponse, bannerResponse] = await Promise.all([
          fetch(`${baseUrl}/api/v1/tests/category/Exclusive`),
          fetch(`${baseUrl}/api/v1/bottombanners/get-random`),
        ]);

        const testData = await testResponse.json();
        const bannerData = await bannerResponse.json();

        if (testData.success) {
          setTestData(testData.data || []);
        }

        if (bannerData.success) {
          setBanner(bannerData.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = async (testId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please login to add items to cart");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/v1/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          testId,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Item added to cart successfully!");
      } else {
        alert(data.message || "Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Error adding item to cart");
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          marginTop: "100px",
        }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="package-page">
      <div className="container py-5">
        <h2 className="mb-4">Exclusive Packages</h2>

        {/* Banner */}
        {banner && (
          <div className="mb-4">
            <img
              className="adfor-product w-100"
              src={`${baseUrl}/${banner.imageUrl}`}
              alt="Package Banner"
            />
          </div>
        )}

        {/* Package Cards */}
        <div className="row">
          {testData.length === 0 ? (
            <div className="col-12 text-center py-5">
              <h4>No exclusive packages available</h4>
            </div>
          ) : (
            testData.map((test, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card test-card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{test.name}</h5>
                    <p className="card-text">{test.description}</p>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="h5 text-primary">₹{test.price}</span>
                      {test.originalPrice && (
                        <span className="text-muted">
                          <del>₹{test.originalPrice}</del>
                        </span>
                      )}
                    </div>

                    {/* Included Tests */}
                    {test.includedTests && test.includedTests.length > 0 && (
                      <div className="mb-3">
                        <h6>Included Tests:</h6>
                        {test.includedTests.map((category, catIndex) => (
                          <div key={catIndex} className="mb-2">
                            <div
                              className="dropdown-header"
                              data-bs-toggle="collapse"
                              data-bs-target={`#dropdownContent${index}-${catIndex}`}
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  className="drptst-icon"
                                  src="/images/icon-svg/dropdown/liver (1).png"
                                  alt="Icon"
                                />
                                <h6 className="mb-0">{category.category}</h6>
                              </div>
                              <i className="fa-solid fa-chevron-down drp-dwnicon"></i>
                            </div>
                            <ul
                              id={`dropdownContent${index}-${catIndex}`}
                              className="collapse dropdown-content dropdown-ul"
                            >
                              {category.tests.map((testItem, testIndex) => (
                                <li key={testIndex}>{testItem}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto">
                      <button className="btn btn-know-more me-2">
                        Know More
                      </button>
                      <Link
                        to={`/product?id=${test._id}&category=${test.category}`}
                        className="btn btn-outline-primary me-2"
                      >
                        View Details
                      </Link>
                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart(test._id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Package;
