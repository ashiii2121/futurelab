import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { baseUrl } from '../utils/config';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  
  const productId = searchParams.get('id');
  const category = searchParams.get('category');

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const [productResponse, bannerResponse] = await Promise.all([
          fetch(`${baseUrl}/api/v1/tests/${productId}`),
          fetch(`${baseUrl}/api/v1/bottombanners/get-random`),
        ]);

        const productData = await productResponse.json();
        const bannerData = await bannerResponse.json();

        if (productData.success) {
          setProduct(productData.data);
        }

        if (bannerData.success) {
          setBanner(bannerData.data);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const addToCart = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Please login to add items to cart');
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/v1/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          testId: productId,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Item added to cart successfully!');
      } else {
        alert(data.message || 'Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding item to cart');
    }
  };

  const bookNow = () => {
    // Implement book now functionality
    alert('Book now functionality to be implemented');
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '100px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h4>Product not found</h4>
          <p>The requested product could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="container py-5">
        {/* Product Header */}
        <div className="row mb-4">
          <div className="col-lg-8">
            <h1>{product.name}</h1>
            <p className="text-muted">{product.category}</p>
            <p>{product.description}</p>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="h4 text-primary">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted">
                      <del>₹{product.originalPrice}</del>
                    </span>
                  )}
                </div>
                <button 
                  className="btn btn-primary w-100 mb-2"
                  onClick={bookNow}
                >
                  Book Now
                </button>
                <button 
                  className="btn btn-outline-primary w-100"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Banner */}
        {banner && (
          <div className="mb-4">
            <img 
              className="adfor-product w-100" 
              src={`${baseUrl}/${banner.imageUrl}`} 
              alt="Product Banner" 
            />
          </div>
        )}

        {/* Included Tests */}
        {product.includedTests && product.includedTests.length > 0 && (
          <div className="container my-4">
            <h2 className="included-h">Included Tests</h2>
            {product.includedTests.map((testCategory, index) => (
              <div key={index}>
                <div 
                  className="dropdown-header" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#dropdownContent${index}`}
                >
                  <div className="d-flex align-items-center">
                    <img 
                      className="drptst-icon" 
                      src="/images/icon-svg/dropdown/liver (1).png" 
                      alt="Icon" 
                    />
                    <h5>{testCategory.category}</h5>
                  </div>
                  <i className="fa-solid fa-chevron-down drp-dwnicon"></i>
                </div>
                <ul 
                  id={`dropdownContent${index}`} 
                  className="collapse dropdown-content dropdown-ul"
                >
                  {testCategory.tests.map((test, testIndex) => (
                    <li key={testIndex}>{test}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Additional Product Information */}
        <div className="row mt-5">
          <div className="col-lg-6">
            <h3>Test Information</h3>
            <div className="card">
              <div className="card-body">
                <h6>Sample Type:</h6>
                <p>{product.sampleType || 'Blood'}</p>
                
                <h6>Fasting Required:</h6>
                <p>{product.fastingRequired ? 'Yes' : 'No'}</p>
                
                <h6>Report Time:</h6>
                <p>{product.reportTime || '24 hours'}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>Why Choose This Test?</h3>
            <div className="card">
              <div className="card-body">
                <ul>
                  <li>Accurate and reliable results</li>
                  <li>Home sample collection available</li>
                  <li>Quick report delivery</li>
                  <li>Expert consultation available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
