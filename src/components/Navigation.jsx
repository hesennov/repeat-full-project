import { lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
import DetailWiew from "../pages/DetailWiew";

const Home = lazy(() => import("../pages/HomePage"));
const Single = lazy(() => import("../pages/DetailWiew"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));

const PAGE_HOME_PATH = "/";
const PAGE_PRODUCTS_PATH = "/products";
const PAGE_SINGLE_PATH = `/${PAGE_PRODUCTS_PATH}/:id`;
const PAGE_ABOUT_PATH = "/about";

export const PAGE_HOME = {
  label: "ANA SAYFA",
  path: PAGE_HOME_PATH,
  element: <Home />,
};

export const PAGE_DETAIL = {
  label: "DETAY SAYFA",
  path: PAGE_SINGLE_PATH,
  element: <Single />,
};

export const PAGE_ABOUT = {
  label: "HAKKIMIZDA",
  path: PAGE_ABOUT_PATH,
  element: <About />,
};
export const PAGE_PRODUCTS = {
  label: "Urunler",
  path: PAGE_PRODUCTS_PATH,
  element: <Products />,
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={PAGE_HOME.path}>{PAGE_HOME.label}</Link>
        </li>
        <li>
          <Link to={PAGE_DETAIL.path}>{PAGE_DETAIL.label}</Link>
        </li>
        <li>
          <Link to={PAGE_ABOUT.path}>{PAGE_ABOUT.label}</Link>
        </li>
      </ul>

      <Routes>
        <Route path={PAGE_HOME.path} element={PAGE_HOME.element} />
        <Route path={PAGE_DETAIL.path} element={PAGE_DETAIL.element} />
        <Route path={PAGE_ABOUT.path} element={PAGE_ABOUT.element} />
        <Route path={PAGE_PRODUCTS.path} element={PAGE_PRODUCTS.element} />
      </Routes>
    </nav>
    // <nav>
    //   <li>
    //     <Link to={"/"}>Home</Link>
    //     <Link to={"/products"}>urunler</Link>
    //     <Link to={"/about"}>asdnler</Link>
    //     <Link to={`/products/:id`}>singleproduct</Link>
    //   </li>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     // <Route path="/products" element={<Products />} />
    //     // <Route path="/products/:id" element={<DetailWiew />} />
    //     // <Route path="/about" element={<About />} />
    //   </Routes>
    // </nav>
  );
};

export default Navigation;
