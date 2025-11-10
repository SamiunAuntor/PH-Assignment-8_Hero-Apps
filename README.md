# Hero Apps 🚀

A modern, responsive web application that showcases a collection of popular mobile and web applications. Browse trending apps, view detailed information, ratings, reviews, and manage your installed apps collection.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Data Management](#data-management)
- [Contributing](#contributing)

## 🎯 Project Overview

Hero Apps is a single-page application (SPA) built with React that simulates an app store interface. Users can explore a curated collection of popular applications, view detailed information including ratings, reviews, download statistics, and manage their installed apps using browser localStorage.

## ✨ Features

- **Home Page**: Displays trending apps with a banner and featured apps grid
- **Apps Gallery**: Browse all available apps with search functionality
- **App Details**: View comprehensive app information including:
  - App icon and metadata
  - Download statistics
  - Average ratings and total reviews
  - Interactive ratings distribution chart (Chart.js)
  - Detailed description
  - Install/Uninstall functionality
- **Installation Page**: Manage your installed apps collection
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop
- **Local Storage**: Persistent app installation state using browser localStorage
- **Loading States**: Smooth loading indicators during data fetching
- **Error Handling**: Custom error page for invalid routes

## 🛠 Tech Stack

### Core Technologies
- **React 19.1.1** - UI library for building interactive user interfaces
- **React Router 7.9.5** - Client-side routing with data loaders
- **Vite 7.1.7** - Next-generation frontend build tool
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **DaisyUI 5.4.2** - Component library for Tailwind CSS

### Data Visualization
- **Chart.js 4.5.1** - Charting library for data visualization
- **react-chartjs-2 5.3.1** - React wrapper for Chart.js

### Icons & UI
- **Lucide React 0.552.0** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Vite Plugin React** - Fast React refresh and HMR

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher recommended)
- **npm** (version 7.x or higher) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Hero Apps"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## 🏃 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
Hero Apps/
├── public/
│   ├── Apps.json              # Main apps data
│   ├── trending-apps.json     # Trending apps data
│   └── vite.svg
├── src/
│   ├── assets/                # Static assets (images, icons)
│   ├── Components/
│   │   ├── AppCard.jsx        # App card component
│   │   ├── AppDeatils.jsx     # App details page component
│   │   ├── Banner.jsx         # Home page banner
│   │   ├── Footer.jsx         # Footer component
│   │   ├── InstallationCard.jsx # Installation card component
│   │   ├── Loading.jsx        # Loading component
│   │   ├── Loader/            # Loader component (alternative)
│   │   ├── NavBar.jsx         # Navigation bar
│   │   └── TrendingApps.jsx   # Trending apps section
│   ├── Layouts/
│   │   └── MainLayout.jsx     # Main layout wrapper
│   ├── Pages/
│   │   ├── AppDeatilsPage.jsx # App details page
│   │   ├── Apps.jsx           # Apps listing page
│   │   ├── ErrorPage.jsx      # Error/404 page
│   │   ├── HomePage.jsx       # Home page
│   │   └── InstallationPage.jsx # Installation page
│   ├── App.jsx                # Main App component
│   ├── Router.jsx             # React Router configuration
│   ├── main.jsx               # Application entry point
│   ├── App.css                # Global styles
│   └── index.css              # Base styles
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## 🎨 Key Features

### App Data Management
- App data is stored in JSON files (`Apps.json` and `trending-apps.json`)
- Data includes: app name, company, description, ratings, reviews, downloads, size, and rating distribution
- React Router loaders fetch data asynchronously for each route

### Installation Tracking
- Uses browser `localStorage` to persist installed apps
- Apps can be installed/uninstalled from the app details page
- Installation page displays all installed apps with sorting options

### Data Visualization
- Interactive horizontal bar chart showing rating distribution (1-5 stars)
- Built with Chart.js for smooth animations and responsive design

### Search Functionality
- Real-time search on the Apps page
- Filters apps by title (case-insensitive)
- Displays count of filtered results

### Responsive Design
- Mobile-first approach
- Breakpoints for mobile, tablet, and desktop
- Hamburger menu for mobile navigation
- Adaptive grid layouts

## 💾 Data Management

### App Data Structure

Each app in the JSON files contains:
- `id`: Unique identifier
- `title`: App name
- `companyName`: Developer/company name
- `image`: App icon URL
- `description`: Detailed app description
- `size`: App size in MB
- `downloads`: Total download count
- `ratingAvg`: Average rating (0-5)
- `reviews`: Total number of reviews
- `ratings`: Array of rating distribution (1-5 stars)

### Local Storage

Installed apps are stored in `localStorage` under the key `"installedApps"` as a JSON array of app titles.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Notes

- The application uses client-side routing, so ensure you're using a web server that supports SPA routing for production deployment
- App data is static and loaded from JSON files - in a production environment, this would typically be served from an API
- LocalStorage is browser-specific, so installed apps won't sync across devices or browsers

## 📄 License

This project is private and not licensed for public use.

## 👤 Author

**Samiun Auntor**
- GitHub: [@SamiunAuntor](https://github.com/SamiunAuntor)

---

Built with ❤️ using React and Vite
