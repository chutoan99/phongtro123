import PropTypes from "prop-types";

function AsideDefault({ items, title }) {
  return (
    <section className="w-full rounded-[10px] bg-white mt-[20px] px-[15px] pb-[30px]">
      <header className="text-left pt-[20px] pb-[10px] pl-[10px] font-extrabold uppercase text-[1rem]">
        {title}
      </header>
      <div>
        <ul>
          {items?.lists?.map((item, index) => (
            <li
              key={index}
              style={{ borderBottom: "1px dashed #ccc" }}
              className="py-[11px] px-[7px] flex items-center w-full gap-[5px] capitalize"
            >
              <i class="fa-solid fa-chevron-right text-[12px] text-[#ccc]"></i>
              <span className="w-full text-[1rem]">{item.content || item}</span>
              <span className="text-[1.1rem]">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
AsideDefault.propTypes = {
  title: PropTypes.string,
};
export default AsideDefault;
