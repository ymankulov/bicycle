import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaSquareOdnoklassniki } from "react-icons/fa6";
import { FaVk } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoIosAdd, IoMdHeartEmpty } from "react-icons/io";
import loading from "../../assets/images/loading.svg";
import BicyclesCard from "../BicyclesCard";
import { getBicycles } from "../../redux/reducers/CreateSlice";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/reducers/AddToFavoriteSlice";
import { MdOutlineFavorite } from "react-icons/md";
import { addToBasket, deleteBasket } from "../../redux/reducers/BasketSlice";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BicycleDetails = () => {
  const { user, logOut } = useAuth();
  const { bicycles } = useSelector((s) => s.bicyclesCreate);
  const { favorite } = useSelector((s) => s.bicyclesFavorite);
  const { basket } = useSelector((s) => s.basket);
  const [details, setDetails] = useState({});
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { id } = useParams();
  const [colorBike, setColorBike] = useState("transparent");
  const [sizeS, setSizeS] = useState(false);
  const [sizeMl, setSizeMl] = useState(false);
  const [sizeM, setSizeM] = useState(false);
  const [sizeLl, setSizeLl] = useState(false);
  const [sizeXl, setSizeXl] = useState(false);
  const [colorRed, setColorRed] = useState(false);
  const [colorGreen, setColorGreen] = useState(false);
  const [colorYellow, setColorYellow] = useState(false);
  const [colorOrange, setColorOrange] = useState(false);
  const [colorBlue, setColorBlue] = useState(false);

  async function getDetails() {
    const res = await axios.get(
      `https://api.elchocrud.pro/api/v1/94bbfdd99130cbebe3b7ce1e5cd2fb4e/bicycles/${id}`
    );
    const { data } = res;
    setDetails(data);
  }
  async function getAllBicycles() {
    const res = await axios(
      `https://api.elchocrud.pro/api/v1/94bbfdd99130cbebe3b7ce1e5cd2fb4e/bicycles`
    );
    const { data } = res;
    dispatch(getBicycles(data));
  }

  useEffect(() => {
    window.scroll(0, 0);
    getDetails();
    getAllBicycles();
  }, []);
  const someFav = favorite.some((ell) => ell._id === details._id);
  const addFav = () => {
    if (someFav) {
      dispatch(deleteFavorite(details._id));
    } else if (!user) {
      toast.error("Зарегистрируйте аккаунт!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }  else {
      dispatch(addFavorite(details));
    }
  };
  const someBas = basket.some((item) => item._id === details._id);
  const addBas = () => {
    if (someBas) {
      nav("/basket");
    } else if (!user) {
      toast.error("Зарегистрируйте аккаунт!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const objCS = {
        colRed: colorRed,
        colBlue: colorBlue,
        colGreen: colorGreen,
        colOrange: colorOrange,
        colYellow: colorYellow,
        sss: sizeS,
        mlmlml: sizeMl,
        mmm: sizeM,
        lll: sizeLl,
        xlxlxl: sizeXl,
      };
      dispatch(addToBasket({ ...details, objCS }));
    }
  };

  console.log(favorite);

  let {
    _id,
    images,
    name,
    description,
    price,
    brand,
    category,
    material,
    sizeL,
    size,
    rating,
  } = details;
  console.log(colorBike, "color");
  console.log(basket, "basket");

  return (
    <div>
      {!details ? (
        <div className="container flex items-center justify-center my-[100px]">
          <img src={loading} alt="img" />
        </div>
      ) : (
        <div className="container py-[50px]">
          <div className="flex items-center justify-between">
            <div className="w-[40%] relative">
              <div
                className={`w-[80px] h-[80px] rounded-[14px] absolute right-0 top-5`}
                style={{
                  background: colorBike,
                }}
              ></div>
              <img src={images} alt="img" className="w-[100%]" />
            </div>
            <div className="w-[50%]">
              <h1 className="text-[50px] font-bold">{name}</h1>
              <div className="flex items-center justify-between w-full my-[30px]">
                <div className="">
                  <h4 className="text-xl text-gray-500">Scott</h4>
                  <h4 className="text-xl text-gray-500">Артикул : 7655-188</h4>
                  <h4 className="text-xl text-green-500">В наличии</h4>
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-3xl">
                  <a href="#">
                    <FaSquareOdnoklassniki />
                  </a>
                  <a href="#">
                    <FaVk />
                  </a>
                  <a href="#">
                    <AiFillInstagram />
                  </a>
                  <a href="#">
                    <FaSquareTwitter />
                  </a>
                  <a href="#">
                    <FaTelegram />
                  </a>
                </div>
              </div>
              <h2 className="text-[40px] font-mono">{price}$</h2>
              <p className="text-xl text-gray-600 my-[20px]">
                {description?.slice(0, 150)}
              </p>
              <h3 className="text-black text-2xl font-bold">Размер:</h3>
              <div className="flex items-center gap-5 my-[10px]">
                <div
                  className={`w-[40px] cursor-pointer ${
                    sizeS ? "bg-black text-white " : "text-black bg-white"
                  } h-[40px] border-2 border-black border-solid flex items-center justify-center rounded-lg`}
                  onClick={() => {
                    setSizeS(true);
                    setSizeXl(false);
                    setSizeMl(false);
                    setSizeM(false);
                    setSizeLl(false);
                  }}
                >
                  <h1>S</h1>
                </div>
                <div
                  className={`w-[40px] cursor-pointer  ${
                    sizeMl ? "bg-black text-white " : "text-black bg-white"
                  } h-[40px] border-2 border-black border-solid flex items-center justify-center rounded-lg`}
                  onClick={() => {
                    setSizeMl(true);
                    setSizeS(false);
                    setSizeXl(false);
                    setSizeM(false);
                    setSizeLl(false);
                  }}
                >
                  <h1>M-L</h1>
                </div>
                <div
                  className={`w-[40px] cursor-pointer  ${
                    sizeM ? "bg-black text-white " : "text-black bg-white"
                  } h-[40px] border-2 border-black border-solid flex items-center justify-center rounded-lg`}
                  onClick={() => {
                    setSizeM(true);
                    setSizeS(false);
                    setSizeXl(false);
                    setSizeMl(false);
                    setSizeLl(false);
                  }}
                >
                  <h1>M</h1>
                </div>
                <div
                  className={`w-[40px] cursor-pointer ${
                    sizeL == 0 ? "opacity-[0.2]" : "opacity-[1]"
                  }  ${
                    sizeLl ? "bg-black text-white " : "text-black bg-white"
                  } h-[40px] border-2 border-black border-solid flex items-center justify-center rounded-lg`}
                  onClick={() => {
                    setSizeLl(true);
                    setSizeS(false);
                    setSizeXl(false);
                    setSizeMl(false);
                    setSizeM(false);
                  }}
                >
                  <h1>L</h1>
                </div>
                <div
                  className={`w-[40px] cursor-pointer  ${
                    sizeXl ? "bg-black text-white " : "text-black bg-white"
                  } h-[40px] border-2 border-black border-solid flex items-center justify-center rounded-lg`}
                  onClick={() => {
                    setSizeXl(true);
                    setSizeS(false);
                    setSizeMl(false);
                    setSizeM(false);
                    setSizeLl(false);
                  }}
                >
                  <h1>XL</h1>
                </div>
              </div>
              <h3 className="text-black text-2xl font-bold mb-[10px]">Цвет:</h3>
              <div className="flex items-center gap-5">
                <div
                  className={`w-[30px] h-[30px] ${
                    size <= 0 ? "opacity-[0.2]" : "opacity-[1]"
                  } rounded-[50%] bg-green-600`}
                  onClick={() => {
                    !size == 0 ? setColorBike("green") : null;
                    setColorGreen(true);
                    setColorYellow(false);
                    setColorBlue(false);
                    setColorOrange(false);
                    setColorRed(false);
                  }}
                ></div>
                <div
                  className={`w-[30px] h-[30px] ${
                    size <= 1 ? "opacity-[0.2]" : "opacity-[1]"
                  } rounded-[50%] bg-yellow-300`}
                  onClick={() => {
                    !size == 1 ? setColorBike("yellow") : null;
                    setColorOrange(true);
                    setColorGreen(false);
                    setColorYellow(false);
                    setColorBlue(false);
                    setColorRed(false);
                  }}
                ></div>
                <div
                  className={`w-[30px] h-[30px] ${
                    size <= 2 ? "opacity-[0.2]" : "opacity-[1]"
                  } rounded-[50%] bg-orange-600`}
                  onClick={() => {
                    !size == 2 ? setColorBike("orange") : null;
                    setColorOrange(true);
                    setColorGreen(false);
                    setColorYellow(false);
                    setColorBlue(false);
                    setColorRed(false);
                  }}
                ></div>
                <div
                  className={`w-[30px] h-[30px] ${
                    size <= 3 ? "opacity-[0.2]" : "opacity-[1]"
                  } rounded-[50%] bg-red-600`}
                  onClick={() => {
                    !size == 3 ? setColorBike("red") : null;
                    setColorRed(true);
                    setColorGreen(false);
                    setColorYellow(false);
                    setColorBlue(false);
                    setColorOrange(false);
                  }}
                ></div>
                <div
                  className={`w-[30px] h-[30px] ${
                    size <= 4 ? "opacity-[0.2]" : "opacity-[1]"
                  } rounded-[50%] bg-blue-600`}
                  onClick={() => {
                    !size == 4 ? setColorBike("blue") : null;
                    setColorRed(false);
                    setColorGreen(false);
                    setColorYellow(false);
                    setColorBlue(true);
                    setColorOrange(false);
                  }}
                ></div>
              </div>
              <div className="flex items-center gap-8 mt-[30px]">
                <div className="w-[110px] h-[45px] border-2 border-solid border-gray-400 flex items-center justify-around rounded-lg">
                  <button>-</button>
                  <h1>1</h1>
                  <button>+</button>
                </div>
                <div
                  className="w-[150px] h-[40px] bg-orange-500 flex items-center justify-center text-white"
                  onClick={() => addBas()}
                >
                  {someBas ? (
                    <button>В корзинe</button>
                  ) : (
                    <button>В корзину</button>
                  )}
                </div>
                <button
                  onClick={() => addFav()}
                  className="text-[#F57520] text-4xl bg-gray-300 py-[10px] px-[14px] rounded-lg"
                >
                  {someFav ? (
                    <a className=" text-red-600">
                      <MdOutlineFavorite />
                    </a>
                  ) : (
                    <IoMdHeartEmpty />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="my-[50px]">
            <h1 className="text-4xl font-bold mb-[14px]">Описание</h1>
            <p className="text-xl text-gray-400">{description}</p>
          </div>
          <div className="my-[50px]">
            <h1 className="text-4xl font-bold mb-[14px]">Характеристика</h1>
            <div className="w-full py-[30px] bg-gray-50 flex items-center justify-between px-[50px] rounded-md">
              <h5>Цвет</h5>
              <h5 className="text-gray-500">Жёлтый</h5>
            </div>
            <div className="w-full py-[30px] bg-gray-200 flex items-center justify-between px-[50px] rounded-md">
              <h5>Год</h5>
              <h5 className="text-gray-500">2016</h5>
            </div>
            <div className="w-full py-[30px] bg-gray-50 flex items-center justify-between px-[50px] rounded-md">
              <h5>Диаметр колеса</h5>
              <h5 className="text-gray-500">27.5</h5>
            </div>
            <div className="w-full py-[30px] bg-gray-200 flex items-center justify-between px-[50px] rounded-md">
              <h5>Материал рамы</h5>
              <h5 className="text-gray-500">Карбон</h5>
            </div>
            <div className="w-full py-[30px] bg-gray-50 flex items-center justify-between px-[50px] rounded-md">
              <h5>Размер</h5>
              <h5 className="text-gray-500">L</h5>
            </div>
            <div className="w-full py-[30px] bg-gray-200 flex items-center justify-between px-[50px] rounded-md">
              <h5>Страна</h5>
              <h5 className="text-gray-500">Швейцария</h5>
            </div>
            <div className="w-full py-[30px] bg-gray-50 flex items-center justify-between px-[50px] rounded-md">
              <h5>Производитель</h5>
              <h5 className="text-gray-500">Scott</h5>
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl font-bold mb-[14px]">Похожие товары</h1>
            <div className="flex items-center overflow-x-scroll gap-5 h-[800px]">
              {bicycles
                ?.filter((el) => el.brand === details.brand)
                ?.map((el) => (
                  <BicyclesCard el={el} />
                ))}
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default BicycleDetails;
