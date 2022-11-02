import PropTypes from "prop-types";

function ProvinceBtn({ items }) {
  return (
    <section className="w-full h-full">
      <div className="flex gap-[20px] justify-center">
        {items.map((ele, index) => (
          <div
            className="rounded-[10px] overflow-hidden cursor-pointer"
            key={index}
          >
            <div
              className="w-[190px] h-[110px] "
              style={{ boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)" }}
            >
              <img
                src={ele.img}
                className="w-full h-full font-medium"
                alt="text"
              ></img>
            </div>
            <div className="h-[40px] bg-white flex items-center justify-center">
              <p className="text-[#1266dd]">{ele.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
ProvinceBtn.propTypes = {
  items: PropTypes.array,
};
export default ProvinceBtn;
