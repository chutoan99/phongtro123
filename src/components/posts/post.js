import { ListPosts, Aside } from "../index";

function Post() {
  return (
    <section className="w-full h-full">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ListPosts />
          </div>
          <div className="col-lg-4">
            <Aside />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Post;
