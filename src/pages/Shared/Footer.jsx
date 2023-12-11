import useAuthContext from "../../Hooks/useAuthContext";

const Footer = () => {
  const { maxWidth } = useAuthContext();

  return (
    <div className="bg-[#201b0e] py-10 max-sm:px-5 border-t border-nav">
      <div className={maxWidth}>
        <p>
          @Copyright 2023,{" "}
          <span
            title="PSD Designed by Steven Snell"
            className="text-content-heading">
            Muhammad Neamul Hoqe
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
