import React, { useEffect, useState } from "react";
import axios from "axios";

const Provinces = ({handleReceiveData}) => {
  const urlApi = "https://provinces.open-api.vn/api/";
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`${urlApi}?depth=1`);
        setCities(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCities();
  }, []);

  const fetchDistricts = async (cityCode) => {
    try {
      const response = await axios.get(`${urlApi}p/${cityCode}?depth=2`);
      setDistricts(response.data.districts);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWards = async (districtCode) => {
    try {
      const response = await axios.get(`${urlApi}d/${districtCode}?depth=2`);
      setWards(response.data.wards);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityChange = (e) => {
    const cityCode = e.target.value;
    setSelectedCity(cityCode);
    setSelectedDistrict("");
    setSelectedWard("");
    fetchDistricts(cityCode);
    
  };

  const handleDistrictChange = (e) => {
    const districtCode = e.target.value;
    setSelectedDistrict(districtCode);
    setSelectedWard("");

    fetchWards(districtCode);

  };

  const handleWardChange = (e) => {
    const wardCode = e.target.value;
    setSelectedWard(wardCode);
    
  };
  
  useEffect(()=>{
    const handleGetProvinces=()=>{
      const cityName = cities.find(c => c.code === Number(selectedCity))?.name;
      const districtName = districts.find(d => d.code === Number(selectedDistrict))?.name;
      const wardName = wards.find(w => w.code === Number(selectedWard))?.name;
      handleReceiveData(cityName,districtName,wardName)
    }
    handleGetProvinces()
  },[cities, districts, handleReceiveData, selectedCity, selectedDistrict, selectedWard, wards])
  


  return (
    <div className="provinces">
      <label htmlFor="address" name="address">
        Địa chỉ liên hệ (*)
      </label>
      <label htmlFor="city">
        Tình/Thành phố
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="" disabled>
            Chọn tỉnh thành
          </option>
          {cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="cidistrict">
        Quận/huyện
        <select
          id="district"
          value={selectedDistrict}
          onChange={handleDistrictChange}
        >
          <option value="" disabled>
            Chọn quận huyện
          </option>
          {districts.map((district) => (
            <option key={district.code} value={district.code} >
              {district.name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="ward">Phường xã
      <select id="ward" value={selectedWard} onChange={handleWardChange}>
        <option value="" disabled>
          Chọn phường xã
        </option>
        {wards.map((ward) => (
          <option key={ward.code} value={ward.code} >
            {ward.name}
          </option>
        ))}
      </select>
      </label>
     
    </div>
  );
};

export default Provinces;
