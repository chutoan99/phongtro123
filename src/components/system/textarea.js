function Textarea({ value, title, id, setTextarea }) {
  const handleOnChange = (e) => {
    setTextarea(e.target.value);
  };
  return (
    <div className="gap-[10px] grid">
      <label className="text-[1.2rem] font-medium" htmlFor={id}>
        {title}
      </label>
      <textarea
        value={value}
        className="w-full h-[300px] rounded-[5px] p-[15px] text-[1.1rem]"
        style={{ border: "1px solid #ccc" }}
        onChange={(e) => handleOnChange(e)}
      ></textarea>
    </div>
  );
}
export default Textarea;
