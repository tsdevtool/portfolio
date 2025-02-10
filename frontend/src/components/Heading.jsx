import PropTypes from "prop-types";
const Heading = ({ text, size = 32, font = "bold" }) => {
  const splitText = text.split("");
  return (
    <div className="flex flex-wrap items-center">
      {splitText.map((char, index) => (
        <span
          key={index}
          className={`inline-block transform-none cursor-pointer hover:text-cyan-500  hover:scale-150 font-${font} px-2 py-1 `}
          style={{ fontSize: size }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  font: PropTypes.string,
};

Heading.defaultProps = {
  size: 32,
  font: "bold",
};
export default Heading;
