import { Helmet } from "react-helmet-async";
import hireMe from "../../../assets/hire-me-banner.png";
import bannerBg from "../../../assets/header-banner.png";
import overlay from "../../../assets/header-banner-overlay.png";
import useAuthContext from "../../../Hooks/useAuthContext";
import SectionHeader from "../../Shared/SectionHeader";

const AboutMe = () => {
  const { maxWidth } = useAuthContext();
  return (
    <div
      style={{
        backgroundImage: `url(${overlay})`,
        backgroundOrigin: "center",
      }}
      id="about-section">
      <section
        style={{
          backgroundImage: `url('${bannerBg}')`,
          backgroundSize: "100%",
        }}>
        <div className="overlay">
          <div
            className={`md:flex gap-6 py-12 max-sm:px-5 max-sm:text-justify ${maxWidth}`}>
            <div className="flex-1">
              <div>
                <SectionHeader title={"About me"} />
              </div>
              <div>
                <p className="text-sm font-mono leading-relaxed mb-5">
                  I&apos;m Muhammad Neamul Hoqe, a skilled MERN stack developer
                  with a passion for crafting dynamic and efficient web
                  applications. My expertise spans MongoDB, Express.js,
                  React.js, and Node.js, complemented by modern JavaScript,
                  HTML, and CSS. Proficient in Git, testing, and deployment, I
                  excel in delivering seamless user experiences while adhering
                  to best practices. With a commitment to staying current in
                  this dynamic field, I am always eager to take on new
                  challenges and contribute to innovative projects. Let&apos;s
                  connect and explore how I can enhance your web development
                  initiatives.
                </p>

                <p className="text-sm font-mono leading-relaxed mb-5">
                  As a mathematician who has spent years unraveling the
                  intricacies of abstract theories and complex equations, I have
                  discovered a profound synergy between my mathematical
                  background and the dynamic world of web development. My
                  journey began at Shahjalal University of Science and
                  Technology (SUST) in 2016, where I embarked on an academic
                  odyssey that culminated in the completion of both Honours and
                  Masters degrees. During my time at SUST, I delved deep into
                  the realm of mathematics, ultimately steering my research
                  towards the Hyperbolic (wave) equation and the fascinating
                  realm of Poset Databases [PHP-MYSQL].
                </p>

                <p className="text-sm font-mono leading-relaxed mb-5">
                  While it may seem like an unexpected leap, my foray into the
                  world of web development was driven by a sense of inspiration
                  sparked by the HSC ICT book authored by Professor Mujibur
                  Rahman Chawdhury. It was here that I recognized the immense
                  potential of technology to bridge the gap between abstract
                  mathematical concepts and practical real-world applications.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <SectionHeader title={"Looking for a developer"} />
              <div className="relative">
                <p className="text-sm font-mono mb-5">
                  In essence, my journey from mathematics to web development has
                  enriched my skill set, imbuing my work with a deep
                  appreciation for logic, precision, and innovation. I am
                  passionate about leveraging my mathematical prowess to create
                  web solutions that are not only aesthetically pleasing but
                  also mathematically sound and functionally robust. This unique
                  blend of mathematical rigor and web development creativity is
                  what sets me apart, and it&apos;s what drives me to excel in
                  this exciting and dynamic field.
                </p>
                <div className="md:flex">
                  <figure className="flex-1 p-5">
                    <img className="w-full" src={hireMe} alt="Hire Me" />
                  </figure>
                  <div className="flex-1">
                    <p className="text-sm font-mono mb-5">
                      In summary, a mathematics background can be highly
                      beneficial in web development due to its emphasis on
                      problem-solving, logic, and analytical thinking. However,
                      success in web development ultimately depends on
                      one&apos;s ability to apply their skills effectively and
                      adapt to the ever-changing landscape of technology. A
                      combination of mathematical expertise and web development
                      skills can lead to a unique and powerful skill set in the
                      industry.
                    </p>

                    <p className="text-sm font-mono mb-5">
                      email:{" "}
                      <a href="mailto:hoqe1997@gmail.com">hoqe1997@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
        <title>Ibn Aroub | MERN Stack Developer</title>
      </Helmet>
    </div>
  );
};

export default AboutMe;
