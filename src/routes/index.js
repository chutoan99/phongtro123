import {
  HomePage,
  LoginPage,
  RegisterPage,
  RentalApartmentPage,
  RentalHousePage,
  RentalSpacePage,
  RentalRoomsPage,
  DetailPage,
  SearchPage,
  CreatePostPage,
  ManagePostPage,
  ProfilePage,
} from "../pages";
import { path } from "../utils/constant";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function Save() {
  const { isLogin } = useSelector((state) => state.auth.login);

  // get user ở dây
  return (
    <Routes>
      <Route>
        <Route path={path.HOME} element={<HomePage />} />
        <Route path={path.SEARCH} element={<SearchPage />} />
        <Route path={path.LOGIN} element={<LoginPage />} />
        <Route path={path.HOME_PAGE} element={<HomePage />} />
        <Route path={path.REGISTER} element={<RegisterPage />} />
        <Route path={path.PAGE_DETAIL} element={<DetailPage />} />
        <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartmentPage />} />
        <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpacePage />} />
        <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoomsPage />} />
        <Route path={path.NHA_CHO_THUE} element={<RentalHousePage />} />
      </Route>
      {isLogin && (
        <Route>
          <Route path={path.CREATE_POST} element=<CreatePostPage /> />
          <Route path={path.MANAGE_POST} element=<ManagePostPage /> />
          <Route path={path.PROFILE} element=<ProfilePage /> />
        </Route>
      )}
    </Routes>
  );
}
export default Save;
