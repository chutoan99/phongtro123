import PropTypes from "prop-types";
import { createSearchParams, useNavigate } from "react-router-dom";

function PageNumbers({ number, index, currentPage, icon, dot }) {
  const navigate = useNavigate();
  const handelChangeNumberPage = (number) => {
    navigate({
      pathname: "/",
      search: createSearchParams({
        page: number,
      }).toString(),
    });
  };

  const notActive =
    "w-[50px] h-[50px] pt-[18px] py-[15px] items-center flex justify-center bg-white hover:bg-[#E13427]  rounded-[5px] cursor-pointer";
  const isActive =
    "w-[50px] h-[50px] pt-[18px] py-[15px] bg-[#E13427] text-white items-center flex justify-center   rounded-[5px] cursor-pointer";
  return (
    <div
      key={index}
      onClick={() => handelChangeNumberPage(number)}
      className={number === currentPage ? isActive : notActive}
    >
      {icon || number || dot}
    </div>
  );
}
PageNumbers.prototype = {
  PageDot: PropTypes.number,
  number: PropTypes.number,
  index: PropTypes.number,
  currentPage: PropTypes.number,
  icon: PropTypes.object,
  dot: PropTypes.string,
};
export default PageNumbers;
