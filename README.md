# FutureLabs React Application

This is the React conversion of the FutureLabs healthcare application, converted from HTML/CSS/JavaScript to a modern React application with routing.

## 🚀 Features

- **React 18** with modern hooks and functional components
- **React Router v6** for client-side routing
- **Bootstrap 5** for responsive design
- **Axios** for API calls
- **Component-based architecture** with reusable components
- **Responsive design** for mobile and desktop
- **Authentication system** with OTP verification
- **Shopping cart functionality**
- **Search functionality** with suggestions
- **Location-based services**

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Main navigation header
│   ├── Footer.jsx      # Footer component
│   ├── SearchComponent.jsx
│   ├── LocationDropdown.jsx
│   ├── LoginSidebar.jsx
│   └── ScrollToTop.jsx
├── pages/              # Page components
│   ├── Home.jsx        # Homepage (index.html)
│   ├── Cart.jsx        # Shopping cart
│   ├── Checkups.jsx    # Health checkups
│   ├── Package.jsx     # Exclusive packages
│   ├── Product.jsx     # Product details
│   ├── SingleTest.jsx  # Single tests
│   ├── WomanCare.jsx   # Women care packages
│   ├── MenCare.jsx     # Men care packages
│   ├── SpecialCare.jsx # Special care packages
│   ├── VitalOrgan.jsx  # Vital organ tests
│   ├── LifestyleCheckup.jsx
│   ├── Sitemap.jsx
│   ├── PrivacyPolicy.jsx
│   ├── TermsAndConditions.jsx
│   └── ErrorPage.jsx
├── hooks/              # Custom React hooks
│   └── useAuth.js      # Authentication hook
├── utils/              # Utility functions
│   ├── config.js       # API configuration
│   └── api.js          # API service class
├── App.js              # Main app component with routing
└── index.js            # React entry point
```

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🔄 Migration Summary

### Converted HTML Pages to React Components:
- ✅ `index.html` → `Home.jsx`
- ✅ `cart.html` → `Cart.jsx`
- ✅ `checkups.html` → `Checkups.jsx`
- ✅ `package.html` → `Package.jsx`
- ✅ `product.html` → `Product.jsx`
- ✅ `single-test.html` → `SingleTest.jsx`
- ✅ `woman-care.html` → `WomanCare.jsx`
- ✅ `men-care.html` → `MenCare.jsx`
- ✅ `special-care.html` → `SpecialCare.jsx`
- ✅ `vital-organ.html` → `VitalOrgan.jsx`
- ✅ `lyfestyle-health-checkup.html` → `LifestyleCheckup.jsx`
- ✅ `sitemap.html` → `Sitemap.jsx`
- ✅ `privacy-policy.html` → `PrivacyPolicy.jsx`
- ✅ `terms-and-conditions.html` → `TermsAndConditions.jsx`
- ✅ `error.html` → `ErrorPage.jsx`

### Key Features Migrated:
- ✅ **Routing**: React Router with all page routes
- ✅ **Authentication**: OTP-based login system
- ✅ **Search**: Real-time search with suggestions
- ✅ **Cart**: Add/remove items, cart management
- ✅ **Location**: Geolocation and pincode services
- ✅ **API Integration**: All backend API calls
- ✅ **Responsive Design**: Mobile and desktop layouts
- ✅ **State Management**: React hooks for state

## 🌐 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Homepage with all services |
| `/cart` | Cart | Shopping cart |
| `/checkups` | Checkups | Health checkup packages |
| `/package` | Package | Exclusive packages |
| `/product` | Product | Product details |
| `/single-test` | SingleTest | Individual tests |
| `/woman-care` | WomanCare | Women's health packages |
| `/men-care` | MenCare | Men's health packages |
| `/special-care` | SpecialCare | Special care packages |
| `/vital-organ` | VitalOrgan | Vital organ tests |
| `/lifestyle-health-checkup` | LifestyleCheckup | Lifestyle checkups |
| `/sitemap` | Sitemap | Site navigation |
| `/privacy-policy` | PrivacyPolicy | Privacy policy |
| `/terms-and-conditions` | TermsAndConditions | Terms & conditions |
| `/error` | ErrorPage | Error page |

## 🔧 API Configuration

The application connects to the backend API at:
```
https://futurelab-etvr.onrender.com
```

API endpoints are configured in `src/utils/config.js` and API calls are handled through `src/utils/api.js`.

## 📱 Features

### Authentication
- OTP-based phone number verification
- Persistent login state
- Secure token storage

### Shopping Cart
- Add/remove items
- Cart persistence
- Checkout functionality

### Search
- Real-time search suggestions
- Category-based filtering
- Product search

### Location Services
- Current location detection
- Pincode-based location
- Delivery address management

## 🎨 Styling

The application uses:
- **Bootstrap 5** for responsive grid and components
- **Font Awesome** for icons
- **Custom CSS** from original application
- **Owl Carousel** for image carousels

## 🚀 Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service

3. Configure your web server to serve `index.html` for all routes (for client-side routing)

## 📞 Support

For support, contact:
- **Email**: info@futurelabs.live
- **Phone**: 081234 59263
- **WhatsApp**: +91 8123459263

## 🏥 About FutureLabs

FutureLabs is a healthcare platform providing convenient and reliable lab test booking services. We deliver accuracy and care for your health, every step of the way.

---

**Note**: This React application maintains all the functionality of the original HTML application while providing a modern, maintainable, and scalable codebase.
