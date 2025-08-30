import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";
import { baseUrl, API_ENDPOINTS, USE_MOCK_DATA } from "../utils/config";
import { mockData } from "../utils/mockData";
import MakeYourOwnPackage from "../components/MakeYourOwnPackage";
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
      // For mock data, use images from public folder with PUBLIC_URL
      const path = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
      return `${process.env.PUBLIC_URL}/${path}`;
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

  const [showAllOffers, setShowAllOffers] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [serviceAvailable, setServiceAvailable] = useState(null);
  const [checkingService, setCheckingService] = useState(false);

  const specialOffers = [
    {
      id: 1,
      title: "Premium Health Package",
      originalPrice: 2999,
      discountedPrice: 1999,
      discount: 33,
      badge: "PREMIUM",
      badgeColor: "premium",
      features: [
        "Complete Blood Count",
        "Lipid Profile",
        "Liver Function",
        "Kidney Function",
      ],
      description: "Comprehensive health screening for overall wellness",
      popular: true,
    },
    {
      id: 2,
      title: "Women's Wellness Special",
      originalPrice: 3499,
      discountedPrice: 2299,
      discount: 34,
      badge: "TRENDING",
      badgeColor: "trending",
      features: [
        "Hormonal Analysis",
        "Thyroid Profile",
        "Vitamin D",
        "Iron Studies",
      ],
      description: "Specialized health checkup designed for women's needs",
      popular: false,
    },
    {
      id: 3,
      title: "Cardiac Care Package",
      originalPrice: 2799,
      discountedPrice: 1899,
      discount: 32,
      badge: "NEW",
      badgeColor: "new",
      features: ["ECG", "2D Echo", "Lipid Profile", "Cardiac Risk Markers"],
      description: "Complete cardiovascular health assessment",
      popular: false,
    },
    {
      id: 4,
      title: "Diabetes Complete",
      originalPrice: 1899,
      discountedPrice: 1299,
      discount: 32,
      badge: "RECOMMENDED",
      badgeColor: "recommended",
      features: ["HbA1c", "Fasting Glucose", "Post Meal Glucose", "Insulin"],
      description: "Comprehensive diabetes monitoring package",
      popular: false,
    },
    {
      id: 5,
      title: "Senior Citizen Special",
      originalPrice: 4999,
      discountedPrice: 3499,
      discount: 30,
      badge: "POPULAR",
      badgeColor: "popular",
      features: [
        "Full Body Checkup",
        "Bone Health",
        "Cognitive Assessment",
        "Eye Screening",
      ],
      description: "Complete health package for seniors above 60",
      popular: false,
    },
    {
      id: 6,
      title: "Executive Health Checkup",
      originalPrice: 5999,
      discountedPrice: 3999,
      discount: 33,
      badge: "EXCLUSIVE",
      badgeColor: "exclusive",
      features: [
        "Advanced Imaging",
        "Stress Test",
        "Nutritional Analysis",
        "Health Consultation",
      ],
      description: "Premium executive health screening with consultation",
      popular: false,
    },
  ];

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
                  src={`${process.env.PUBLIC_URL}/images/banners/banner3.png`}
                  alt="Healthcare Services - Lab Tests & Health Checkups"
                  className="hero-image w-100"
                  style={{
                    height: "clamp(250px, 50vw, 400px)",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${process.env.PUBLIC_URL}/images/banners/banner1.png`;
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

      <div className="scrolling-carousel" style={{ backgroundColor: "white" }}>
        <div className="carousel-track">
          {/* First set of banners */}
          <div className="carousel-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/banner1.png`}
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
              src={`${process.env.PUBLIC_URL}/images/banners/banner2.png`}
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
              alt="Banner 3"
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
      <section className="special-offers-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="special-offers-container">
                {/* Header */}
                <div className="offers-header d-flex justify-content-between align-items-center mb-5">
                  <div>
                    <h2 className="offers-title mb-3">
                      <span className="gradient-text">🎉 Special Offers</span>
                    </h2>
                    <p className="offers-subtitle text-muted">
                      Limited time deals on health checkups & lab tests - Save
                      up to 35%!
                    </p>
                  </div>
                  <Link to="/offers" className="btn btn-outline-primary">
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div
              style={{
                maxWidth: "400px",
                margin: "20px auto",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <div
                style={{
                  border: "4px solid #059669",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
              >
                {/* Header Section */}
                <div
                  style={{
                    padding: "20px 20px 0 20px",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      color: "#DC2626",
                      fontSize: "24px",
                      fontWeight: "bold",
                      margin: "0 0 20px 0",
                      lineHeight: "1.2",
                    }}
                  >
                    Full Body Checkup +<br />1 Special Profile Test FREE
                  </h2>
                </div>

                {/* Content Section */}
                <div
                  style={{
                    padding: "0 20px 20px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  {/* Left Content */}
                  <div style={{ flex: 1 }}>
                    {/* Test Count */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          backgroundColor: "#10B981",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#34D399",
                            borderRadius: "50%",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "8px",
                              height: "12px",
                              backgroundColor: "white",
                              borderRadius: "2px",
                            }}
                          ></div>
                        </div>
                      </div>
                      <span
                        style={{
                          color: "#D97706",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        103 Test
                      </span>
                    </div>

                    {/* Know More Button */}
                    <button
                      style={{
                        backgroundColor: "#1E3A8A",
                        color: "white",
                        border: "none",
                        borderRadius: "25px",
                        padding: "12px 30px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginBottom: "15px",
                        boxShadow: "0 4px 12px rgba(30,58,138,0.3)",
                      }}
                    >
                      Know More
                    </button>

                    {/* Price Section */}
                    <div>
                      <div
                        style={{
                          color: "#DC2626",
                          fontSize: "36px",
                          fontWeight: "bold",
                          lineHeight: "1",
                          marginBottom: "5px",
                        }}
                      >
                        ₹999
                      </div>

                      <div
                        style={{
                          color: "#374151",
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                        }}
                      >
                        Exclusive offer
                      </div>

                      <div
                        style={{
                          color: "#D97706",
                          fontSize: "18px",
                          fontWeight: "bold",
                          textDecoration: "line-through",
                          textDecorationColor: "#374151",
                          textDecorationThickness: "2px",
                        }}
                      >
                        ₹2299
                      </div>
                    </div>
                  </div>

                  {/* Right Image Section */}
                  <div style={{ flexShrink: 0 }}>
                    <div
                      style={{
                        width: "140px",
                        height: "160px",
                        backgroundColor: "#FEF3C7",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Woman illustration placeholder */}
                      <div
                        style={{
                          fontSize: "80px",
                          filter: "sepia(1) saturate(2) hue-rotate(10deg)",
                        }}
                      >
                        👩‍🦰
                      </div>

                      {/* Pointing gesture */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "20px",
                          right: "10px",
                          fontSize: "24px",
                          transform: "rotate(-10deg)",
                        }}
                      >
                        👉
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div
                  style={{
                    backgroundColor: "#059669",
                    padding: "18px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      width: "100%",
                    }}
                  >
                    <ShoppingCart size={28} />
                    ADD TO CART
                  </button>

                  {/* Arrow indicator */}
                </div>
              </div>

              {/* Discount Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#DC2626",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  transform: "rotate(15deg)",
                  boxShadow: "0 2px 8px rgba(220,38,38,0.3)",
                }}
              ></div>
            </div>
          </section>
        </div>
      </section>

      <MakeYourOwnPackage />

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
    </div>
  );
};

export default Home;
