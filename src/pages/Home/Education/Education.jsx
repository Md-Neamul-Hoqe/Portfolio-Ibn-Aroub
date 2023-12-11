import useAuthContext from "../../../Hooks/useAuthContext";
import SectionHeader from "../../Shared/SectionHeader";

const Education = () => {
  const { maxWidth } = useAuthContext();
  return (
    <section id="education" className="bg-[#2d2413] py-10 shadow-lg">
      <div className={maxWidth}>
        <SectionHeader title="Education" />

        <div className="flex max-md:flex-wrap">
          <div className="mb-4 flex-1">
            <h3 className="text-lg font-semibold">
              Master of Science in Mathematics
            </h3>
            <p className="text-xs">
              Shahjalal University of Science and Technology (SUST)
            </p>
            <p className="text-xs">2020 - 2021 [Exam held on 2023]</p>
            <p className="mt-2 text-main">
              Completed a Master&apos;s degree with a focus on the Hyperbolic
              (wave) equation and Poset Database research.
            </p>
          </div>

          <div className="mb-4 flex-1">
            <h3 className="text-lg font-semibold">
              Bachelor of Science in Mathematics
            </h3>
            <p className="text-xs">
              Shahjalal University of Science and Technology (SUST)
            </p>
            <p className="text-xs">2016 - 2020 [Exam held on 2022]</p>
            <p className="mt-2 text-main">
              Achieved a Bachelor&apos;s degree with a strong foundation in
              mathematics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
