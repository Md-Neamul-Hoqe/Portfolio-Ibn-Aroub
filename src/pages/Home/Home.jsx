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
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import scrollSection from "../../utils/scrollSection";

const Home = () => {
  // const location = useLocation();
  const [section, setSection] = useState(null);
  // const documentHeight = document.body.offsetHeight;
  const [documentHeight, setDocumentHeight] = useState(
    document.body.offsetHeight
  );
  // console.log(documentHeight);
  useEffect(() => {
    const {
      section: servicesSection,
      sectionStart: servicesStart,
      sectionEnd: servicesEnd,
    } = scrollSection("services");
    const { sectionStart: aboutStart, sectionEnd: aboutEnd } =
      scrollSection("about-section");

    const {
      section: workSection,
      sectionStart: workStart,
      sectionEnd: workEnd,
    } = scrollSection("my-work");

    const {
      section: educationSection,
      sectionStart: educationStart,
      sectionEnd: educationEnd,
    } = scrollSection("education");

    const {
      section: experiencesSection,
      sectionStart: experiencesStart,
      sectionEnd: experiencesEnd,
    } = scrollSection("experiences");

    const {
      section: contactSection,
      sectionStart: contactStart,
      sectionEnd: contactEnd,
    } = scrollSection("contact-me");

    window.onload = window.addEventListener("scroll", () => {
      setDocumentHeight(document.body.offsetHeight);
      const height = screen.availHeight / 2;
      const scrollPosition = window.scrollY + height;

      if (aboutStart < scrollPosition && scrollPosition < aboutEnd) {
        setSection(null);
      } else if (workStart < scrollPosition && scrollPosition < workEnd) {
        setSection(workSection);
      } else if (
        educationStart < scrollPosition &&
        scrollPosition < educationEnd
      ) {
        setSection(educationSection);
      } else if (
        experiencesStart < scrollPosition &&
        scrollPosition < experiencesEnd
      ) {
        setSection(experiencesSection);
      } else if (
        servicesStart < scrollPosition &&
        scrollPosition < servicesEnd
      ) {
        setSection(servicesSection);
      } else if (contactStart < scrollPosition && scrollPosition < contactEnd) {
        setSection(contactSection);
      }
    });
  }, [documentHeight]);

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

      <Helmet>
        <title>
          Ibn Aroub |{" "}
          {section
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ") || "MERN Stack Developer"}
        </title>
      </Helmet>

      <ToastContainer />
    </main>
  );
};

export default Home;
