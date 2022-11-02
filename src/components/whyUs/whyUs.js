import { whyUs } from "../../utils/constant";
import { renderStart } from "../../utils/Commom/renderStart";

function WhyUs() {
  return (
    <div className="p-[30px] rounded-[20px] mt-[30px]">
      <div className="px-[50px] pt-[20px]">
        <div className="text-center text-[1.2rem] font-bold">
          {whyUs.header}
        </div>
        <div className="text-center text-[0.9rem] my-[20px] leading-[1.5rem]">
          {whyUs.title}
        </div>
        <div className="grid-cols-4 grid px-[5px]">
          {whyUs.lists.map((item, index) => (
            <div className="flex-col flex gap-[5px]" key={index}>
              <span className="text-center text-[1.5rem] font-bold">
                {item.content}
              </span>
              <span className="text-center text-[1rem] mb-[20px] text-[#333]">
                {item.subContent}
              </span>
            </div>
          ))}
        </div>
        <div>
          <div className="">
            <p className="flex justify-center mb-[20px] text-[1.3rem] font-bold text-[#333]">
              {whyUs.subTitle}
            </p>
            <div className="flex justify-center text-[1.5rem] mb-[20px] gap-[20px]">
              {renderStart(5).map((start, index) => {
                return <span key={index}>{start}</span>;
              })}
            </div>
            <p className="text-center text-[1rem] mb-[15px] leading-[1.5rem] text-[#333] italic">
              {whyUs.des}
            </p>
            <p className="text-center mb-[20px] text-[1.3rem] front-bold">
              {whyUs.des2}
            </p>
            <p className="text-center text-[1rem] mb-[35px]">{whyUs.des3}</p>
          </div>
        </div>
        <div className="w-gull flex justify-center">
          <button className="bg-[#f73859] text-[1rem] font-bold px-[30px] py-[10px]  text-white rounded-[5px]">
            Đăng tin ngay
          </button>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;
