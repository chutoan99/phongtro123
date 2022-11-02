import { Navigate, Outlet } from "react-router-dom";
import { System } from "../../components/index";
import { path } from "../../utils/constant";

function SystemPage() {
  // nếu chưa đăng nhập thì
  const islogin = false;
  if (!islogin) return <Navigate to={`${path.SYSTEM}`} replace={true} />;
  return (
    <div
      className="max-w-1100 mx-[auto] bg-white p-[30px] rounded-[20px] mt-[30px]"
      style={{ border: "1px solid #ccc" }}
    >
      <System />
      <Outlet />
    </div>
  );
}
export default SystemPage;
