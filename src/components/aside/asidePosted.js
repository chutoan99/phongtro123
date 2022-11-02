import PropTypes from "prop-types";
import { renderStart } from "../../utils/Commom/renderStart";
let POST_IMG = require("../../img/POST_IMG.jpg");

function AsidePosted({ items, title }) {
  return (
    <section className="w-full rounded-[10px] bg-white mt-[20px] px-[15px] pb-[30px]">
      <header className="text-left pt-[20px] pb-[10px] pl-[10px] font-extrabold uppercase text-[1rem]">
        {title}
      </header>
      <ul className="px-[7px] grid pt-[10px]">
        {items?.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-[10px] py-[10px]"
            style={{
              borderTop: "1px solid #ccc",
            }}
          >
            <div>
              {JSON.parse(item.images.image)[0] === undefined ? (
                <div className="w-[65px] h-[65px]">
                  <img
                    className="w-[100%] h-[100%] rounded-[5px]"
                    alt="post"
                    src={POST_IMG}
                  />
                </div>
              ) : null}
              {JSON.parse(item.images.image).map((ele, index) => (
                <>
                  {ele !== null && index < 1 ? (
                    <div className="w-[65px] h-[65px]" key={index}>
                      <img
                        className="w-[100%] h-[100%] rounded-[5px]"
                        alt="post"
                        src={ele}
                      />
                    </div>
                  ) : null}
                </>
              ))}
            </div>
            <div className="gap-[10px] grid">
              <span className="text-[0.9rem] webkit-box leading-[20px]">
                {renderStart(item.start)} {item.title}
              </span>
              <div className="flex items-center justify-between">
                <span className="text-[#16c784]">{item.attributes.price}</span>
                <span className="text-[#aaa]">{item.attributes.published}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
AsidePosted.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};
export default AsidePosted;
