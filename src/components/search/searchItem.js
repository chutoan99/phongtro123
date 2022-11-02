import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ModalsPriceAndArea, ModalsCategoryAndProvince } from "../index";

function SearchItem({
  indexModels,
  modals,
  setModals,
  handleSubmit,
  queries,
  arrMinMax,
}) {
  const { price, area, province, category } = useSelector((state) => state);
  return (
    <>
      {indexModels === 0 && (
        <ModalsCategoryAndProvince
          handleSubmit={handleSubmit}
          items={category?.data}
          modals={modals}
          setModals={setModals}
          queries={queries}
          text="CHỌN Danh Mục"
          name="category"
        />
      )}
      {indexModels === 1 && (
        <ModalsCategoryAndProvince
          items={province?.data}
          modals={modals}
          queries={queries}
          setModals={setModals}
          handleSubmit={handleSubmit}
          text="CHỌN TỈNh THÀNH"
          name="province"
        />
      )}
      {indexModels === 2 && (
        <ModalsPriceAndArea
          items={price?.data}
          modals={modals}
          setModals={setModals}
          handleSubmit={handleSubmit}
          arrMinMax={arrMinMax}
          text="CHỌN GIÁ"
          name="price"
        />
      )}
      {indexModels === 3 && (
        <ModalsPriceAndArea
          items={area?.data}
          modals={modals}
          setModals={setModals}
          handleSubmit={handleSubmit}
          arrMinMax={arrMinMax}
          text="CHỌN DIỆN TÍCH"
          name="area"
        />
      )}
    </>
  );
}
SearchItem.prototype = {
  indexModels: PropTypes.number,
  modals: PropTypes.bool,
  setModals: PropTypes.func,
  arrMinMax: PropTypes.array,
};
export default SearchItem;
