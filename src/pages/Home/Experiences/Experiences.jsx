import useAuthContext from "../../../Hooks/useAuthContext";
import SectionHeader from "../../Shared/SectionHeader";

const Experiences = () => {
  const { maxWidth } = useAuthContext();
  return (
    <section id="experiences" className="bg-[#2d2413] pb-10 shadow-lg">
      <div className={`max-lg:px-5 ${maxWidth}`}>
        <hr className="border-nav mb-10" />
        <SectionHeader title="Experiences" />
        <div className="flex max-md:flex-col">
          <div className="mb-4 flex-1">
            <h3 className="text-lg font-semibold">
              Research Associate (Web Application Manager)
            </h3>
            <p className="text-xs">
              Research Lab, Department of Mathematics, SUST.
            </p>
            <p className="text-xs">July, 2023 - current</p>
            <p className="mt-2 text-main">
              Research Project: Under the research project ps\2023\1\19 <br />
              Responsibility: Web Application Management which built in previous
              research. <br />
            </p>
          </div>

          <div className="mb-4 flex-1">
            <h3 className="text-lg font-semibold">Research Student</h3>
            <p className="text-xs">
              Research Lab, Department of Mathematics, SUST.
            </p>
            <p className="text-xs">July, 2022 - Jun, 2023</p>
            <p className="mt-2 text-main">
              Research Project: Under the research project ps\2022\1\20 <br />
              Responsibility: Developing and implementing computer codes. <br />
              This is an Partially Ordered Set Representation Site Managed by
              Research Lab, Department of Mathematics, SUST.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
