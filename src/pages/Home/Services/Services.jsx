import { HashLink } from "react-router-hash-link";
import useAuthContext from "../../../Hooks/useAuthContext";
import SectionHeader from "../../Shared/SectionHeader";

const Services = () => {
  const { maxWidth } = useAuthContext();

  return (
    <section className={`${maxWidth} py-10`}>
      <div className="flex gap-6">
        <div className="flex-[2]">
          <SectionHeader title={"services"} />{" "}
          <div className="flex gap-6">
            <div className="flex-[1]">
              <h4 className="text-nav mb-1">Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis posuere enim. Etiam ipsum odio, interdum quis lobortis eu,
                consequat non orci. Proin dapibus pretium augue non convallis.{" "}
              </p>
            </div>
            <div className="flex-[1]">
              <h4 className="text-nav mb-1">Web Development</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis posuere enim. Etiam ipsum odio, interdum quis lobortis eu,
                consequat non orci. Proin dapibus pretium augue non convallis.{" "}
              </p>
            </div>
          </div>
          <div className="py-20">
            <h4 className="mb-1 text-nav">Tools</h4>
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
        <div className="flex-1">
          <SectionHeader title="Contact" />
          <div>
            <p>
              If you&apos;re interested in getting a quote for a project or if
              you just have some questions, please email me with the details and
              I will get in touch with you as soon as possible. you can also
              find me on several social networking sites, my profiles are listed
              below.
            </p>
            <address className="border rounded-box p-5 my-4">
              <p>
                Email:{" "}
                <a href="mailto:hoqe1997@gmail.com">hoqe1997@gmail.com</a>
              </p>
              <p>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/muhammad-neamul-hoqe-ibn-aroub-69a40429b/">
                  Md. Neamul Hoqe
                </a>
              </p>
              <p>
                Facebook:{" "}
                <a href="https://www.facebook.com/mdneamulhoqe.neamul">
                  Md. Neamul Hoqe
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <HashLink smooth to="#top" className="text-nav font-bold">
        Return to top
      </HashLink>
    </section>
  );
};

export default Services;
