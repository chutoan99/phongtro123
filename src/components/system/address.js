import { Select, Input } from "../index";
import { useEffect, useState } from "react";

import {
  GetALLProvinceVietNam,
  GetAllDistrictVietNam,
  GetAllWardVietNam,
  GetAllDistrictWithProvinceCode,
  GetAllWardWithDistrictCode,
} from "../../services/province";
import { useSelector } from "react-redux";
function Address({ setPayload }) {
  const { data } = useSelector((state) => state.post.postEdit);
  const [province, setProvince] = useState();
  const [provinceCode, setProvinceCode] = useState();
  const [district, setDistrict] = useState();
  const [districtCode, setDistrictCode] = useState();
  const [ward, setWard] = useState();
  const [wardCode, setWardCode] = useState();
  const [numberHouse, setNumberHouse] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  // useEffect(() => {
  //   let addressArr = data?.address?.split(",");
  //   let foundProvince =
  //     province?.length > 0 &&
  //     province?.find(
  //       (item) => item?.name === addressArr[addressArr?.length - 1]?.trim()
  //     );
  //   // setProvince(foundProvince);
  //   console.log(foundProvince);
  // }, [province]);
  useEffect(() => {
    const fetchApiProvinceVietNam = async () => {
      await GetALLProvinceVietNam(setProvince);
    };
    fetchApiProvinceVietNam();
  }, []);
  const IsShowDistrict = async () => {
    await GetAllDistrictVietNam(setDistrict);
  };
  const isShowWard = async () => {
    await GetAllWardVietNam(setWard);
  };
  useEffect(() => {
    const fetchApiWithProvinceCode = async () => {
      await GetAllDistrictWithProvinceCode(provinceCode, setDistrict);
    };
    fetchApiWithProvinceCode();
  }, [provinceCode]);
  useEffect(() => {
    const fetchApiWithDistrictCode = async () => {
      await GetAllWardWithDistrictCode(districtCode, setWard);
    };
    fetchApiWithDistrictCode();
  }, [districtCode]);
  const addressPayload = (numberHouse, ward, district, province) => {
    return `${numberHouse ? `${numberHouse},` : ""} ${
      ward
        ? `${
            ward?.filter((item) => item?.code === wardCode)[0]?.name_with_type
          },`
        : ""
    } ${
      district
        ? `${
            district?.filter((item) => item?.code === districtCode)[0]
              ?.name_with_type
          },`
        : ""
    }${
      province
        ? `${
            province?.filter((item) => item?.code === provinceCode)[0]
              ?.name_with_type
          }`
        : ""
    }`;
  };
  const provincePayload = (province) => {
    return `${
      province
        ? `${
            province?.filter((item) => item?.code === provinceCode)[0]
              ?.name_with_type
          }`
        : ""
    }`;
  };
  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      address: addressPayload(numberHouse, ward, district, province),
      province: provincePayload(province),
    }));
  }, [province, district, ward, numberHouse]);
  return (
    <>
      <div className="text-[2rem] mb-[20px] font-bold">
        <h3>Địa chỉ cho thuê</h3>
      </div>
      <div className="grid grid-cols-4 gap-[30px] w-full justify-between mb-[20px]">
        <Select
          text="-- Chọn Tỉnh/Tp --"
          title="Tỉnh/Thành phố"
          id="tinh"
          handle={IsShowDistrict}
          optionLimit={setProvinceCode}
          option={province}
        />
        <Select
          text="-- Quận/Huyện --"
          title="Quận/Huyện"
          id="quanhuyen"
          handle={isShowWard}
          optionLimit={setDistrictCode}
          option={district}
        />
        <Select
          text="-- Phường/Xã --"
          title="Phường/Xã"
          id="phuongxa"
          option={ward}
          optionLimit={setWardCode}
        />
        <Input
          title="Số nhà"
          id="sonha"
          value={data?.address !== "" ? data?.address : ""}
          WithInput="w-[100%]"
          setValue={setNumberHouse}
        />
      </div>
      <Input
        value={data?.address !== "" ? data?.address : ""}
        title="Địa chỉ chính xác"
        id="diachi"
        WithInput="w-[100%]"
        setValue={setAddressDetail}
      />
    </>
  );
}
export default Address;
