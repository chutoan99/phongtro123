import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiPostsLimit } from "../../services/posts";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
function AsideCustom({ items, title, type }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handelChangeNumberPage = (code) => {
    navigate({
      pathname: "/",
      search: createSearchParams({
        [type]: code,
      }).toString(),
    });
  };
  useEffect(() => {
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    let searchParamsObject = {};
    params?.forEach((i) => {
      if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
        searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
      } else {
        searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
      }
    });
    const fetchPostLimit = async () => {
      await apiPostsLimit(searchParamsObject, dispatch);
    };
    fetchPostLimit();
  }, [searchParams]);
  return (
    <section className="w-full rounded-[10px] bg-white mt-[20px] px-[15px] pb-[30px]">
      <header className="text-left pt-[20px] pb-[10px] pl-[10px] font-extrabold uppercase text-[1rem]">
        {title}
      </header>
      <ul className="grid-cols-2 grid px-[7px]">
        {items?.map((item, index) => (
          <li
            onClick={() => handelChangeNumberPage(item.code)}
            key={index}
            className="py-[11px]  w-full gap-[5px] cursor-pointer"
            style={{ borderBottom: "1px dashed #ccc" }}
          >
            <div className="flex items-center text-[#333] capitalize gap-[5px]">
              <i class="fa-solid fa-chevron-right text-[12px] text-[#ccc]"></i>
              <div className="w-full gap-[2px]">
                <div className="">{item.value}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
AsideCustom.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
};
export default AsideCustom;
