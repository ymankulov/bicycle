import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BicyclesCard from "../BicyclesCard";
import { getBicycles } from "../../redux/reducers/CreateSlice";
import axios from "axios";

const Search = () => {
  const { bicycles } = useSelector((s) => s.bicyclesCreate);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const filterSearch = bicycles.filter((sear) =>
    sear.name.toLowerCase().includes(search.toLowerCase())
  );
  async function getAllBicycles() {
    const res = await axios(
      `https://api.elchocrud.pro/api/v1/94bbfdd99130cbebe3b7ce1e5cd2fb4e/bicycles`
    );
    const { data } = res;
    dispatch(getBicycles(data));
  }
  useEffect(() => {
    getAllBicycles();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-center gap-[40px] mt-[40px]">
          <input
            type="text"
            placeholder="search product"
            className="text-4xl border-[3px] border-solid border-[#F57520] py-[5px] px-[40px] rounded-lg outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className=" flex flex-wrap gap-6 mt-[30px]">
          {filterSearch.map((el) => (
            <BicyclesCard el={el} key={el._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
