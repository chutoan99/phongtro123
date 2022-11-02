import { locationCity, text } from "../../utils/constant";
import { Support, WhyUs, Post, Heading, Search, ProvinceBtn } from "../index";
function Container() {
  return (
    <div className="max-w-1100 mx-[auto]">
      <Search />
      <Heading items={text} />
      <ProvinceBtn items={locationCity} />
      <Post />
      <div
        className="max-w-1100 mx-[auto] bg-white "
        style={{ border: "1px solid #ccc" }}
      >
        <WhyUs />
      </div>
      <div
        className="max-w-1100 mx-[auto] bg-white "
        style={{ border: "7px dashed #e8eefc" }}
      >
        <Support />
      </div>
    </div>
  );
}
export default Container;
