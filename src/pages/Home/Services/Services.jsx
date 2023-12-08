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
          <div className="md:flex-1" id="contact-me">
            <SectionHeader title="Contact" />
            <div>
              <p>
                If you&apos;re interested in getting a quote for a project or if
                you just have some questions, please email me with the details
                and I will get in touch with you as soon as possible. you can
                also find me on several social networking sites, my profiles are
                listed below.
              </p>
              <address className="border rounded-box p-5 my-4 overflow-x-auto flex flex-wrap gap-6">
                  <strong className="italic">
                    <a className="hover:underline underline-offset-4" href="mailto:hoqe1997@gmail.com">Email</a>
                  </strong>
                  <strong className="italic">
                    <a className="hover:underline underline-offset-4" href="https://www.linkedin.com/in/muhammad-neamul-hoqe-ibn-aroub-69a40429b/">
                      LinkedIn
                    </a>
                  </strong>
                  <strong className="italic">
                    <a className="hover:underline underline-offset-4" href="https://www.facebook.com/mdneamulhoqe.neamul">
                      Facebook
                    </a>
                  </strong>
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
