import PropTypes from "prop-types";
import { renderStart } from "../../utils/Commom/renderStart";

function HeaderPost({ data }) {
  return (
    <>
      {data?.map((item) => (
        <div className="py-[20px] bg-white px-[20px]">
          <div className="items-center mb-[20px]">
            {renderStart(item?.start)}
            <span className="text-[#E13427] text-[1.7rem]">{item.title}</span>
          </div>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <span>Chuyên mục:</span>
            <p className="text-[#1266dd]">Cho thuê phòng trọ Huyện Đức Hòa</p>
          </div>
          <div className="flex item-center gap-[5px] mb-[10px] text-[1rem]">
            <i class="fa-solid fa-location-dot text-[#1266dd]"></i>
            <address className="text-[#333]">{item.address}</address>
          </div>
          <div className="flex gap-[35px] items-center ">
            <span className="text-[#16c784] text-[1.5rem] text-medium">
              <i class="fa-thin fa-money-bill-simple-wave"></i>
              {item.attributes.price}
            </span>
            <span className="flex gap-[5px] text-[1rem]">
              <i class="fa-sharp fa-solid fa-chart-area"></i>
              {item.attributes.acreage}
            </span>
            <span className="flex gap-[5px] text-[1rem]">
              <i class="fa-solid fa-timer"></i>
              {item.attributes.published}
            </span>
            <span className="flex gap-[5px] text-[1rem]">
              <i class="fa-solid fa-code"></i>
              {item.attributes.hashtag}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
HeaderPost.propTypes = {};
export default HeaderPost;
