
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import PublicLayout from "./layout/PublicLayout";
import PrivateLayout from "./layout/PrivateLayout";

// Public Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";

// Private Pages
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import useAuthCheck from './hooks/useAuthCheck';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';

const App = () => {

  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div>Loading...</div>
  ) : (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/product"
            element={
              <PublicRoute>
                <Product />
              </PublicRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <PublicRoute>
                <ProductDetails />
              </PublicRoute>
            }
          />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateLayout />}>
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;



