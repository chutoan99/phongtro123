import {
  fetchProvinceStart,
  fetchProvinceSuccess,
  fetchProvinceFailed,
} from "../redux/province";
import config from "../configAxios";
import axiosDefault from "axios";

export const apiProvince = async (dispatch) => {
  dispatch(fetchProvinceStart());
  try {
    const response = await config({
      method: "get",
      url: "/api/v1/province/all",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(fetchProvinceSuccess(response?.data?.response));
    } else {
      dispatch(fetchProvinceFailed(response.data.msg));
    }
  } catch (error) {
    dispatch(fetchProvinceFailed(error));
  }
};
export const GetALLProvinceVietNam = (setProvince) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1",
      });
      if (response.status === 200) {
        setProvince(response.data.data.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const GetAllDistrictVietNam = (setDistrict) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: "https://vn-public-apis.fpo.vn/districts/getAll?limit=-1",
      });
      if (response.status === 200) {
        setDistrict(response.data.data.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const GetAllWardVietNam = (setWard) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: `https://vn-public-apis.fpo.vn/wards/getAll?limit=-1`,
      });
      if (response.status === 200) {
        setWard(response.data.data.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const GetAllDistrictWithProvinceCode = (provinceCode, setDistrict) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${provinceCode}&limit=-1`,
      });
      if (response.status === 200) {
        setDistrict(response?.data?.data?.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const GetAllWardWithDistrictCode = (districtCode, setWard) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${districtCode}&limit=-1`,
      });
      if (response.status === 200) {
        setWard(response?.data?.data?.data);
      } else {
        console.log("lỗi");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
