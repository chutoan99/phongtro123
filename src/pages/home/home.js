import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiArea } from "../../services/area";
import { apiPrices } from "../../services/price";
import { apiProvince } from "../../services/province";
import { apiCurrentUser } from "../../services/user";
import { Header, Container, Footer } from "../../components/index";
import { apiNavigation } from "../../services/navigation";
import { apiPostsDetail, apiPostsLimitNewPosts } from "../../services/posts";
function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApiApp = async () => {
      await apiPostsDetail(1, dispatch);
    };
    fetchApiApp();
    const fetchApiPrices = async () => {
      await apiPrices(dispatch);
    };
    fetchApiPrices();
    const fetchApiArea = async () => {
      await apiArea(dispatch);
    };
    fetchApiArea();
    const fetchApiPostlimit = async () => {
      await apiPostsLimitNewPosts(dispatch);
    };
    fetchApiPostlimit();
    const fetchApiProvince = async () => {
      await apiProvince(dispatch);
    };
    fetchApiProvince();
    const fetchApiNavigation = async () => {
      await apiNavigation(dispatch);
    };
    fetchApiNavigation();
    setTimeout(() => {
      const fetchApiCurrentUser = async () => {
        await apiCurrentUser(dispatch);
      };
      fetchApiCurrentUser();
    }, 1500);
  }, []);

  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default HomePage;
