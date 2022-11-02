import { Navigation, MenuDropDown } from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
let logo = require("../../img/logo.png");
let avatar = require("../../img/avatar.jpg");

function Header() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.user.currentUser);
  const { isLogin } = useSelector((state) => state.auth.login);

  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <div>
      <section className="flex items-center h-[50px]  max-w-1100 mx-[auto] pt-[10px]">
        <nav className="flex justify-between w-full">
          <ul className="flex items-center gap-[20px]">
            <div className="w-[100%] h-[100%]" onClick={() => navigate("/")}>
              <img src={logo} alt="logo" className="w-[240px]" />
            </div>
          </ul>
          <ul className="flex gap-[5px] items-center">
            {!isLogin ? (
              <>
                <div className="flex items-center ">
                  <button
                    className="btn rounded-[5px] bg-[#1266dd] text-white capitalize"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Đăng Nhập
                  </button>
                </div>
                <div className="flex items-center ">
                  <button
                    className="btn rounded-[5px] bg-[#1266dd] text-white capitalize"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Đăng Ký
                  </button>
                </div>
              </>
            ) : (
              <>
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
                <div className="flex items-center ">
                  <button
                    className="bg-[#3961fb] text-white capitalize p-[10px] rounded-[5px] relative"
                    onClick={() => setIsDropDown(!isDropDown)}
                  >
                    Quản lý tài khoản
                  </button>
                  {isDropDown ? <MenuDropDown /> : null}
                </div>
              </>
            )}

            <div className="flex items-center ">
              <button className="bg-[#f73859]  text-white capitalize p-[10px] rounded-[5px]">
                Đăng tin mới<i class="fa-solid fa-circle-plus ml-[5px]"></i>
              </button>
            </div>
          </ul>
        </nav>
      </section>
      <Navigation />
    </div>
  );
}
export default Header;
