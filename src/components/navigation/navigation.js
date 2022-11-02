import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { formatVietnameseToString } from "../../utils/Commom/formatVietnameseToString";

function Navigation() {
  const nav = ["blog", "hướng dẫn", "nạp tiền", "bảng giá"];
  const { data } = useSelector((state) => state.category);

  return (
    <nav className="bg-[#1266dd] h-[40px] mt-[10px]">
      <nav className="max-w-1100 mx-[auto] flex">
        <ul className="leading-[40px] flex ">
          <li className="flex items-center px-[5px] capitalize hover:bg-[#f73859]">
            <NavLink to="/" className="mr-[5px] text-white">
              Trang Chủ
            </NavLink>
          </li>
        </ul>
        <ul className="leading-[40px] flex ">
          {data?.length > 0 &&
            data?.map((item) => {
              return (
                <li
                  className="flex items-center px-[5px] capitalize hover:bg-[#f73859] "
                  key={item.code}
                >
                  <NavLink
                    to={formatVietnameseToString(item.value)}
                    className="mr-[5px] text-white"
                  >
                    {item.value}
                  </NavLink>
                </li>
              );
            })}
        </ul>
        <ul className="leading-[40px] flex ">
          {nav.map((item, index) => (
            <li
              className="flex items-center px-[5px] capitalize hover:bg-[#f73859]"
              key={index}
            >
              <NavLink to="/" className="mr-[5px] text-white">
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
}
export default Navigation;
