import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl, API_ENDPOINTS, USE_MOCK_DATA } from "../utils/config";
import { mockData } from "../utils/mockData";
import PromotionalCard from "../components/PromotionalCard";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [womenAge, setWomenAge] = useState([]);
  const [womenCare, setWomenCare] = useState([]);
  const [menAge, setMenAge] = useState([]);
  const [menCare, setMenCare] = useState([]);
  const [lifestyle, setLifestyle] = useState([]);
  const [specialCare, setSpecialCare] = useState([]);
  const [singleTest, setSingleTest] = useState([]);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to get correct image URL
  const getImageUrl = (imagePath) => {
    if (USE_MOCK_DATA) {
      // For mock data, use images from public folder
      return `/${imagePath}`;
    } else {
      // For API data, use baseUrl
      return `${baseUrl}/${imagePath}`;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if we should use mock data
        if (USE_MOCK_DATA) {
          console.log("Using mock data (development mode)");
          setCategories(mockData.categories || []);
          setAds(mockData.ads || []);
          setWomenAge(mockData.womenCare || []);
          setWomenCare(mockData.womenCare || []);
          setMenAge(mockData.menCare || []);
          setMenCare(mockData.menCare || []);
          setLifestyle(mockData.lifestyle || []);
          setSpecialCare(mockData.specialCare || []);
          setSingleTest(mockData.singleTest || []);
          setLoading(false);
          return;
        }

        console.log("Starting to fetch data from:", baseUrl);

        // Add a timeout to prevent infinite loading
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), 10000)
        );

        const fetchPromise = Promise.all([
          fetch(`${baseUrl}${API_ENDPOINTS.LESS_PRICE}`).then((res) =>
            res.json()
          ),
          fetch(`${baseUrl}${API_ENDPOINTS.BOTTOM_BANNERS}`).then((res) =>
            res.json()
          ),
          fetch(`${baseUrl}${API_ENDPOINTS.WOMEN_AGE}`).then((res) =>
            res.json()
          ),
          fetch(`${baseUrl}${API_ENDPOINTS.WOMEN_CARE}`).then((res) =>
            res.json()
          ),
          fetch(`${baseUrl}${API_ENDPOINTS.MEN_AGE}`).then((res) => res.json()),
          fetch(`${baseUrl}${API_ENDPOINTS.MEN_CARE}`).then((res) =>
            res.json()
          ),
          fetch(`${baseUrl}${API_ENDPOINTS.LIFESTYLE}`).then((res) =>
            res.json()
          ),
          fetch(`${baseUrl}${API_ENDPOINTS.SPECIAL_CARE}`).then((res) =>
            res.json()
          ),
          fetch(`${baseUrl}${API_ENDPOINTS.SINGLE_TEST}`).then((res) =>
            res.json()
          ),
        ]);

        const [
          lessPrice,
          adsData,
          womenAgeData,
          womenCareData,
          menAgeData,
          menCareData,
          lifeStyleData,
          specialPackageData,
          singleTestData,
        ] = await Promise.race([fetchPromise, timeoutPromise]);

        console.log("API responses received:", {
          lessPrice: lessPrice?.data?.length || 0,
          adsData: adsData?.data?.length || 0,
        });

        setCategories(lessPrice?.data || []);
        setAds(adsData?.data || []);
        setWomenAge(womenAgeData?.data || []);
        setWomenCare(womenCareData?.data || []);
        setMenAge(menAgeData?.data || []);
        setMenCare(menCareData?.data || []);
        setLifestyle(lifeStyleData?.data || []);
        setSpecialCare(specialPackageData?.data || []);
        setSingleTest(singleTestData?.data || []);

        console.log("Data set successfully");
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("Using mock data as fallback...");

        // Use mock data as fallback
        setCategories(mockData.categories || []);
        setAds(mockData.ads || []);
        setWomenAge(mockData.womenCare || []); // Using womenCare for age-based
        setWomenCare(mockData.womenCare || []);
        setMenAge(mockData.menCare || []); // Using menCare for age-based
        setMenCare(mockData.menCare || []);
        setLifestyle(mockData.lifestyle || []);
        setSpecialCare(mockData.specialCare || []);
        setSingleTest(mockData.singleTest || []);

        // Don't set error when using mock data
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [pinCode, setPinCode] = useState("");
  const [serviceAvailable, setServiceAvailable] = useState(null);
  const [checkingService, setCheckingService] = useState(false);

  const handlePinCodeCheck = async (e) => {
    e.preventDefault();
    if (!pinCode || pinCode.length !== 6) {
      alert("Please enter a valid 6-digit pin code");
      return;
    }

    setCheckingService(true);
    setServiceAvailable(null);

    try {
      // Simulate API call for service availability
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock service availability logic (you can replace with actual API)
      const availablePinCodes = [
        "560001",
        "560002",
        "560003",
        "560004",
        "560005",
        "560010",
        "560020",
        "560030",
      ];
      const isAvailable = availablePinCodes.includes(pinCode);

      setServiceAvailable(isAvailable);
    } catch (error) {
      console.error("Error checking service availability:", error);
      alert("Error checking service availability. Please try again.");
    } finally {
      setCheckingService(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div
          id="loadingSpinner"
          className="spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading data... Please wait.</p>
        <p>Connecting to: {baseUrl}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="error-container"
        style={{ padding: "50px", textAlign: "center" }}
      >
        <h2>Error Loading Data</h2>
        <p>Failed to load data from the server: {error}</p>
        <p>API URL: {baseUrl}</p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      className="home-page"
      style={{ display: "block", visibility: "visible", minHeight: "100vh" }}
    >
      {/* Hero Section */}
      <section className="hero-section mb-3 mb-md-4">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="hero-image-container position-relative">
                <img
                  src="/images/banners/banner3.png"
                  alt="Healthcare Services - Lab Tests & Health Checkups"
                  className="hero-image w-100"
                  style={{
                    height: "clamp(250px, 50vw, 400px)",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/banners/banner1.png";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pin Code Service Availability Section */}
      <section className="pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="prescription text-center mb-4">
                Enter Pin Code & Check Service Availability
              </h2>
              <div
                className="pincode-check-container"
                style={{ maxWidth: "600px", margin: "0 auto" }}
              >
                <form onSubmit={handlePinCodeCheck} className="pincode-form">
                  <div className="row align-items-end">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                      <div className="mb-3">
                        <label htmlFor="pincode" className="form-label">
                          Enter Your Pin Code:
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          className="form-control"
                          placeholder="Enter 6-digit pin code"
                          value={pinCode}
                          onChange={(e) =>
                            setPinCode(
                              e.target.value.replace(/\D/g, "").slice(0, 6)
                            )
                          }
                          pattern="[0-9]{6}"
                          maxLength="6"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="mb-3">
                        <button
                          className="btn btn-primary w-100"
                          type="submit"
                          disabled={checkingService || pinCode.length !== 6}
                        >
                          {checkingService ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Checking...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-search me-2"></i>
                              Check Availability
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Service Availability Result */}
                {serviceAvailable !== null && (
                  <div
                    className={`alert ${
                      serviceAvailable ? "alert-success" : "alert-warning"
                    } mt-3`}
                    role="alert"
                  >
                    <div className="d-flex align-items-center">
                      <i
                        className={`fas ${
                          serviceAvailable
                            ? "fa-check-circle"
                            : "fa-exclamation-triangle"
                        } me-2`}
                      ></i>
                      <div>
                        {serviceAvailable ? (
                          <>
                            <strong>Great! Service Available</strong>
                            <p className="mb-0">
                              We provide home sample collection and lab services
                              in your area (Pin: {pinCode})
                            </p>
                          </>
                        ) : (
                          <>
                            <strong>Service Not Available</strong>
                            <p className="mb-0">
                              Sorry, we don't provide services in this area yet
                              (Pin: {pinCode}). Please contact us for more
                              information.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee Section */}
      <section className="marquee-section py-2">
        <div className="mrq">
          <marquee
            className="marqu"
            behavior="alternate"
            direction="left"
            scrollamount="10"
            loop
          >
            | Welcome to Future Lab Diagnostics | Your Health, Our Priority |
            Caring for You with Precision | Reliable Results You Can Trust |
            Compassionate Healthcare Services | Advanced Diagnostics for a
            Healthier Future | Experience Quality Care with Us | Committed to
            Your Well-being |
          </marquee>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-5 fade-in">
        <div className="container">
          <div className="new-bg d-flex justify-content-between">
            <h2 className="sec-1h text-start">
              Less Price & More Tests - Choose Packages
            </h2>
            <Link className="view-all" to="/checkups">
              View All
            </Link>
          </div>
          <div className="row" id="categories-container">
            {categories.length > 0 ? (
              categories.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-6 col-6 my-lg-4 my-md-3 my-sm-2 my-2"
                >
                  <Link to={`/checkups?tab=${encodeURIComponent(item.name)}`}>
                    <div className="test-cardmain">
                      <div className="test-card text-center">
                        <img
                          className="test-cardimg larger-category-img"
                          src={getImageUrl(item.imagePath)}
                          alt={item.name}
                          style={{
                            width: "100%",
                            maxWidth: "350px",
                            height: "auto",
                            objectFit: "contain",
                            minHeight: "180px",
                          }}
                        />
                        <h4
                          className="testcard-head"
                          style={{
                            fontSize: "clamp(16px, 2.5vw, 20px)",
                            fontWeight: "600",
                            marginTop: "15px",
                          }}
                        >
                          {item.name}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div
                  style={{
                    padding: "40px",
                    textAlign: "center",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    border: "2px dashed #007c6f",
                  }}
                >
                  <h4 style={{ color: "#007c6f" }}>Health Packages</h4>
                  <p>Loading health packages... Please wait.</p>
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    Categories loaded: {categories.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Healthcare Banner Carousel */}
      <section className="banner-carousel-section">
        <div className="container-fluid">
          <div
            className="carousel-container"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <img
              src="/banners/long-banner.png"
              alt="Long Healthcare Banner"
              className="carousel-banner-img"
              style={{
                width: "100%",
                maxWidth: "1200px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      <div className="scrolling-carousel">
        <div className="carousel-track">
          {/* First set of banners */}
          <div className="carousel-item">
            <img
              src="/images/banners/banner1.png"
              alt="Complete Health Checkup"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/banners/banner2.png"
              alt="Blood Test Package"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/banners/banner3.png"
              alt="Women's Health Checkup"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/banners/carousel-3/bann-1.png"
              alt="Premium Diagnostics"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/banners/carousel-3/bann-2.png"
              alt="Advanced Health Screening"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="carousel-item">
            <img
              src="/banners/banner1.png"
              alt="Complete Health Checkup"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/banners/banner2.png"
              alt="Blood Test Package"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/banners/banner3.png"
              alt="Women's Health Checkup"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/banners/carousel-3/bann-1.png"
              alt="Premium Diagnostics"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/banners/carousel-3/bann-2.png"
              alt="Advanced Health Screening"
              className="carousel-banner-img"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {/* Promotional Card Section */}
      <section className="py-4">
        <div className="container">
          <div className="d-flex justify-content-center">
            <PromotionalCard imageUrl="/images/banners/banner1.png" />
          </div>
        </div>
      </section>

      {/* Women Care Section */}
      <section className="py-5">
        <div className="container">
          <div className="new-bg d-flex justify-content-between">
            <h2 className="sec-1h text-start">Women Care</h2>
            <Link className="view-all" to="/woman-care">
              View All
            </Link>
          </div>
          <div className="row" id="women-care-section">
            {womenCare.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-3 col-sm-6 col-6 my-lg-4 my-md-3 my-sm-1 my-1"
              >
                <Link to={`/woman-care?tab=${encodeURIComponent(item.name)}`}>
                  <div className="test-cardmain">
                    <div className="test-card text-center">
                      <img
                        className="test-cardimg"
                        src={getImageUrl(item.imagePath)}
                        alt={item.name}
                      />
                      <h4 className="testcard-head">{item.name}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Men Care Section */}
      <section className="py-5">
        <div className="container">
          <div className="new-bg d-flex justify-content-between">
            <h2 className="sec-1h text-start">Men Care</h2>
            <Link className="view-all" to="/men-care">
              View All
            </Link>
          </div>
          <div className="row">
            {menCare.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-3 col-sm-6 col-6 my-lg-4 my-md-3 my-sm-1 my-1"
              >
                <Link to={`/men-care?tab=${encodeURIComponent(item.name)}`}>
                  <div className="test-cardmain">
                    <div className="test-card text-center">
                      <img
                        className="test-cardimg"
                        src={getImageUrl(item.imagePath)}
                        alt={item.name}
                      />
                      <h4 className="testcard-head">{item.name}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-5">
        <div className="container">
          <div className="new-bg d-flex justify-content-between">
            <h2 className="sec-1h text-start">Lifestyle Health Checkups</h2>
            <Link className="view-all" to="/lifestyle-health-checkup">
              View All
            </Link>
          </div>
          <div className="row">
            {lifestyle.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-3 col-sm-6 col-6 my-lg-4 my-md-3 my-sm-1 my-1"
              >
                <Link
                  to={`/lifestyle-health-checkup?tab=${encodeURIComponent(
                    item.name
                  )}`}
                >
                  <div className="test-cardmain">
                    <div className="test-card text-center">
                      <img
                        className="test-cardimg"
                        src={getImageUrl(item.imagePath)}
                        alt={item.name}
                      />
                      <h4 className="testcard-head">{item.name}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Special Care Packages */}
      <section className="py-5">
        <div className="container">
          <div className="new-bg d-flex justify-content-between">
            <h2 className="sec-1h text-start">Special Care Packages</h2>
            <Link className="view-all" to="/special-care">
              View All
            </Link>
          </div>
        </div>
        <div className="prd-carouse-m special-carousel">
          <div className="row">
            {specialCare.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-6 my-2"
              >
                <Link to={`/product?id=${item._id}&category=${item.category}`}>
                  <div className="test-cardmain">
                    <div className="test-card text-center">
                      <img
                        className="test-cardimg"
                        src={getImageUrl(item.imagePath)}
                        alt={item.name}
                      />
                      <h5 className="testcard-head">{item.name}</h5>
                      <p className="text-muted">₹{item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Statistics */}
      <section className="sec4">
        <div className="container-fluid sec4-container">
          <div className="row pt-5 px-lg-2 px-md-0 px-0">
            <div className="col-lg-2 col-md-12 col-sm-12 col-12">
              <h4 className="sec4-blws">
                book labtest <br /> <span className="text-dark">with us</span>
              </h4>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <div className="d-flex">
                <img
                  className="sec4-svgicon"
                  src="/images/icon-svg/ontime-report.svg"
                  alt=""
                />
                <div className="p-2">
                  <h4 className="sec4-number m-0">98%</h4>
                  <p>
                    On-time report <br />
                    delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <div className="d-flex">
                <img
                  className="sec4-svgicon"
                  src="/images/icon-svg/timely collection.svg"
                  alt=""
                />
                <div className="p-2">
                  <h4 className="sec4-number m-0">97%</h4>
                  <p>
                    Timely sample <br />
                    collections
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="d-flex">
                <img
                  className="sec4-svgicon"
                  src="/images/icon-svg/review.svg"
                  alt=""
                />
                <div className="p-2">
                  <h4 className="sec4-number m-0">99%</h4>
                  <p>
                    Positive customer <br />
                    reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="d-flex">
                <img
                  className="sec4-svgicon"
                  src="/images/icon-svg/cerify.svg"
                  alt=""
                />
                <div className="p-2">
                  <h4 className="sec4-number m-0">Future lab assurance</h4>
                  <p>Prestigious Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Ads Carousel */}
      <section className="my-5">
        <div className="container-fluid">
          <div
            className="carousel3 owl-carousel owl-theme"
            id="carousel-container"
          >
            {ads.map((ad, index) => (
              <div key={index} className="item">
                <img
                  className="adfor-product w-100"
                  src={getImageUrl(ad.imageUrl)}
                  alt={ad.title}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Women Health Banner */}
      <section className="sec7 mt-5 mb-lg-4 mb-md-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-4 col-4">
              <img
                className="sec7-img"
                src="/images/banners/sec7woman.png"
                alt=""
              />
            </div>
            <div className="col-lg-7 col-md-7 col-sm-8 col-8 d-flex justify-content-center align-items-center">
              <h2 className="sec7-h2">
                Women <br /> Health & Wellness
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Women Age Based Section */}
      <section>
        <div className="d-flex justify-content-end pb-lg-3 pb-md-2 px-lg-5 px-md-4 px-sm-3 px-3">
          <Link className="view-all" to="/woman-care">
            View All
          </Link>
        </div>
        <div className="carousel-5-m women-carousel">
          <div className="row">
            {womenAge.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-6 my-2"
              >
                <Link to={`/woman-care?tab=${encodeURIComponent(item.name)}`}>
                  <div className="test-cardmain">
                    <div className="test-card text-center">
                      <img
                        className="test-cardimg"
                        src={getImageUrl(item.imagePath)}
                        alt={item.name}
                      />
                      <h4 className="testcard-head">{item.name}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Men Health Banner */}
      <section className="sec8 mt-5 mb-lg-4 mb-md-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-8 col-8 d-flex justify-content-center align-items-center">
              <h2 className="sec8-h2">
                Men <br /> Health & Wellness
              </h2>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-4 col-4">
              <img
                className="sec8-img"
                src="/images/banners/sec8man.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Men Age Based Section */}
      <section>
        <div className="d-flex justify-content-start pb-lg-3 pb-md-2 px-lg-5 px-md-4 px-sm-3 px-3">
          <Link className="view-all" to="/men-care">
            View All
          </Link>
        </div>
        <div className="carousel-6-m men-carousel">
          <div className="row">
            {menAge.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-6 my-2"
              >
                <Link to={`/men-care?tab=${encodeURIComponent(item.name)}`}>
                  <div className="test-cardmain">
                    <div className="test-card text-center">
                      <img
                        className="test-cardimg"
                        src={getImageUrl(item.imagePath)}
                        alt={item.name}
                      />
                      <h4 className="testcard-head">{item.name}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Tests Section */}
      <section className="py-5">
        <div className="container">
          <div className="new-bg d-flex justify-content-between">
            <h2 className="sec-1h text-start">Single Tests</h2>
            <Link className="view-all" to="/single-test">
              View All
            </Link>
          </div>
          <div className="row">
            {singleTest.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-6 my-2"
              >
                <Link to={`/product?id=${item._id}&category=${item.category}`}>
                  <div className="test-cardmain">
                    <div className="test-card text-center">
                      <img
                        className="test-cardimg"
                        src={getImageUrl(item.imagePath)}
                        alt={item.name}
                      />
                      <h5 className="testcard-head">{item.name}</h5>
                      <p className="text-muted">₹{item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
