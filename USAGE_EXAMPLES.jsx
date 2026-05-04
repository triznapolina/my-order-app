// ============================================================================
// BISTRO PROVENCE - USAGE EXAMPLES
// ============================================================================
// This file shows various ways to use and customize the BistroProvence
// component in your React application.

import { useState, useCallback } from 'react';
import BistroProvence from './pages/BistroProvence';

// ============================================================================
// EXAMPLE 1: Basic Usage (Simplest)
// ============================================================================
export function BasicUsage() {
  return <BistroProvence />;
}

// ============================================================================
// EXAMPLE 2: With Event Handlers
// ============================================================================
export function WithEventHandlers() {
  const handleAddToCart = useCallback((itemId, itemName, price) => {
    console.log(`Added ${itemName} ($${price}) to cart`);
    // Add your cart logic here
  }, []);

  const handleSearch = useCallback((query) => {
    console.log(`Searching for: ${query}`);
    // Add your search logic here
  }, []);

  const handleNavigate = useCallback((page) => {
    console.log(`Navigating to page: ${page}`);
    // Add your pagination logic here
  }, []);

  return (
    <div>
      {/* Add event listeners or context providers around the component */}
      <BistroProvence />
    </div>
  );
}

// ============================================================================
// EXAMPLE 3: In a React Router Setup
// ============================================================================
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function RoutedApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BistroProvence />} />
        <Route path="/menu" element={<BistroProvence />} />
        <Route path="/catalog" element={<BistroProvence />} />
      </Routes>
    </BrowserRouter>
  );
}

// ============================================================================
// EXAMPLE 4: With Custom Theme/Colors
// ============================================================================
export function CustomTheme() {
  return (
    <div style={{ '--primary-color': '#2d5a3d' }}>
      <style>{`
        :root {
          --primary-color: #2d5a3d;
        }
      `}</style>
      <BistroProvence />
    </div>
  );
}

// ============================================================================
// EXAMPLE 5: In a Layout Wrapper
// ============================================================================
export function WithLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Optional: Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1>Welcome to Restaurant Catalog</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <BistroProvence />
      </main>

      {/* Optional: Additional Footer */}
      <footer className="bg-gray-100 text-center py-4">
        <p>&copy; 2024 Your Restaurant</p>
      </footer>
    </div>
  );
}

// ============================================================================
// EXAMPLE 6: With Data Context
// ============================================================================
import { createContext, useContext } from 'react';

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = useCallback((item) => {
    setCart(prev => [...prev, item]);
  }, []);

  const toggleFavorite = useCallback((itemId) => {
    setFavorites(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  }, []);

  return (
    <MenuContext.Provider value={{ cart, favorites, addToCart, toggleFavorite }}>
      {children}
    </MenuContext.Provider>
  );
}

export function WithContext() {
  return (
    <MenuProvider>
      <BistroProvence />
    </MenuProvider>
  );
}

// ============================================================================
// EXAMPLE 7: Mobile-First App
// ============================================================================
export function MobileApp() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <div className={isMobile ? 'mobile-view' : 'desktop-view'}>
      <BistroProvence />
    </div>
  );
}

// ============================================================================
// EXAMPLE 8: With Loading & Error States
// ============================================================================
import { useEffect } from 'react';

export function WithDataFetching() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        // Replace with your actual API call
        const response = await fetch('/api/menu');
        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading menu...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  return <BistroProvence />;
}

// ============================================================================
// EXAMPLE 9: As Page in Multi-Page App
// ============================================================================
export function App() {
  const [currentPage, setCurrentPage] = useState('menu');

  return (
    <div className="app">
      <nav className="navbar">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('menu')}>Menu</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
      </nav>

      <main>
        {currentPage === 'menu' && <BistroProvence />}
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
    </div>
  );
}

function HomePage() {
  return <div>Home Page</div>;
}

function ContactPage() {
  return <div>Contact Page</div>;
}

// ============================================================================
// EXAMPLE 10: Advanced - Modified Component with Props
// ============================================================================
import BistroProvenanceBase from './pages/BistroProvence';

// Extended component with additional features
export function BistroProvenanceEnhanced({ 
  title = "Earthy Gastronomy",
  subtitle = "A curated collection of our finest dishes",
  onAddToCart = () => {},
  onSearch = () => {},
  theme = 'light'
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className={`bistro-enhanced ${theme}-mode`}>
      {title && <h1 className="page-title">{title}</h1>}
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
      <BistroProvenanceBase />
    </div>
  );
}

// ============================================================================
// EXPORT ALL EXAMPLES
// ============================================================================
export default {
  BasicUsage,
  WithEventHandlers,
  RoutedApp,
  CustomTheme,
  WithLayout,
  WithContext,
  MobileApp,
  WithDataFetching,
  App,
  BistroProvenanceEnhanced
};

// ============================================================================
// USAGE IN App.jsx
// ============================================================================
/*
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BistroProvence from './pages/BistroProvence';
import './styles/BistroProvence.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BistroProvence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

// ============================================================================
// INTEGRATION CHECKLIST
// ============================================================================
/*
✓ Copy BistroProvence.jsx to src/pages/
✓ Copy BistroProvence.css to src/styles/
✓ Merge tailwind-bistro.config.js colors into tailwind.config.js
✓ Import CSS in App.jsx or main entry point
✓ Add component to routing or page
✓ Test on mobile, tablet, and desktop
✓ Connect to your backend API if needed
✓ Add event handlers for buttons
✓ Customize product data
✓ Update branding/colors as needed
*/

// ============================================================================
// COMMON CUSTOMIZATIONS
// ============================================================================

// 1. Change restaurant name
// Find: <div className="text-xl font-bold text-primary">Bistro Provence</div>
// Replace with: <div className="text-xl font-bold text-primary">Your Restaurant</div>

// 2. Add real data from API
// In useEffect: fetch('/api/menu-items').then(data => setMenuItems(data))

// 3. Connect cart functionality
// In button: onClick={() => addToCart(item)}

// 4. Add image upload
// Replace image URL with dynamic image from your server

// 5. Add user authentication
// Conditionally render account info based on auth state

// 6. Add shopping cart page
// Create Cart component and route to it from cart button

// 7. Add product detail page
// Create DetailPage component and navigate on card click

// 8. Add filters and search
// Implement filter logic in state and re-render with filtered items

// 9. Add sorting
// Sort menuItems array based on selected option

// 10. Add pagination
// Slice menuItems array based on current page

// ============================================================================
