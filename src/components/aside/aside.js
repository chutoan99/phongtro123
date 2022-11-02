import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { directoryRental, newPost, suggestList } from "../../utils/constant";
import { AsideCustom, AsidePosted, AsideDefault } from "../index";

function Aside({}) {
  const { area, price } = useSelector((state) => state);
  const { data } = useSelector((state) => state.post.newPosts);
  return (
    <aside>
      <AsideDefault items={directoryRental} title={"Danh sách cho thuê"} />
      <AsideCustom
        items={price.data}
        title={"Xem theo giá"}
        type={"priceCode"}
      />
      <AsideCustom
        items={area.data}
        title={"Xem theo diện tích"}
        type={"areaCode"}
      />
      <AsidePosted items={data} title={"Tin mới đăng"} />
      <AsideDefault items={newPost} title={"Bài viết mới"} />
      <AsideDefault items={suggestList} title={"Có thể bạn quan tâm"} />
    </aside>
  );
}
Aside.propTypes = {};
export default Aside;
