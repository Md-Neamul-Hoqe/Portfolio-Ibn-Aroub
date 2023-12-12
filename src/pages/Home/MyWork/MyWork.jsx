import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../Hooks/useAuthContext";
import SectionHeader from "../../Shared/SectionHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyWork = () => {
  const [projectLength, setProjectLength] = useState(6);
  const { maxWidth } = useAuthContext();
  const axios = useAxiosSecure();


  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("/projects");

      // console.log(res.data);

      return res?.data;
    },
  });

  return (
    <section id="my-work" className="py-10">
      <div className={maxWidth}>
        <SectionHeader title={"My Work"} />
        {isLoading ? (
          "loading..."
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects?.length
                ? projects.slice(0, projectLength).map((theProject, idx) => {
                    const { title, image, description, project } = theProject;
                    // console.log(project["live"]);
                    return (
                      <div key={idx + 1} className="card rounded-none glass">
                        <div className="border-2 p-1 overflow-hidden ">
                          <div
                            className="h-60"
                            style={{
                              backgroundImage: `url(${image})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              position: "top",
                            }}></div>
                        </div>
                        {/* <figure className="h-60 border-2 p-1 object-fill">
                        <img
                          className=" w-full"
                          src={image}
                          alt={title}
                          width="100"
                          height="100"
                        />
                      </figure> */}
                        <div className="card-body">
                          <h2 className="card-title">{title}</h2>
                          <p>{description?.split(".")[0]}</p>
                          <div className="card-actions justify-start">
                            {Object.keys(project)?.length
                              ? Object.keys(project)?.map((linkType, idx) => {
                                  // console.log(project[linkType]);

                                  return (
                                    <div
                                      key={idx}
                                      className="border w-full p-1 my-0.5 overflow-x-auto">
                                      {linkType === "live" ? (
                                        <Link
                                          target="_blank"
                                          rel="noreferrer"
                                          to={project[linkType]}
                                          className="hover:underline underline-offset-4 text-content-heading">
                                          Live link
                                        </Link>
                                      ) : project[linkType]?.length === 1 ? (
                                        <Link
                                          target="_blank"
                                          rel="noreferrer"
                                          to={project[linkType][0]}
                                          className="hover:underline underline-offset-4 text-content-heading">
                                          GitHub Link
                                        </Link>
                                      ) : (
                                        <>
                                          <Link
                                            target="_blank"
                                            rel="noreferrer"
                                            to={project[linkType][0]}
                                            className="hover:underline underline-offset-4 text-content-heading pr-5">
                                            Client Side Link
                                          </Link>
                                          <Link
                                            target="_blank"
                                            rel="noreferrer"
                                            to={project[linkType][1]}
                                            className="hover:underline underline-offset-4 text-content-heading">
                                            Server Side Link
                                          </Link>
                                        </>
                                      )}
                                    </div>
                                  );
                                })
                              : "No Links Found"}
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
            {projects?.length > 0 && projects?.length > projectLength ? (
              <div className="w-full text-center py-10">
                <button
                  onClick={() => setProjectLength(projects?.length)}
                  className="btn text-content-heading hover:bg-transparent glass">
                  Show All
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
};

export default MyWork;
