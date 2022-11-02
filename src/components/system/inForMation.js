import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Select, Input, Textarea } from "../index";
import { option, optionCategory } from "../../utils/Commom/optionSelect";
function InForMation({ setPayload, payLoad }) {
  const { postEdit } = useSelector((state) => state.post);
  const { data } = useSelector((state) => state.user.currentUser);
  const [textarea, setTextarea] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [target, setTarget] = useState("");
  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      description: textarea,
      title: title,
      areaNumber: +area,
      priceNumber: +price / Math.pow(10, 6),
      categoryCode: category,
      target: target,
    }));
  }, [textarea, title, area, price, category, target]);
  console.log(postEdit?.data);
  return (
    <div className="my-[30px] gap-[15px] grid">
      <div className="text-[2rem] font-bold">
        <h3>Thông tin mô tả</h3>
      </div>
      <Select
        text="--Chọn Loại chuyên mục --"
        title="Loại chuyên mục"
        id="chuyenmuc"
        option={optionCategory}
        optionLimit={setCategory}
      />
      <Input
        title="Tiêu đề"
        id="tieude"
        setValue={setTitle}
        value={postEdit?.data?.title !== "" ? postEdit?.data?.title : ""}
      />
      <Textarea
        title="Nội dung mô tả"
        id="noidungmota"
        value={
          postEdit?.data?.description !== "" ? postEdit?.data?.description : ""
        }
        setTextarea={setTextarea}
      />
      <Input
        title="Thông tin liên hệ"
        id="thongtinlienhe"
        WithInput="w-[50%]"
        bg="bg-[#e9ecef]"
        placeholder={data?.name}
      />
      <Input
        title="Thông tin liên hệ"
        id="dienthoai"
        WithInput="w-[50%]"
        bg="bg-[#e9ecef]"
        placeholder={data?.phone}
      />
      <Input
        sub="đồng"
        title="Giá cho thuê"
        id="giachothue"
        WithInput="w-[50%]"
        value={
          postEdit?.data?.priceNumber !== "" ? postEdit?.data?.priceNumber : 0
        }
        span={"Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000"}
        setValue={setPrice}
      />
      <Input
        value={
          postEdit?.data?.areaNumber !== "" ? postEdit?.data?.areaNumber : 0
        }
        sub="m2"
        title="Diện tích"
        id="dientich"
        WithInput="w-[50%]"
        setValue={setArea}
      />
      <Select
        // text={
        //   postEdit?.data?overviews?.target != ""  postEdit?.data?.target}
        title="Đối tượng cho thuê"
        optionLimit={setTarget}
        option={option}
        id="tatca"
        WithInput="w-[50%]"
        value={postEdit?.data?.overviews?.target || payLoad?.target}
      />
    </div>
  );
}
export default InForMation;
