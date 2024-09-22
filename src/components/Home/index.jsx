import React, { useEffect } from "react";
import bg from "../../assets/images/home-bg.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getBicycles } from "../../redux/reducers/CreateSlice";
import Bicycles from "../Bicycles";
import { Slide } from "react-toastify";
import Slider from "../Slider";
import BicyclesCard from "../BicyclesCard";

const Home = () => {
  const dispatch = useDispatch();
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
  const { bicycles } = useSelector((s) => s.bicyclesCreate);
  console.log(bicycles, "bicyclesCreate");

  return (
    <>
      <div
        style={{
          background: `url(${bg}) no-repeat center/cover`,
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <div className="">
            <h1 className="text-[60px] pt-[60px] text-white font-bold">
              Электро <br /> велосипеды
            </h1>
            <p className="text-white my-[40px] text-[24px] font-light opacity-[0.7]">
              Cento10 Hybrid — это гоночный велосипед с помогающим <br />{" "}
              педалированию электроприводом, который устанавливает новый, <br />{" "}
              очень высокий стандарт для данной категории
            </p>
            <button className="text-white text-[24px] py-[15px] rounded-[14px] px-[50px] bg-[#F57520]">
              Подробнее
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="w-[33%] hover:scale-[1.1] duration-[0.8s] hover:rounded-lg h-[150px] bg-[#2E2E2E] text-white flex items-center justify-center">
            <p className="text-[20px]">
              Экстремальное <br /> вождение на горном <br /> велосипеде
            </p>
          </div>
          <div className="w-[35%] hover:scale-[1.1] duration-[0.8s] hover:rounded-lg h-[150px] bg-[#2E2E2E] text-white flex items-center justify-center">
            <p className="text-[20px]">
              Велосипеды <br /> для профессионалов
            </p>
          </div>
          <div className="w-[33%] hover:scale-[1.1] duration-[0.8s] hover:rounded-lg h-[150px] bg-[#2E2E2E] text-white flex items-center justify-center">
            <p className="text-[20px]">
              Долгая поездка <br /> на шоссейном велосипеде
            </p>
          </div>
        </div>
      </div>
      <Slider />
      <div className="container">
        <h1 className="text-[50px] font-[600]">Новинки</h1>
        <div className="w-[100%] h-[600px] flex items-center gap-[30px]">
          {bicycles.slice(-4).map((el) => (
            <BicyclesCard el={el} />
          ))}
        </div>
        <div className="flex flex-col gap-[70px] ">
          <h1 className="w-[419px] h-[225px] text-[64px]">
            лучшие модели для зимней езды
          </h1>
          <div className="flex gap-5">
            {bicycles.map((el) =>
              el.rating >= 3 ? <BicyclesCard el={el} /> : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
