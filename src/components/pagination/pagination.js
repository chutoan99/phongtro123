import PropTypes from "prop-types";
import { PageDot, PageNumbers } from "../index";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Pagination({ length, count }) {
  const [params] = useSearchParams();
  const currentPage = +params.get("page");
  //lấy ra giá trị hiện tại của page và trả về dạng number
  // lấy ra số lượng trang tối đa của tất cả bài viết (số lương total item / số lượng mỗi tranng)
  // lấy 3 số phía trước page hiện tại nếu giá trị end nhỏ hơn 0 thì lấy giá trị là 1
  // lấy 3 số phía sau page hiện tại
  const [btnPrev, setBtnPrev] = useState(false);
  const [btnNext, setBtnNext] = useState(true);
  const [arrPage, setArrPage] = useState([]);
  useEffect(() => {
    let maxPage = Math.ceil(count / length);
    let start =
      currentPage - 3 > maxPage
        ? maxPage
        : currentPage - 3 < 1
        ? 1
        : currentPage - 3;
    let end = currentPage + 3 > maxPage ? maxPage : currentPage + 3;
    let temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setArrPage(temp);
    currentPage <= maxPage - 1 || currentPage === 0
      ? setBtnNext(true)
      : setBtnNext(false);
    currentPage >= 3 ? setBtnPrev(true) : setBtnPrev(false);
  }, [currentPage, count]);
  return (
    <div className="flex gap-[10px] justify-center pt-6">
      {btnPrev ? (
        <>
          <PageNumbers
            icon={<i class="fa-sharp fa-solid fa-left-long"></i>}
            number={currentPage - 1}
          />
          <PageDot text={"..."} />
        </>
      ) : null}
      {arrPage.length > 0 &&
        arrPage.map((item, index) => {
          return (
            <PageNumbers
              number={item}
              index={index}
              currentPage={currentPage || 1}
            />
          );
        })}
      {btnNext ? (
        <>
          <PageDot text={"..."} />
          <PageNumbers
            number={currentPage + 1}
            icon={<i class="fa-sharp fa-solid fa-right-long"></i>}
          />
        </>
      ) : null}
    </div>
  );
}
Pagination.prototype = {
  length: PropTypes.number,
  count: PropTypes.number,
};
export default Pagination;
