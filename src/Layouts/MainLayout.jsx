import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <section className="bg-gradient-to-r from-[#362914] via-transparent to-[#362914] from-30% via-60% to-30% z-50">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;
