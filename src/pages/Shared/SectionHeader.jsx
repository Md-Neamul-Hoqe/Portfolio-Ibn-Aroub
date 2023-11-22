import PropTypes from "prop-types";

const SectionHeader = ({ title }) => {
  return (
    <>
      <h2 className="text-lg leading-4 text-content-heading uppercase font-cinzel mb-5">
        {title}
      </h2>
    </>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
