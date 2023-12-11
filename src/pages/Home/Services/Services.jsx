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
                  We understand the importance of user experience (UX) and user
                  interface (UI) design in engaging visitors. Our designs are
                  not just visually appealing but also intuitive and easy to
                  navigate, maximizing user engagement and conversions.
                </p>
              </div>
              <div className="flex-[1]">
                <h4 className="text-nav mb-1">Web Development</h4>
                <p>
                  My services encompass full-stack development, ensuring
                  seamless functionality and engaging user experiences. From
                  conceptualization to deployment, I collaborate closely with
                  clients to understand their objectives and deliver innovative
                  solutions that surpass expectations.
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
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://ui.dev/amiresponsive">
                        AmiResponsive
                      </a>
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
            <SectionHeader title=" Web Development Skills" />

            <div className="mb-4">
              <h3 className="text-nav mb-1">Front-end Development</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>HTML5, CSS3, JavaScript</li>
                <li>Responsive Web Design</li>
                <li>React.js</li>
                <li>UI/UX Design Principles</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-nav mb-1">Back-end Development</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Node.js, Express.js</li>
                <li>Database Management (e.g., MongoDB, MySQL)</li>
                <li>RESTful API Development</li>
                <li>Server Configuration and Deployment</li>
              </ul>
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
