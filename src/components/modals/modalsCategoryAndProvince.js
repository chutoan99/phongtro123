import PropTypes from "prop-types";
function ModalsCategoryAndProvince({
  items,
  modals,
  setModals,
  text,
  name,
  handleSubmit,
  queries,
}) {
  const isLoseModel = () => {
    setModals(false);
  };
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
                {(name === "category" || name === "province") && (
                  <ul>
                    {items?.map((item, index) => (
                      <li
                        className="h-[42px] w-full flex items-center gap-[10px] py-[13px]"
                        style={{ borderBottom: "1px solid #cccc" }}
                        key={index}
                        onClick={() =>
                          handleSubmit({
                            [name]: item.value,
                            [`${name}Code`]: item.code,
                          })
                        }
                      >
                        <input
                          type="radio"
                          name={name}
                          id={item?.code}
                          value={item?.code}
                          checked={
                            item.code === queries[`${name}Code`] ? true : false
                          }
                        />
                        <label
                          className="items-center flex  text-[1rem] cursor-pointer"
                          htmlFor={item?.code}
                        >
                          {item?.value}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
ModalsCategoryAndProvince.prototype = {
  items: PropTypes.object,
  modals: PropTypes.bool,
  text: PropTypes.string,
  name: PropTypes.string,
};
export default ModalsCategoryAndProvince;
