import PropTypes from "prop-types";

function PageDot({ text }) {
  return (
    <div className="w-[50px] h-[50px] pt-[18px] py-[15px] text-[1.5rem] items-center flex justify-center bg-white  rounded-[5px] cursor-not-allowed">
      {text}
    </div>
  );
}
PageDot.prototype = {
  text: PropTypes.string,
};
export default PageDot;
