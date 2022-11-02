function Select({ title, id, bg, option, optionLimit, text, handle, value }) {
  const style = `pl-[10px] p-[5px] h-26px text-[1rem] rounded-[5px] ${bg} w-full outline-none`;
  return (
    <div className="gap-[10px] grid">
      <label className="text-[1.2rem] font-medium" htmlFor={id}>
        {title}
      </label>
      <select
        className={style}
        style={{ border: "1px solid #ccc" }}
        onChange={(e) => optionLimit(e.target.value)}
      >
        <option value="">{value || text}</option>
        {option?.map((item) => (
          <option
            className="mt-[10px]"
            value={item?.code}
            key={item?._id}
            onClick={handle}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
