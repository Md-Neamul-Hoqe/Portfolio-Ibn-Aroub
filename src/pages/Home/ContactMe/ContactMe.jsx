import { useForm } from "react-hook-form";
import useAuthContext from "../../../Hooks/useAuthContext";
import SectionHeader from "../../Shared/SectionHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ContactMe = () => {
  const { maxWidth } = useAuthContext();
  const axios = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("/send-message", data).then((res) => {
      if (res?.data?.id) {
        console.log(res?.data);
        toast("Sent successfully.", {
          autoClose: 2000,
          theme: "dark",
        });
        reset();
      }
    });
  };

  return (
    <section id="contact-me" className="py-12 max-sm:px-5 bg-[#201b0e]">
      <div className={`${maxWidth}`}>
        <SectionHeader title="Contact Me" />
        <div className="flex max-md:flex-wrap gap-16">
          <p className="flex-1 text-lg text-justify">
            If you&apos;re interested in getting a quote for a project or if you
            just have some questions, please email me with the details and I
            will get in touch with you as soon as possible. you can also find me
            on several social networking sites, my profiles are listed below.
          </p>
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <h2 className="text-nav mb-1">Feel free to text</h2>
              <div className="form-control">
                <label className="label sr-only">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className={`input input-bordered text-black ${
                    errors.name ? "input-error" : ""
                  }`}
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label sr-only">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className={`input input-bordered text-black italic ${
                    errors.email ? "input-error" : ""
                  }`}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label sr-only">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  {...register("title")}
                  placeholder="Title"
                  className="input input-bordered text-black"
                />
              </div>
              <div className="form-control">
                <label className="label sr-only">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  type="text"
                  {...register("message", { required: true })}
                  placeholder="Your Message"
                  className={`textarea textarea-bordered text-black ${
                    errors.message ? "textarea-error" : ""
                  }`}
                  rows={5}
                />
                {errors.message && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn text-content-heading hover:bg-transparent glass">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
