import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AsideSystem,
  SystemNavigate,
  HeaderSystem,
  Support,
  UpdatePost,
} from "../../components";
import { fetchPostEdit } from "../../redux/postSlice";
import { apiPosted } from "../../services/posts";
import moment from "moment";

function ManagePost() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user.currentUser.data);
  const { data } = useSelector((state) => state.post.posted);
  const [edit, setEdit] = useState(false);

  const query = { UserId: id };
  useEffect(() => {
    const fetchApiPosted = async () => {
      await apiPosted(query, dispatch);
    };
    fetchApiPosted();
  }, [id]);
  const checkStatus = (dateTime) =>
    moment(dateTime, "DD/MM/YYYY").isSameOrAfter(new Date().toDateString());
  const handleShowEditPost = (item) => {
    dispatch(fetchPostEdit(item));
    setEdit(true);
  };
  return (
    <div className="w-full ">
      <SystemNavigate />
      <div className="row">
        <div className="col-lg-2">
          <AsideSystem />
        </div>
        <div className="col-lg-10 bg-white mt-[40px] px-[20px] overflow-y-auto h-[100vh]">
          <HeaderSystem type />
          <table className="w-full overflow-x-hidden overflow-hidden">
            <thead style={{ border: "1px solid #ccc" }}>
              <tr className="grid-cols-8 grid text-center text-[1.2rem] h-[40px] ">
                <th
                  style={{ borderRight: "1px solid #ccc" }}
                  className="h-[40px] items-center flex justify-center"
                >
                  Mã tin
                </th>
                <th
                  style={{ borderRight: "1px solid #ccc" }}
                  className="h-[40px] items-center flex justify-center"
                >
                  Ảnh đại diện
                </th>
                <th
                  style={{ borderRight: "1px solid #ccc" }}
                  className="h-[40px] items-center flex justify-center"
                >
                  Tiêu đề
                </th>
                <th
                  style={{ borderRight: "1px solid #ccc" }}
                  className="h-[40px] items-center flex justify-center"
                >
                  Giá
                </th>
                <th
                  style={{ borderRight: "1px solid #ccc" }}
                  className="h-[40px] items-center flex justify-center"
                >
                  Ngày bắt đầu
                </th>
                <th
                  style={{ borderRight: "1px solid #ccc" }}
                  className="h-[40px] items-center flex justify-center"
                >
                  Ngày hết hạn
                </th>
                <th
                  style={{ borderRight: "1px solid #ccc" }}
                  className="h-[40px] items-center flex justify-center"
                >
                  Trạng thái
                </th>
                <th
                  style={{ borderRight: "1px solid #ccc" }}
                  className="h-[40px] items-center flex justify-center"
                >
                  Chỉnh sửa
                </th>
              </tr>
            </thead>
            {data?.length === 0 ? (
              <tbody style={{ border: "1px solid #ccc" }}>
                <tr className="w-full text-[1.2rem] h-[40px] items-center flex ml-[10px] ">
                  <td>
                    Bạn chưa có tin đăng nào. Bấm
                    <a href="# ">vào đây</a> để bắt đầu đăng tin
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody style={{ border: "1px solid #ccc" }}>
                {data?.map((item, index) => (
                  <tr
                    className="grid-cols-8 grid text-center text-[1.2rem] "
                    key={index}
                    style={{ border: "1px solid #ccc" }}
                  >
                    <td
                      style={{ borderRight: "1px solid #ccc" }}
                      className="h-[40px] items-center flex justify-center py-[40px]"
                    >
                      {item.overviews.code}
                    </td>
                    <td
                      style={{ borderRight: "1px solid #ccc" }}
                      className="h-[40px] items-center flex justify-center py-[40px]"
                    >
                      <div className="w-[50px] h-[50px]">
                        <img
                          className="w-full h-full"
                          src={JSON.parse(item?.images.image)}
                          alt="bg"
                        />
                      </div>
                    </td>
                    <td
                      style={{ borderRight: "1px solid #ccc" }}
                      className="h-[40px] items-center flex justify-center py-[40px]"
                    >
                      {item?.title}
                    </td>
                    <td
                      style={{ borderRight: "1px solid #ccc" }}
                      className="h-[40px] items-center flex justify-center py-[40px]"
                    >
                      {item?.attributes?.price}
                    </td>
                    <td
                      style={{ borderRight: "1px solid #ccc" }}
                      className="h-[40px] items-center flex justify-center py-[40px]"
                    >
                      {item?.overviews.created}
                    </td>
                    <td
                      style={{ borderRight: "1px solid #ccc" }}
                      className="h-[40px] items-center flex justify-center py-[40px]"
                    >
                      {item?.overviews.expired}
                    </td>
                    <td
                      style={{ borderRight: "1px solid #ccc" }}
                      className="h-[40px] items-center flex justify-center py-[40px]"
                    >
                      {checkStatus(item?.overviews.expired.split(" ")[3])
                        ? "Tin đang hiển thị"
                        : "Tin hết hạn"}
                    </td>
                    <td
                      style={{ borderRight: "1px solid #ccc" }}
                      className="h-[40px] items-center flex justify-center py-[40px]"
                    >
                      <div className="gap-[10px] flex">
                        <span
                          class="p-[10px] bg-[#ffc107] rounded-[5px] px-[15px] text-black"
                          onClick={() => handleShowEditPost(item)}
                        >
                          Sửa
                          <i class="fa-solid fa-pen-to-square ml-[6px]"></i>
                        </span>
                        <span class="p-[10px] bg-[#dc3545] rounded-[5px] px-[15px] text-black ">
                          xóa<i class="fa-solid fa-trash ml-[6px]"></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {edit && <UpdatePost setEdit={setEdit} />}
          <div
            className=" bg-white rounded-[50px] mb-[30px] mt-[60px]"
            style={{ border: "7px dashed #e8eefc" }}
          >
            <Support />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManagePost;
