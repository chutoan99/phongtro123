import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import {
  User,
  DescriptionPost,
  HeaderPost,
  SliderPost,
  Breadcrumb,
  ItemPost,
} from "../index";

function DetailPost({}) {
  const { data } = useSelector((state) => state.post.limitPosts);
  return (
    <div className="max-w-1100 mx-auto">
      <Breadcrumb />
      <div className="container ">
        <div className="row">
          <div className="col-lg-8">
            <div>
              <SliderPost />
            </div>
            <HeaderPost data={data} />
            <DescriptionPost data={data} />
            <ItemPost />
          </div>
          <div className="col-lg-4">
            <User data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
DetailPost.propTypes = {};
export default DetailPost;
