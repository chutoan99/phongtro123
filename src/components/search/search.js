import { useCallback, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { SearchItem } from "../index";

function Search() {
  const navigate = useNavigate();
  const [indexModels, setIndexModals] = useState();
  const [modals, setModals] = useState(true);
  const [queries, setQueries] = useState([]);
  const [arrMinMax, setArrMinMax] = useState({});
  const handleIsShowModel = (number) => {
    setIndexModals(number);
    setModals(true);
  };
  const handleSubmit = useCallback(
    (query, arrMaxMin) => {
      setQueries((prev) => ({ ...prev, ...query }));
      setModals(false);
      arrMinMax && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));
    },
    [queries, modals]
  );
  const handelSearch = () => {
    const queryCodes = Object.entries(queries).filter((item) =>
      item[0].includes("Code")
    );
    let queryCodesObj = {};
    queryCodes.forEach((item) => {
      queryCodesObj[item[0]] = item[1];
    });
    navigate({
      pathname: "/",
      search: createSearchParams(queryCodesObj).toString(),
    });
  };
  const notActive =
    "bg-white w-full h-full cursor-pointer items-center flex  rounded-[5px] p-[10px] justify-between  gap-[10px]";
  const Active =
    "bg-white w-full h-full cursor-pointer items-center flex font-bold rounded-[5px] p-[10px] justify-between  gap-[10px]";
  return (
    <section className=" mt-[30px] text-[1rem] bg-[#febb02] p-[10px] color-[#333] mb-[20px] h-[55px] rounded-[8px] flex justify-between items-center gap-[20px]">
      <SearchItem
        queries={queries}
        indexModels={indexModels}
        modals={modals}
        setModals={setModals}
        handleSubmit={handleSubmit}
        arrMinMax={arrMinMax}
      />
      <div
        className="flex items-center justify-between w-full"
        onClick={() => handleIsShowModel(0)}
      >
        <div className={queries.category ? Active : notActive}>
          {queries.category || "Phòng trọ, nhà trọ"}
        </div>
      </div>
      <div
        className="flex items-center justify-between w-full"
        onClick={() => handleIsShowModel(1)}
      >
        <div className={queries.province ? Active : notActive}>
          {queries.province || "Toàn quốc"}
        </div>
      </div>
      <div
        className="flex items-center justify-between w-full"
        onClick={() => handleIsShowModel(2)}
      >
        <div className="bg-white w-full h-full cursor-pointer items-center flex  rounded-[5px] p-[10px] justify-between  gap-[10px]">
          {queries.price || "Chọn giá"}
        </div>
      </div>
      <div
        className="flex items-center justify-between w-full"
        onClick={() => handleIsShowModel(3)}
      >
        <div className="bg-white w-full h-full cursor-pointer items-center flex  rounded-[5px] p-[10px] justify-between  gap-[10px]">
          {queries.area || "Chọn điện tích"}
        </div>
      </div>
      <div className="flex items-center w-full " onClick={handelSearch}>
        <div className="bg-secondary1 w-full h-full cursor-pointer items-center flex  rounded-[5px] p-[10px] gap-[10px] justify-center">
          <button className="text-white ">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="text-[1rem] font-medium  text-white">
            Tìm kiếm
          </button>
        </div>
      </div>
    </section>
  );
}
export default Search;
