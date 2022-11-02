import { support } from "../../utils/constant";
function Support() {
  return (
    <div className="h-[442px] p-[30px] rounded-[20px] mt-[50px]">
      <div
        className="h-[150px] bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://phongtro123.com/images/support-bg.jpg)`,
        }}
      ></div>
      <div className="text-center text-[1.2rem] mt-[20px] mb-[20px]">
        {support.header}
      </div>
      <div className="grid-cols-3 grid px-[5px]">
        {support.lists.map((item, index) => (
          <div className="flex-col flex gap-[10px]" key={index}>
            <span className="text-center text-[1.1rem] text-[#f60] font-bold uppercase">
              {item.content}
            </span>
            <span className="text-center text-[1.5rem] text-[#233762] font-bold">
              {item.phone}
            </span>
            <span className="text-center text-[1.5rem] text-[#233762] font-bold">
              {item.zalo}
            </span>
          </div>
        ))}
      </div>
      <div className="w-gull flex justify-center pt-[25px]">
        <button className="bg-[#3961fb] text-[1rem] font-bold px-[30px] py-[10px] text-white rounded-[5px]">
          Gửi liên hệ
        </button>
      </div>
    </div>
  );
}
export default Support;
