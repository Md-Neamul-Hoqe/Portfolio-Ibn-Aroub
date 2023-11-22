import { HashLink } from "react-router-hash-link";
import useAuthContext from "../../../Hooks/useAuthContext";
import SectionHeader from "../../Shared/SectionHeader";

const Services = () => {
  const { maxWidth } = useAuthContext();

  return (
    <section id="services" className={`py-10 bg-[#2d2413]`}>
      <div className={maxWidth}>
        <div className="max-md:flex-col flex gap-6 max-md:px-5 max-sm:text-justify mb-10">
          <div className="flex-[2]">
            <SectionHeader title={"services"} />{" "}
            <div className="max-md:flex-col flex gap-6">
              <div className="flex-[1]">
                <h4 className="text-nav mb-1">Web Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  quis posuere enim. Etiam ipsum odio, interdum quis lobortis
                  eu, consequat non orci. Proin dapibus pretium augue non
                  convallis.{" "}
                </p>
              </div>
              <div className="flex-[1]">
                <h4 className="text-nav mb-1">Web Development</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  quis posuere enim. Etiam ipsum odio, interdum quis lobortis
                  eu, consequat non orci. Proin dapibus pretium augue non
                  convallis.{" "}
                </p>
              </div>
            </div>
            <div className="flex-[2]">
              <h4 className="mb-1 text-nav mt-5">Tools</h4>
              <ol type="1" start="1" id="Tools-list">
                <li>
                  Text Editors/IDEs:
                  <ul>
                    <li>Visual Studio Code</li>
                    <li>NetBeans</li>
                  </ul>
                </li>
                <li>
                  Frameworks and Libraries:
                  <ul>
                    <li>Tailwidcss</li>
                    <li>Bootstrap</li>
                    <li>React JS</li>
                  </ul>
                </li>
                <li>
                  Graphics and Design Tools:
                  <ul>
                    <li>Adobe Photoshop</li>
                    <li>Figma</li>
                  </ul>
                </li>
                <li>
                  Version Control
                  <ul>
                    <li>GIT</li>
                    <li>GitHub/GitLab</li>
                  </ul>
                </li>
                <li>
                  Browser Developer Tools:
                  <ul>
                    <li>Chrome DevTools</li>
                    <li>Firebase DevTools</li>
                    <li>Brave DevTools</li>
                  </ul>
                </li>
                <li>
                  Task Runners and Build Tools:
                  <ul>
                    <li>Vite</li>
                    <li>Gulp</li>
                  </ul>
                </li>
                <li>
                  Responsive Design Testing:
                  <ul>
                    <li>Chrome DevTools Device Mode</li>
                    <li>
                      <a href="https://ui.dev/amiresponsive">AmiResponsive</a>
                    </li>
                  </ul>
                </li>
                <li>
                  API Development:
                  <ul>
                    <li>Postman</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div className="md:flex-1">
            <SectionHeader title="Contact" />
            <div>
              <p>
                If you&apos;re interested in getting a quote for a project or if
                you just have some questions, please email me with the details
                and I will get in touch with you as soon as possible. you can
                also find me on several social networking sites, my profiles are
                listed below.
              </p>
              <address className="border rounded-box p-5 my-4">
                <p>
                  <strong className="italic">Email: </strong>
                  <a href="mailto:hoqe1997@gmail.com">hoqe1997@gmail.com</a>
                </p>
                <p>
                  <strong className="italic">LinkedIn: </strong>
                  <a href="https://www.linkedin.com/in/muhammad-neamul-hoqe-ibn-aroub-69a40429b/">
                    https://www.linkedin.com/in/muhammad-neamul-hoqe-ibn-aroub-69a40429b/
                  </a>
                </p>
                <p>
                  <strong className="italic">Facebook: </strong>
                  <a href="https://www.facebook.com/mdneamulhoqe.neamul">
                    https://www.facebook.com/mdneamulhoqe.neamul
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
        <HashLink smooth to="#top" className="text-content-heading font-bold">
          Return to top
        </HashLink>
      </div>
    </section>
  );
};

export default Services;
