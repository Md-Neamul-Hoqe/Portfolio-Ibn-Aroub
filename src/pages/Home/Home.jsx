import AboutMe from "./AboutMe/AboutMe";
import MyWork from "./MyWork/MyWork";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#362914] via-transparent to-[#362914] from-30% via-60% to-30%">
      <AboutMe />
      <MyWork />
      <Services />
    </div>
  );
};

export default Home;
