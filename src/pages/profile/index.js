import { AsideSystem, SystemNavigate } from "../../components";
import { useSelector } from "react-redux";
import { Input } from "../../components/index";
let avatar = require("../../img/avatar.jpg");
function ProfilePage() {
  const { data } = useSelector((state) => state.user.currentUser);

  return (
    <>
      <SystemNavigate />
      <div className="row">
        <div className="col-lg-2">
          <AsideSystem />
        </div>
        <div className="col-lg-10 bg-white">
          <div className="mx-[400px] bg-white  rounded-[20px] mt-[30px]">
            <section className=" grid gap-[20px]">
              <Input
                title="Mã thành viên"
                id="user_id"
                value="123004"
                default
              />
              <Input
                title="Số điện thoại"
                id="user_phone"
                value={data?.phone}
                span="Đổi số điện thoại"
                default
              />
              <Input
                title="Tên hiển thị"
                id="user_name"
                value={data?.name}
                placeholder="Ex: Nguyễn Văn A"
              />
              <Input title="Email" id="user_email" />
              <Input
                title="Số Zalo"
                id="user_zalo"
                value={data?.zalo}
                default
              />
              <Input title="Facebook" id="user_facebook" />
              <Input title="Mật khẩu" id="user_password" span="Đổi mật khẩu" />
              <div className="w-full justify-center flex">
                <div className="w-[100px] h-[100px] ">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-full h-full rounded-[50%]"
                  />
                </div>
              </div>
              <div className="flex gap-[20px]">
                <span className="w-[200px] text-right flex items-center justify-end text-[1.2rem]">
                  Ảnh đại diện
                </span>
                <div className="w-full flex">
                  <div className="">
                    <span className="mr-[10px] ">Xóa hình này</span>
                    <input type="file" className="mr-[10px]" multiple="" />
                    <input
                      type="hidden"
                      name="user_avatar"
                      className="ml-[5px]"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px]">
                <label
                  htmlFor="user_avatar"
                  className="w-[200px] text-right flex items-center justify-end text-[1.2rem]"
                ></label>
              </div>
              <div className="form-group row mt-5">
                <label htmlFor="user_email" className=""></label>
                <button className="h-[42px] bg-[#007bff] w-full rounded-[10px] text-white text-[1.2rem]">
                  Lưu &amp; Cập nhật
                </button>
              </div>
              <input type="hidden" name="user_id" value="123004" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
