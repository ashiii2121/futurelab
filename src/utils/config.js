// Development mode - set to true to use mock data, false to use API
export const USE_MOCK_DATA = true;

// API Configuration
// Option 1: Local development server
export const baseUrl = "http://localhost:5000";

// Option 2: Remote server (if available)
// export const baseUrl = "https://futurelab-etvr.onrender.com";

// Option 3: Alternative server (if you have one)
// export const baseUrl = "https://your-alternative-server.com";

export const API_ENDPOINTS = {
  // Main banners
  MAIN_BANNERS: '/api/v1/mainbanners/get',
  BOTTOM_BANNERS: '/api/v1/bottombanners/get',
  RANDOM_BANNER: '/api/v1/bottombanners/get-random',

  // Categories
  LESS_PRICE: '/api/v1/category/lessPrice/selected',
  VITAL_ORGANS: '/api/v1/category/organ/selected',
  WOMEN_AGE: '/api/v1/category/womenage/selected',
  WOMEN_CARE: '/api/v1/category/women/selected',
  MEN_AGE: '/api/v1/category/menage/selected',
  MEN_CARE: '/api/v1/category/men/selected',
  LIFESTYLE: '/api/v1/category/lifestyle/selected',

  // Tests
  SPECIAL_CARE: '/api/v1/tests/selected/Special Care Packages',
  SINGLE_TEST: '/api/v1/tests/selected/Single Test',
  EXCLUSIVE_TESTS: '/api/v1/tests/category/Exclusive',

  // Dynamic endpoints
  TESTS_BY_CATEGORY: (category) => `/api/v1/tests/category/${category}`,
  TEST_BY_ID: (id) => `/api/v1/tests/${id}`,
};
