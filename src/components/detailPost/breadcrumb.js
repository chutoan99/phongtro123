import PropTypes from "prop-types";

function Breadcrumb({}) {
  return (
    <nav className="my-[10px] ml-[10px] grid">
      <div className="flex gap-[5px] text-[#1266dd] text-[1rem]">
        <span>Cho Thuê Phòng Trọ</span>
        <span>
          <i class="fa-solid fa-angle-right mr-[3px] text-[#ccc] text-[0.9rem]"></i>
          Long An
        </span>
        <span>
          <i class="fa-solid fa-angle-right mr-[3px] text-[#ccc] text-[0.9rem]"></i>
          Huyện Đức Hòa
        </span>
      </div>
    </nav>
  );
}
Breadcrumb.propTypes = {};
export default Breadcrumb;
