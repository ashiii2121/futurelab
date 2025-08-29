# 🏥 FutureLabs Healthcare Platform

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge&logo=node.js&logoColor=white)

**🔬 Modern Healthcare Lab Test Booking Platform**

_Delivering accuracy and care for your health, every step of the way_ ✨

[🌐 Live Demo](https://ashiii2121.github.io/futurelab) • [📋 Documentation](#-project-structure) • [🚀 Getting Started](#-installation--setup)

</div>

---

## ✨ Key Features

🎯 **Modern Tech Stack**

- ⚛️ **React 18** with modern hooks and functional components
- 🛡️ **React Router v6** for seamless client-side navigation
- 🎨 **Bootstrap 5** + **Tailwind CSS** for responsive design
- 🌐 **Axios** for robust API communication
- 🏗️ **Component-based architecture** with reusable components

🏥 **Healthcare Features**

- 📱 **Responsive design** optimized for mobile and desktop
- 🔐 **OTP Authentication** system for secure access
- 🛒 **Smart shopping cart** with persistent storage
- 🔍 **Real-time search** with intelligent suggestions
- 📍 **Location services** with geolocation support
- 🎁 **Special offers** and promotional banners
- 💳 **Seamless checkout** experience

## 📁 Project Structure

```
📂 src/
├── 🧩 components/          # Reusable React components
│   ├── 🏷️ Header.jsx      # Main navigation header
│   ├── 👣 Footer.jsx      # Footer component
│   ├── 🔍 SearchComponent.jsx
│   ├── 📍 LocationDropdown.jsx
│   ├── 🔐 LoginSidebar.jsx
│   └── ⬆️ ScrollToTop.jsx
├── 📱 pages/              # Page components
│   ├── 🏠 Home.jsx        # Homepage with promotions
│   ├── 🛒 Cart.jsx        # Shopping cart
│   ├── 🔬 Checkups.jsx    # Health checkups
│   ├── 🎁 Package.jsx     # Exclusive packages
│   ├── 📦 Product.jsx     # Product details
│   ├── 🦠 SingleTest.jsx  # Individual tests
│   ├── 👩 WomanCare.jsx   # Women care packages
│   ├── 👨 MenCare.jsx     # Men care packages
│   ├── ✨ SpecialCare.jsx # Special care packages
│   ├── ❤️ VitalOrgan.jsx  # Vital organ tests
│   ├── 🏃 LifestyleCheckup.jsx
│   ├── 🗺️ Sitemap.jsx
│   ├── 🔒 PrivacyPolicy.jsx
│   ├── 📋 TermsAndConditions.jsx
│   └── ⚠️ ErrorPage.jsx
├── 🎣 hooks/              # Custom React hooks
│   └── 🔐 useAuth.js      # Authentication hook
├── 🛠️ utils/              # Utility functions
│   ├── ⚙️ config.js       # API configuration
│   └── 🌐 api.js          # API service class
├── 🎨 App.js              # Main app component with routing
└── 🚀 index.js            # React entry point
```

## 🚀 Installation & Setup

### 📚 Prerequisites

- **Node.js** (v16 or higher) 🟢
- **npm** or **yarn** package manager 📦
- **Git** for version control 🌱

### 🔄 Quick Start

1. **💾 Clone the repository:**

   ```bash
   git clone https://github.com/ashiii2121/futurelab.git
   cd futurelab
   ```

2. **📦 Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **🚀 Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

   🌍 Application will be available at `http://localhost:3000`

4. **🏗️ Build for production:**

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **🌐 Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## 🔄 Migration Summary

### 🎨 Converted HTML Pages to React Components:

| 📱 Original Page                | ⚛️ React Component       | ✅ Status   |
| ------------------------------- | ------------------------ | ----------- |
| `index.html`                    | `Home.jsx`               | ✅ Complete |
| `cart.html`                     | `Cart.jsx`               | ✅ Complete |
| `checkups.html`                 | `Checkups.jsx`           | ✅ Complete |
| `package.html`                  | `Package.jsx`            | ✅ Complete |
| `product.html`                  | `Product.jsx`            | ✅ Complete |
| `single-test.html`              | `SingleTest.jsx`         | ✅ Complete |
| `woman-care.html`               | `WomanCare.jsx`          | ✅ Complete |
| `men-care.html`                 | `MenCare.jsx`            | ✅ Complete |
| `special-care.html`             | `SpecialCare.jsx`        | ✅ Complete |
| `vital-organ.html`              | `VitalOrgan.jsx`         | ✅ Complete |
| `lyfestyle-health-checkup.html` | `LifestyleCheckup.jsx`   | ✅ Complete |
| `sitemap.html`                  | `Sitemap.jsx`            | ✅ Complete |
| `privacy-policy.html`           | `PrivacyPolicy.jsx`      | ✅ Complete |
| `terms-and-conditions.html`     | `TermsAndConditions.jsx` | ✅ Complete |
| `error.html`                    | `ErrorPage.jsx`          | ✅ Complete |

### 🎨 Key Features Migrated:

| 💫 Feature               | 💬 Description                    | ✅ Status   |
| ------------------------ | --------------------------------- | ----------- |
| 🛡️ **Routing**           | React Router with all page routes | ✅ Complete |
| 🔐 **Authentication**    | OTP-based login system            | ✅ Complete |
| 🔍 **Search**            | Real-time search with suggestions | ✅ Complete |
| 🛒 **Cart**              | Add/remove items, cart management | ✅ Complete |
| 📍 **Location**          | Geolocation and pincode services  | ✅ Complete |
| 🌐 **API Integration**   | All backend API calls             | ✅ Complete |
| 📱 **Responsive Design** | Mobile and desktop layouts        | ✅ Complete |
| 🧠 **State Management**  | React hooks for state             | ✅ Complete |
| 🎁 **Special Offers**    | Promotional banners & offers      | ✅ Complete |

## 🌐 Routes & Navigation

| 🛣️ Route                    | 🎯 Component          | 📄 Description             |
| --------------------------- | --------------------- | -------------------------- |
| `/`                         | 🏠 Home               | Homepage with all services |
| `/cart`                     | 🛒 Cart               | Shopping cart management   |
| `/checkups`                 | 🔬 Checkups           | Health checkup packages    |
| `/package`                  | 🎁 Package            | Exclusive packages         |
| `/product`                  | 📦 Product            | Product details            |
| `/single-test`              | 🦠 SingleTest         | Individual tests           |
| `/woman-care`               | 👩 WomanCare          | Women's health packages    |
| `/men-care`                 | 👨 MenCare            | Men's health packages      |
| `/special-care`             | ✨ SpecialCare        | Special care packages      |
| `/vital-organ`              | ❤️ VitalOrgan         | Vital organ tests          |
| `/lifestyle-health-checkup` | 🏃 LifestyleCheckup   | Lifestyle checkups         |
| `/sitemap`                  | 🗺️ Sitemap            | Site navigation            |
| `/privacy-policy`           | 🔒 PrivacyPolicy      | Privacy policy             |
| `/terms-and-conditions`     | 📋 TermsAndConditions | Terms & conditions         |
| `/error`                    | ⚠️ ErrorPage          | Error page                 |

## 🔧 API Configuration

The application connects to the backend API at:

```
🌐 https://futurelab-etvr.onrender.com
```

⚙️ API endpoints are configured in `src/utils/config.js`  
🌐 API calls are handled through `src/utils/api.js`

## 📱 Core Features

### 🔐 Authentication

- 📱 OTP-based phone number verification
- 💾 Persistent login state
- 🔒 Secure token storage

### 🛒 Shopping Cart

- ➕ Add/remove items
- 💾 Cart persistence with localStorage
- 💳 Seamless checkout functionality

### 🔍 Search & Discovery

- ⚡ Real-time search suggestions
- 🏷️ Category-based filtering
- 📦 Product search with smart results

### 📍 Location Services

- 🌍 Current location detection
- 📮 Pincode-based location
- 🏠 Delivery address management

### 🎁 Special Offers

- 🏷️ Dynamic promotional banners
- 💰 Discount management
- 🎯 Targeted offers

## 🎨 Styling & UI

The application uses a modern design system:

- 🅱️ **Bootstrap 5** for responsive grid and components
- 🎨 **Tailwind CSS** for utility-first styling
- 🎭 **Font Awesome** for icons
- 📱 **Custom CSS** for enhanced user experience
- 🦉 **Owl Carousel** for image galleries

## 🚀 Deployment Guide

### 📦 Production Build

1. Build the application:

   ```bash
   npm run build
   ```

2. 🌐 Deploy the `build` folder to your hosting service

3. ⚙️ Configure your web server to serve `index.html` for all routes (SPA routing)

### 🐙 GitHub Pages Deployment

```bash
npm run deploy
```

## 📞 Support & Contact

For support and inquiries:

- 📧 **Email**: info@futurelabs.live
- ☎️ **Phone**: 081234 59263
- 💬 **WhatsApp**: +91 8123459263

## 🏥 About FutureLabs

FutureLabs is a cutting-edge healthcare platform providing convenient and reliable lab test booking services. We deliver accuracy and care for your health, every step of the way.

Our mission is to make healthcare accessible, affordable, and convenient for everyone. With our modern technology stack and user-centric design, we're revolutionizing the way people access medical diagnostics.

---

<div align="center">

**⚡ Built with React 18 • 🎨 Styled with Bootstrap 5 • 🚀 Deployed on GitHub Pages**

**Note**: This React application maintains all the functionality of the original HTML application while providing a modern, maintainable, and scalable codebase.

_Made with ❤️ for better healthcare accessibility_

</div>
