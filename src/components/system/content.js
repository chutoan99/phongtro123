import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiCreatePost } from "../../services/posts";
import { apiUploadImages } from "../../services/posts";
import { Address, InForMation, Loading } from "../../components/index";
import { getCodesPrice, getCodesArea } from "../../utils/Commom/getCodePrice";
let photos = require("../../img/upload-image.png");

function ContentSystem() {
  const { data } = useSelector((state) => state.post.postEdit);
  const { price, area, category, user } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [imageReview, setImageReview] = useState([]);
  const [payLoad, setPayload] = useState({
    areaNumber: 0,
    priceNumber: 0,
    priceCode: "",
    areaCode: "",
    categoryCode: "",
    title: "",
    images: "",
    address: "",
    target: "",
    province: "",
    description: "",
    label: "",
    userId: "",
  });
  // useEffect(() => {
  //   setPayload({
  //     areaNumber: data?.areaNumber,
  //     priceNumber: data?.priceNumber * 100000,
  //     priceCode: data?.priceCode,
  //     areaCode: data?.areaCode,
  //     categoryCode: data?.categoryCode,
  //     title: data?.title,
  //     images: data?.images,
  //     address: data?.address,
  //     target: data?.overviews?.target,
  //     province: data?.province,
  //     description: data?.description,
  //     label: data?.label,
  //     userId: data?.userId,
  //   });
  // }, [data]);

  const handleUploadImg = async (e) => {
    setLoading(true);
    e.stopPropagation();
    const files = document.querySelector("[type=file]").files;
    let images = [];
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME
      );
      let response = await apiUploadImages(formData);
      if (response.status === 200)
        images = [...images, response.data?.secure_url];
    }
    setLoading(false);
    setImageReview((prev) => [...prev, ...images]);
    setPayload((prev) => ({
      ...prev,
      // images: [...prev.images, ...images],
      images: images,
    }));
  };
  const handleDeteleImg = (image) => {
    setImageReview((prev) => prev?.filter((item) => item !== image));
    setPayload((prev) => ({
      ...prev,
      images: prev.images?.filter((item) => item !== image),
    }));
  };
  const handleCreatePost = async () => {
    let priceCodeArr = getCodesPrice(
      +payLoad.priceNumber / Math.pow(10, 6),
      price?.data,
      1,
      15
    );
    let priceCode = priceCodeArr[0]?.code;
    let areaCodeArr = getCodesArea(+payLoad.areaNumber, area?.data, 0, 90);
    let areaCode = areaCodeArr[0]?.code;
    setPayload((prev) => ({
      ...prev,
      priceCode: priceCode,
      userId: user?.currentUser?.data?.id,
      areaCode: areaCode,
      label: `${
        category?.data?.find((item) => item.code === payLoad.categoryCode)
          ?.value
      }${payLoad?.address?.split(",")[1]}`,
    }));
    if (
      payLoad?.categoryCode &&
      payLoad?.userId &&
      payLoad?.title &&
      payLoad?.priceNumber &&
      payLoad?.areaNumber &&
      payLoad?.label
    ) {
      Swal.fire("Thành công", "đa đăng bài đang mới", "success").then(() => {
        setPayload({
          areaNumber: 0,
          priceNumber: 0,
          categoryCode: "",
          priceCode: "",
          areaCode: "",
          title: "",
          images: "",
          address: "",
          target: "",
          province: "",
          description: "",
          label: "",
          userId: "",
        });
      });
    } else {
      Swal.fire("Oop !", "có lỗi", "error");
    }
    await apiCreatePost(payLoad);
  };
  console.log(payLoad);
  return (
    <>
      <Address setPayload={setPayload} payLoad={payLoad} />
      <InForMation setPayload={setPayload} payLoad={payLoad} />
      <div className="mb-[20px] gap-[10px] grid">
        <h3 className="text-[2rem] font-bold">Hình ảnh</h3>
        <span className="text-[1.2rem] font-medium">
          Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn
        </span>
        <div
          style={{ border: "2px dashed #bbb" }}
          className="p-[2rem] gap-[20px] grid"
        >
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <Loading />
            </div>
          ) : (
            <>
              <div className=" justify-center text-center flex">
                <img src={photos} alt="photos" className="w-[90px] " />
              </div>
              <label
                className="flex justify-center text-[1.2rem] font-medium cursor-pointer"
                htmlFor="file"
              >
                Thêm Ảnh
              </label>{" "}
              <input
                id="file"
                hidden
                type="file"
                name="files[]"
                multiple
                onChange={handleUploadImg}
              />
            </>
          )}
        </div>
      </div>
      <div
        style={{ border: "2px dashed #bbb" }}
        className="p-[2rem] gap-[20px] grid mb-3"
      >
        <span className="text-[1.2rem] font-medium text-center">
          Ảnh Tải lên
        </span>
        <div className="flex gap-4 items-center relative w-full h-full">
          {imageReview?.map((item, index) => {
            return (
              <div key={index} className="w-[150px] h-[150px]">
                <span
                  className="absolute z-10 w-[25px] h-[25px] bg-white rounded-[50%] flex items-center justify-center m-[5px] cursor-pointer"
                  onClick={() => handleDeteleImg(item)}
                >
                  <i class="fa-regular fa-trash-can text-[15px]"></i>
                </span>
                <img
                  src={item}
                  alt="imgReview"
                  className=" w-full h-full object-cover rounded-md "
                />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="bg-[#28a745] p-[10px] w-full rounded-[5px] text-white text-[1.3rem]"
        onClick={handleCreatePost}
      >
        cập nhật
      </button>
    </>
  );
}
export default ContentSystem;
