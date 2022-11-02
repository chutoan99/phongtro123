import { menuManage } from "../../utils/menuUser";
let avatar = require("../../img/avatar.jpg");

function AsideSystem({ data }) {
  return (
    <section
      className="pl-[20px] py-[20px] bg-[#f8f9fa] h-[100vh]"
      style={{ borderRight: "1px solid #e6e6e6" }}
    >
      <div className="flex items-center">
        <div className="w-[40px] h-[40px] mr-[10px]">
          <img
            src={avatar}
            alt="user"
            className="w-full h-full rounded-[50%]"
          />
        </div>
        <div className="max-w-[160px] mr-[10px]">
          <div>
            <span className="font-bold">Xin Chào: </span>
            {data?.name}
          </div>
          <div className="overflow-hidden">
            {data?.id?.slice(0, 15) + `...`}
          </div>
        </div>
      </div>
      <div className="flex gap-[20px] mt-[20px]">
        <button className="bg-[#ffc107] text-black capitalize p-[10px] rounded-[5px] relative">
          Nạp tiền
        </button>
        <button className="bg-[#dc3545] text-white capitalize p-[10px] rounded-[5px] relative">
          Đăng tin
        </button>
      </div>
      <ul className="mt-[15px]">
        {menuManage?.map((item, index) => (
          <li
            className="py-[12px] text-[1.1rem] gap-[10px] flex text-[#333]"
            key={index}
            style={{ borderBottom: "1px dashed #eee" }}
          >
            {item.icon}
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideSystem;
