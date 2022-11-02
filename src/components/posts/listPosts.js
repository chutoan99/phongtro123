import { Pagination, ItemPost, Filter } from "../index";
import { useSelector } from "react-redux";

function ListPosts() {
  const { count } = useSelector((state) => state.post.limitPosts);
  const { data } = useSelector((state) => state.post.allPosts);

  return (
    <>
      <section className="bg-white rounded-[10px] mt-[20px]">
        <Filter />
        <ItemPost />
      </section>
      <Pagination length={count} count={data?.length} />
    </>
  );
}
export default ListPosts;
