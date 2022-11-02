function Filter() {
  return (
    <section className="p-[20px]">
      <div className="font-extrabold text-[20px] mb-[10px]">
        Danh sách tin đăng
      </div>
      <div className="gap-[10px] flex">
        <span className="p-[7px]  rounded-[5px] capitalize">sắp xếp:</span>
        <span className="p-[7px] bg-[#ccc] rounded-[5px] capitalize">
          mặc định
        </span>
        <span className="p-[7px] bg-[#ccc] rounded-[5px] capitalize">
          mới nhất
        </span>
        <span className="p-[7px] bg-[#ccc] rounded-[5px] capitalize">
          có video
        </span>
      </div>
    </section>
  );
}
export default Filter;
