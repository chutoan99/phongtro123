import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { apiPostsDetail } from "../../services/posts";
import { renderStart } from "../../utils/Commom/renderStart";
let POST_IMG = require("../../img/POST_IMG.jpg");

function ItemPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { data } = useSelector((state) => state.post.limitPosts);
  useEffect(() => {
    const fetchPostDetail = async () => {
      await apiPostsDetail(params.id, dispatch);
    };
    fetchPostDetail();
  }, [params.id]);

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            style={{ borderTop: "1px solid red" }}
            className="bg-[#fff9f3] cursor-pointer"
            key={index}
            onClick={() => navigate(`/detail/${item?.id}`)}
          >
            <div className="flex gap-[20px] mx-[20px] py-[20px]">
              <div>
                {JSON.parse(item?.images.image)[0] === undefined ? (
                  <div className="w-[170px] h-[160px]">
                    <img
                      className="w-full h-full rounded-[5px] "
                      alt="post"
                      src={POST_IMG}
                    />
                  </div>
                ) : null}
                {JSON.parse(item?.images.image).map((ele, index) => (
                  <>
                    {ele !== null && index < 1 ? (
                      <div className="w-[170px] h-[160px]" key={index}>
                        <img
                          className="w-full h-full rounded-[5px] "
                          alt="post"
                          src={ele}
                        />
                      </div>
                    ) : null}
                  </>
                ))}
              </div>
              <div>
                <div className="w-full flex text-title uppercase font-bold">
                  {renderStart(item?.start).length > 0 &&
                    renderStart(item?.start).map((start, index) => {
                      return <span key={index}>{start}</span>;
                    })}
                  {item?.title}
                </div>
                <div className="flex justify-between w-full mt-[10px]">
                  <span className="text-green text-[1.2rem] font-extralight leading-[19px] block">
                    {item?.attributes?.price}
                  </span>
                  <span className="text-[#ccc] leading-[19px] block">
                    {item?.attributes?.acreage}
                  </span>
                  <span className="max-w-[250px] text-[#333] block capitalize">
                    {`${
                      item?.address.split(",")[
                        item.address.split(",").length - 2
                      ]
                    },${
                      item?.address.split(",")[
                        item.address.split(",").length - 1
                      ]
                    }`}
                  </span>
                  <span className="max-w-[250px] text-[#ccc] block">
                    {item?.attributes?.published}
                  </span>
                </div>
                <div className="pt-[10px] text-[#8a8d91] webkit-box">
                  <p>{JSON.parse(item?.description)}</p>
                </div>
                <div className="flex items-center pt-[20px] justify-between">
                  <div className="flex gap-[5px] items-center">
                    {JSON.parse(item.images.image)[0] === undefined ? (
                      <div className="w-[30px] h-[30px]">
                        <img
                          className="rounded-[50%] w-full h-full"
                          alt="post"
                          src={POST_IMG}
                        />
                      </div>
                    ) : null}

                    {JSON.parse(item.images.image).map((ele, index) =>
                      ele !== null && index < 1 ? (
                        <div
                          className="flex items-center w-[30px] h-[30px]"
                          key={index}
                        >
                          <img
                            className="rounded-[50%] w-full h-full"
                            alt="avatar"
                            src={ele}
                          />
                        </div>
                      ) : null
                    )}
                    <div className="text-[#ccc]">{item.user.name}</div>
                  </div>
                  <button className="bg-secondary1 text-white p-[5px] rounded-[5px]">
                    gọi : {item?.user.phone}
                  </button>
                  <button className="border-[#1266dd] border-[1px] p-[5px] rounded-[5px]">
                    zalo:{item?.user.zalo}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ItemPost;
