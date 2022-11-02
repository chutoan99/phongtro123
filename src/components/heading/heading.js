import PropTypes from "prop-types";

function Heading({ items }) {
  return (
    <section className="w-full h-full">
      <div className="mb-[20px]">
        <h1 className="text-[2rem] mb-[15px] leading-[1.2rem]">
          {items.title}
        </h1>
        <p className="text-[#65676b] text-[1rem] font-medium">{items.des}</p>
      </div>
    </section>
  );
}

Heading.propTypes = {
  items: PropTypes.object,
};

export default Heading;
