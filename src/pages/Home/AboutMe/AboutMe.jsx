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
          <div className={`flex gap-6 pt-[100px] py-12 ${maxWidth}`}>
            <div className={`flex-1`}>
              <div>
                <SectionHeader title={"About me"} />
              </div>
              <div>
                <p className="text-sm font-mono leading-relaxed mb-5">
                  Your welcome message or “about me” text will go here. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
                  posuere enim. Etiam ipsum odio, interdum quis lobortis eu,
                  consequat non orci. Proin dapibus pretium augue non convallis.
                  Aliquam sit amet nisi nec arcu bibendum imperdiet.{" "}
                </p>

                <p className="text-sm font-mono leading-relaxed mb-5">
                  Duis eleifend accumsan ligula, suscipit viverra mi tempus sed.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Nam diam felis, convallis a
                  pharetra at, tristique ac ipsum. Maecenas viverra mollis est
                  quis venenatis. Duis tincidunt lorem id augue congue
                  adipiscing.{" "}
                </p>

                <p className="text-sm font-mono leading-relaxed mb-5">
                  Nunc et urna et magna aliquam hendrerit eu sit amet arcu.
                  Aenean tempus sapien sagittis massa gravida id cursus lacus
                  semper. Aliquam erat volutpat. In scelerisque, purus eu mollis
                  laoreet, nisl elit commodo mi, non dapibus orci ipsum id dui.{" "}
                </p>
              </div>
            </div>
            <div className="flex-1">
              <SectionHeader title={"Looking for a developer"} />
              <div className="relative">
                <p className="text-sm font-mono mb-5">
                  Your welcome message or “about me” text will go here. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
                  posuere enim. Etiam ipsum odio, interdum quis lobortis eu,
                  consequat non orci. Proin dapibus pretium augue non convallis.
                  Aliquam sit amet nisi nec arcu bibendum imperdiet.{" "}
                </p>
                <div className="flex">
                  <figure className="flex-1 p-5">
                    <img className="w-full" src={hireMe} alt="Hire Me" />
                  </figure>
                  <div className=" flex-1">
                    <p className="text-sm font-mono mb-5">
                      Duis eleifend accumsan ligula, suscipit viverra mi tempus
                      sed. Vestibulum ante ipsum primis in faucibus orci luctus
                      et ultrices posuere cubilia Curae; Nam diam felis,
                      convallis a pharetra at, tristique ac ipsum. Maecenas
                      viverra mollis est quis venenatis. Duis tincidunt lorem id
                      augue congue adipiscing.{" "}
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
