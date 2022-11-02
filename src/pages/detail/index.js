import {
  Header,
  Pagination,
  DetailPost,
  WhyUs,
  Footer,
  Support,
} from "../../components/index";

function DetailPage() {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <DetailPost />
      <Pagination />
      <WhyUs />
      <Support />
      <Footer />
    </div>
  );
}

export default DetailPage;
