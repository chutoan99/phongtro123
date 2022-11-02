import { useDispatch, useSelector } from "react-redux";
import menuManage from "../../utils/menuManage";
import { logoutSuccess } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
function MenuDropDown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuManage = (id) => {
    if (id === 1) {
      navigate(`${menuManage[0].path}`);
    } else if (id === 2) {
      navigate(`${menuManage[1].path}`);
    } else if (id === 3) {
      navigate(`${menuManage[2].path}`);
    } else if (id === 4) {
      dispatch(logoutSuccess());
      localStorage.setItem(
        "token",
        JSON.stringify({ isLogin: false, token: null })
      );
    }
  };
  return (
    <ul className="w-[200px] bg-white absolute top-[50px] rounded-[5px] ">
      {menuManage.map((item, index) => (
        <li
          className="p-[10px] text-[1rem] flex gap-2 cursor-pointer"
          key={index}
          onClick={() => handleMenuManage(item.id)}
        >
          <div>
            <img
              className="w-[20px] h-[20px] rounded-[50%]"
              src={item.icon}
              alt="icon"
            />
          </div>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
export default MenuDropDown;
