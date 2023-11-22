import useAuthContext from "../../Hooks/useAuthContext";

const Footer = () => {
  const { maxWidth } = useAuthContext();

  return (
    <div className="bg-[#201b0e] py-10">
      <div className={maxWidth}>
        <p>Copyright Muhammad Neamul Hoqe, 2023 [PSD Design Steven Snell]</p>
      </div>
    </div>
  );
};

export default Footer;
