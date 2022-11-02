import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  AsideSystem,
  HeaderSystem,
  NotSystem,
  Support,
  SystemNavigate,
  ContentSystem,
} from "../../components";
import { fetchPostFail } from "../../redux/postSlice";
function CreatePost() {
  const { data } = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    const getPostFail = async () => {
      await fetchPostFail();
    };
    getPostFail();
  }, []);
  return (
    <>
      <SystemNavigate />
      <div className="row">
        <div className="col-lg-2">
          <AsideSystem data={data} />
        </div>
        <div className="col-lg-10 bg-white px-[20px] overflow-y-auto h-[100vh]">
          <HeaderSystem alert />
          <div className="py-[15px] ">
            <div className="row mt-[30px]">
              <div className="col-lg-8">
                <ContentSystem />
              </div>
              <div className="col-lg-4">
                <NotSystem />
              </div>
            </div>
            <div
              className=" bg-white rounded-[20px] my-[30px]"
              style={{ border: "7px dashed #e8eefc" }}
            >
              <Support />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreatePost;
