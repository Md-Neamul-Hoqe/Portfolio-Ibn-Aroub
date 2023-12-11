import AboutMe from "./AboutMe/AboutMe";
import MyWork from "./MyWork/MyWork";
import Services from "./Services/Services";
import { BsDownload } from "react-icons/bs";
import resumePDF from "/web-developer.pdf";
import ContactMe from "./ContactMe/ContactMe";
import Education from "./Education/Education";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Experiences from "./Experiences/Experiences";

const Home = () => {
  return (
    <main>
      <AboutMe />
      <Education />
      <Experiences />
      <MyWork />
      <Services />
      <ContactMe />
      <a
        href={resumePDF}
        download
        title="Download My Resume"
        aria-level="Download My Resume"
        className="btn btn-circle bg-nav border-0 text-white fixed z-50 bottom-12 right-12">
        <BsDownload className="text-xl font-black" />
      </a>

      <ToastContainer />
    </main>
  );
};

export default Home;
