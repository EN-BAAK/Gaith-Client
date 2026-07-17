# AL-Gaith Frontend

AL-Gaith is a modern e-commerce platform specializing in premium Arabic fabrics, combining authentic Arabic identity with modern web technologies to deliver a unique online shopping experience.

This repository contains the **Frontend Application**, built to provide a fast, responsive, and elegant interface for customers and administrators while communicating seamlessly with the backend API.

---

# 📌 Overview

AL-Gaith was designed to provide a premium digital shopping experience inspired by the richness of Arabic heritage and traditional Damascene aesthetics.

Unlike conventional e-commerce platforms, the entire user experience is crafted around the Arabic language, luxurious typography, and traditional ornaments, creating a shopping environment that reflects the elegance of Arabic textiles.

The platform supports multiple user roles, secure authentication, dynamic content management, and a fully responsive interface suitable for all devices.

---

# 🎨 Design Philosophy

The user interface was carefully designed to reflect the identity of Arabic fabrics through a modern digital experience.

The design is inspired by:

- Arabic Calligraphy
- Traditional Damascene Ornaments
- Arabic Geometric Patterns
- Luxury Textile Branding
- Elegant Minimalism

Every screen was designed with readability, simplicity, and authenticity in mind while preserving a premium shopping experience.

---

# 🎨 Design System

## Color Palette

| Color | Purpose |
|--------|----------|
| **#1C1C1C** | Primary |
| **#B08D57** | Accent |
| **#FAF7F2** | Background |
| **#F3EEE7** | Secondary Background |
| **#FFFFFF** | Cards & Reverse Elements |
| **#2A2520** | Main Text |
| **#2E7D5B** | Success |
| **#B42318** | Danger |
| **#C58A1A** | Warning |
| **#2563A8** | Information |

---

## Typography

The project uses carefully selected Arabic fonts to preserve elegance and readability.

### Fonts

- Cairo
- IBM Plex Arabic
- Kufi

Each font serves a different purpose throughout the application, from headings to luxury branding elements.

---

# 🛠️ Tech Stack

- **Next.js**
- **React.js**
- **TypeScript**
- **React Query**
- **Tailwind CSS**

---

# 🏗️ Architecture

This repository contains the **Frontend** application.

The frontend communicates with a dedicated backend API.

**Backend Repository**

https://github.com/EN-BAAK/Gaith-Server

---

# 👥 User Roles

## 👑 Admin

The administrator accesses a complete management dashboard.

Features include:

- Dashboard & Reports
- Products Management
- Brands Management
- Categories Management
- Product Colors Management
- Product Sizes Management
- Discounts Management
- Orders Management
- Landing Page Management
- Platform Settings Management
- Social Media Management
- Regions Management
- Branches Management
- User Role Management
- Mark Orders as Paid
- Update Order Status

---

## 🛍️ Wholesale Customer

Wholesale customers can:

- Register an account
- Verify email using OTP
- Login securely
- Browse products
- Search products
- Filter products
- Place orders
- View wholesale pricing
- Track order status
- Reset password

---

## 🛒 Retail Customer

Retail customers can:

- Register an account
- Verify email using OTP
- Login securely
- Browse products
- Search products
- Filter products
- Place orders
- View retail pricing
- Track order status
- Reset password

---

# 🚀 Core Features

- 🇸🇦 Arabic-first user experience
- 🎨 Premium UI inspired by Arabic heritage
- 📱 Fully Responsive Design
- ⚡ Fast page navigation
- 🔄 React Query data synchronization
- 💾 Smart API caching
- 🔍 Product Search
- 🏷️ Product Filtering
- 🔐 Authentication System
- 📧 OTP Email Verification
- 🔑 Password Recovery
- 🍪 Cookie-based Sessions
- 📄 Pagination
- 🎯 Role-Based Access Control
- 🎨 Dynamic Landing Page
- ⚙️ Dynamic Platform Settings
- 🌐 Social Media Integration

---

# 🛒 Shopping Experience

Customers can easily:

- Browse products
- Search by product name
- Filter by brand
- Filter by category
- View detailed product information
- View retail or wholesale prices based on account type
- Place orders
- Track order progress

---

# 🖥️ Admin Dashboard

The Admin Dashboard provides complete control over the platform.

Administrators can manage:

- Products
- Brands
- Categories
- Colors
- Sizes
- Discounts
- Orders
- Landing Page
- Website Settings
- Social Media Links
- Support Information
- Regions
- Branches
- Users

The dashboard also includes reports and platform statistics for better monitoring.

---

# 🔐 Authentication

Authentication features include:

- Secure Login
- JWT Authentication
- HTTP Cookies
- OTP Email Verification
- Forgot Password
- Password Reset
- Secure Protected Routes

---

# ⚡ Performance

Performance was one of the primary goals during development.

Features include:

- React Query caching
- Optimized API requests
- Lazy loading where appropriate
- Responsive rendering
- Efficient state management
- Fast navigation
- Optimized user experience

---

# ⚙️ Installation & Setup

## 1. Clone Frontend Repository

```bash
git clone https://github.com/EN-BAAK/Gaith-Client
cd Gaith-Client
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Environment Variables

Create a `.env` file in the project root.

```env
NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_API_VERSION=

COOKIE_NAME=

NEXT_PUBLIC_USER_INFO=
```

> **Note:** `COOKIE_NAME` must match the value configured in the backend project.

---

## 4. Build the Project

```bash
npm run build
```

---

## 5. Setup Backend

Clone the backend repository.

```bash
git clone https://github.com/EN-BAAK/Gaith-Server
```

Then follow the instructions provided in its **README.md**.

---

## 6. Run the Application

```bash
npm start
```

---

# 📈 Future Improvements (TODO)

- Product Wishlist
- Product Comparison
- Recently Viewed Products
- Multi-language Support
- Dark Mode
- Online Payments
- Product Reviews
- Product Recommendations
- Push Notifications
- Advanced Search Filters
- Progressive Web App (PWA)

---

# 📌 Notes

- Built with scalability and maintainability in mind.
- Designed specifically for Arabic users.
- Inspired by authentic Arabic and Damascene visual identity.
- Uses reusable and modular React components.
- Optimized for performance and responsiveness.
- Built with modern frontend development practices.

---

# 📄 License

This project is open-source and available under the MIT License.

---

# 👨‍💻 Author

Designed and developed by **EN-BAAK**

GitHub:

https://github.com/EN-BAAK