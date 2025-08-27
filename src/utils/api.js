import { baseUrl } from './config';

class ApiService {
  constructor() {
    this.baseUrl = baseUrl;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth methods
  async sendOtp(phoneNumber) {
    return this.request('/api/v1/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber }),
    });
  }

  async verifyOtp(phoneNumber, otp) {
    return this.request('/api/v1/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber, otp }),
    });
  }

  // Test methods
  async getTests(category) {
    return this.request(`/api/v1/tests/category/${encodeURIComponent(category)}`);
  }

  async getTestById(id) {
    return this.request(`/api/v1/tests/${id}`);
  }

  async searchTests(query) {
    return this.request(`/api/v1/tests/search?q=${encodeURIComponent(query)}`);
  }

  // Category methods
  async getCategories(type) {
    return this.request(`/api/v1/category/${type}/get`);
  }

  async getSelectedCategories(type) {
    return this.request(`/api/v1/category/${type}/selected`);
  }

  // Banner methods
  async getMainBanners() {
    return this.request('/api/v1/mainbanners/get');
  }

  async getBottomBanners() {
    return this.request('/api/v1/bottombanners/get');
  }

  async getRandomBanner() {
    return this.request('/api/v1/bottombanners/get-random');
  }

  // Cart methods
  async getCart(userId) {
    return this.request(`/api/v1/cart/${userId}`);
  }

  async addToCart(userId, testId) {
    return this.request('/api/v1/cart/add', {
      method: 'POST',
      body: JSON.stringify({ userId, testId }),
    });
  }

  async removeFromCart(userId, testId) {
    return this.request('/api/v1/cart/remove', {
      method: 'DELETE',
      body: JSON.stringify({ userId, testId }),
    });
  }

  // Prescription methods
  async uploadPrescription(formData) {
    return this.request('/api/v1/prescription/upload', {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set content-type for FormData
    });
  }
}

export const apiService = new ApiService();
export default apiService;
