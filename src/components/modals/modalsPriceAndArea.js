import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";
import {
  convert100ToTarget,
  convertTo100,
  getNumbersPrice,
  getNumbersArea,
} from "../../utils/Commom/fomarNumber";
import { getCodesArea, getCodesPrice } from "../../utils/Commom/getCodePrice";
function ModalsPriceAndArea({
  items,
  modals,
  setModals,
  text,
  name,
  handleSubmit,
  arrMinMax,
}) {
  let number;
  name === "price" ? (number = +15) : (number = +90);
  const [perSent1, setPerSent1] = useState(
    name === "price" && arrMinMax?.priceArr?.length > 0
      ? arrMinMax?.priceArr[0]
      : name === "area" && arrMinMax?.areaArr?.length > 0
      ? arrMinMax?.areaArr[0]
      : 0
  );
  const [perSent2, setPerSent2] = useState(
    name === "price" && arrMinMax?.priceArr?.length > 0
      ? arrMinMax?.priceArr[1]
      : name === "area" && arrMinMax?.areaArr?.length > 0
      ? arrMinMax?.areaArr[1]
      : 100
  );
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(number);
  const isLoseModel = () => {
    setModals(false);
  };
  const handleClickMin = () => {
    setNumber1(0);
    setPerSent1(0);
  };
  const handleClickMax = () => {
    setNumber2(number);
    setPerSent2(100);
  };
  useEffect(() => {
    const activeTrackId = document.getElementById("track-active");
    if (perSent1 <= perSent2) {
      activeTrackId.style.left = `${perSent1}%`;
      activeTrackId.style.right = `${100 - perSent2}%`;
      setNumber1(convert100ToTarget(perSent1, name));
      setNumber2(convert100ToTarget(perSent2, name));
    } else {
      activeTrackId.style.left = `${perSent2}%`;
      activeTrackId.style.right = `${100 - perSent1}%`;
      setNumber1(convert100ToTarget(perSent2, name));
      setNumber2(convert100ToTarget(perSent1, name));
    }
  }, [perSent2, perSent1]);
  // lấy vị trí click
  const handleClickStack = (e) => {
    // e.stopPropagation();
    const stackEl = document.getElementById("stack");
    const stackRect = stackEl.getBoundingClientRect();
    let perSent =
      Math.round((e.clientX - stackRect.left) * 100) / stackRect.width;
    if (Math.abs(perSent - perSent1) <= Math.abs(perSent - perSent2)) {
      setPerSent1(perSent);
      setNumber1(convert100ToTarget(perSent, name));
    } else {
      setPerSent2(perSent);
      setNumber2(convert100ToTarget(perSent, name));
    }
  };
  const handleChangeRange = (value) => {
    let arrMaxMin;
    name === "price"
      ? (arrMaxMin = getNumbersPrice(value))
      : (arrMaxMin = getNumbersArea(value));
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPerSent1(0);
        setPerSent2(convertTo100(1, name));
      }
      if (arrMaxMin[0] === 20) {
        setPerSent1(0);
        setPerSent2(convertTo100(20, name));
      }
      if (arrMaxMin[0] === number) {
        setPerSent1(100);
        setPerSent2(100);
      }
    } else {
      setPerSent1(convertTo100(arrMaxMin[0], name));
      setPerSent2(convertTo100(arrMaxMin[1], name));
    }
  };

  const handleBeforeSubmit = () => {
    let min =
      perSent1 <= perSent2
        ? convert100ToTarget(perSent1, name)
        : convert100ToTarget(perSent2, name);
    let max =
      perSent1 <= perSent2
        ? convert100ToTarget(perSent2, name)
        : convert100ToTarget(perSent1, name);
    let result = [min, max];
    const gaps =
      name === "price"
        ? getCodesPrice(result, items)
        : name === "area"
        ? getCodesArea(result, items)
        : [];
    handleSubmit(
      {
        [`${name}Code`]: gaps?.map((item) => item.code),
        [name]: `Từ ${min} - ${max} ${name === "price" ? "triệu" : "m2"}`,
      },
      { [`${name}Arr`]: [perSent1, perSent2] }
    );
  };
  const isActive =
    "bg-[#007aff] flex items-center py-[15px] px-[5px] rounded-[5px] m-[5px]";
  const notActive =
    " flex items-center py-[15px] px-[5px] bg-[#f1f1f1] rounded-[5px] m-[5px]";

  return (
    <>
      {modals ? (
        <div className="w-[100vw] h-[100vh] absolute top-0 bottom-0 right-0 z-10 left-0 bg-[rgba(0,0,0,.5)] cursor-pointer">
          <section className="h-[100vh] mx-[auto] flex  items-center justify-center">
            <div className="w-modal bg-white rounded-[15px] overflow-hidden">
              <div
                className="h-[45px] w-full flex items-center px-[24px]"
                style={{ borderBottom: "1px solid #cccc" }}
              >
                <span
                  className="w-[45px] h-[45px] items-center flex justify-center text-[22px] cursor-pointer"
                  onClick={isLoseModel}
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </span>
                <p className="w-full text-center uppercase font-bold text-[1rem]">
                  {text}
                </p>
              </div>
              <div className="pt-[10px]">
                {(name === "area" || name === "price") && (
                  <>
                    <div className="pt-[23px] flex mx-[48px] text-center">
                      <p className="w-full width: 100% text-[#ff6600] text-[1.5rem] font-bold">
                        {perSent1 === 100 && perSent2 === 100
                          ? `Trên ${number2} ${
                              name === "price" ? "Triệu" : "m2"
                            }`
                          : `Từ ${number1} - ${number2}  ${
                              name === "price" ? "Triệu" : "m2"
                            }`}
                      </p>
                    </div>
                    <div className="px-[48px]">
                      <div className="flex items-center justify-center flex-col gap-[30px] relative mt-[40px]">
                        <div
                          className="slider-track h-[5px] bg-gray-300 rounded-full absolute top-0 bottom-0 w-full"
                          onClick={handleClickStack}
                          id="stack"
                        ></div>
                        <div
                          className="slider-track h-[5px] bg-orange-600 rounded-full absolute top-0 bottom-0"
                          id="track-active"
                          onClick={handleClickStack}
                        ></div>
                        <input
                          type="range"
                          max="100"
                          min="0"
                          step="1"
                          className="w-full appearance-none pointer-events-none absolute top-0 bottom-0 z-10"
                          value={perSent1}
                          onChange={(e) => setPerSent1(+e.target.value)}
                        />
                        <input
                          type="range"
                          max="100"
                          min="0"
                          step="1"
                          value={perSent2}
                          onChange={(e) => setPerSent2(+e.target.value)}
                          className="w-full appearance-none  pointer-events-none absolute top-0 bottom-0 z-10"
                        />
                      </div>
                      <div className="pt-[23px] z-10 flex justify-between">
                        <span
                          className="text-[15px] translate-x-2"
                          onClick={handleClickMin}
                        >
                          0
                        </span>
                        {name === "price" ? (
                          <span
                            className="text-[15px] translate-x-5"
                            onClick={handleClickMax}
                          >
                            +15 triệu/đồng
                          </span>
                        ) : (
                          <span
                            className="text-[15px] translate-x-5"
                            onClick={handleClickMax}
                          >
                            90m2
                          </span>
                        )}
                      </div>
                      <div className="mt-[40px] flex-wrap flex">
                        {items?.map((item, index) => (
                          <span
                            onClick={() =>
                              handleChangeRange(item.value, item.code)
                            }
                            className={notActive}
                            key={index}
                          >
                            {item.value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                <div
                  className="w-full h-[50px] bg-[#ffa500] mt-[40px] justify-center text-[#000] items-center flex uppercase font-bold"
                  onClick={handleBeforeSubmit}
                >
                  Áp dụng
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
ModalsPriceAndArea.prototype = {
  items: PropTypes.object,
  modals: PropTypes.bool,
  text: PropTypes.string,
  name: PropTypes.string,
  arrMinMax: PropTypes.string,
};
export default memo(ModalsPriceAndArea);
