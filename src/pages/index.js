//The index.js file here is used to import all the pages
//It makes importing them in App.js much eassier as they all have the index path where you just need to point to the folder

import Home from "./HomePage";
import Products from "./ProductsPage";
import SingleProduct from "./SingleProductPage";
import ErrorPage from "./ErrorPage";
import Checkout from "./CheckoutPage";
import About from "./AboutPage";
import Cart from "./CartPage";
import Private from "./PrivateRoute";
import AuthWrapper from "./AuthWrapper";

export {
  Home,
  Products,
  SingleProduct,
  ErrorPage,
  Checkout,
  About,
  Cart,
  Private,
  AuthWrapper,
};
