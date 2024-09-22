import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBicycles } from "../../redux/reducers/CreateSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [bicyclesName, setBicyclesName] = useState("");
  const [bicyclesUrl, setBicyclesUrl] = useState("");
  const [bicyclesDes, setBicyclesDes] = useState("");
  const [bicyclesPrice, setBicyclesPrice] = useState("");
  const [bicyclesBrand, setBicyclesBrand] = useState("");
  const [bicyclesCategory, setBicyclesCategory] = useState("");
  const [bicyclesMaterial, setBicyclesMaterial] = useState("");
  const [sizeS, setSizeS] = useState("");
  const [sizeML, setSizeML] = useState("");
  const [sizeM, setSizeM] = useState("");
  const [sizeL, setSizeL] = useState("");
  const [sizeXL, setSizeXL] = useState("");
  const [border, setBorder] = useState(false);
  const dispatch = useDispatch();

  const errorMessage = () =>
    toast.error(
      !bicyclesName
        ? "ячейка Name"
        : !bicyclesUrl
        ? "ячейка Url"
        : !bicyclesBrand
        ? "ячейка Brand"
        : !bicyclesCategory
        ? "ячейка Category"
        : !bicyclesDes
        ? "ячейка Description"
        : !bicyclesMaterial
        ? "ячейка Material"
        : !bicyclesPrice
        ? "ячейка Price"
        : null,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );

  function addBicycles() {
    if (
      bicyclesName.trim() === "" ||
      bicyclesBrand.trim() === "" ||
      bicyclesCategory.trim() === "" ||
      bicyclesDes.trim() === "" ||
      bicyclesMaterial.trim() === "" ||
      bicyclesPrice.trim() === "" ||
      bicyclesUrl.trim() === ""
    ) {
      setBorder(true);
      errorMessage();
    } else {
      const newBicycles = {
        name: bicyclesName,
        description: bicyclesDes,
        price: bicyclesPrice,
        images: bicyclesUrl,
        brand: bicyclesBrand,
        category: bicyclesCategory,
        material: bicyclesMaterial,
        sizeS,
        sizeML,
        sizeM,
        sizeL,
        sizeXL,
        size: Math.round(Math.random() * 5),
        rating: Math.round(Math.random() * 4),
        date: new Date().toLocaleDateString(),
        quantity:1
      };
      axios.post(
        `https://api.elchocrud.pro/api/v1/94bbfdd99130cbebe3b7ce1e5cd2fb4e/bicycles`,
        newBicycles
      );
      dispatch(createBicycles(newBicycles));
      setBicyclesDes("");
      setBicyclesName("");
      setBicyclesUrl("");
      setBicyclesPrice("");
      setBorder(false);
    }
  }

  return (
    <div className="mt-[100px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col w-[600px] mx-auto gap-[40px]">
          <input
            type="text"
            className={`text-[25px] w-[100%] ${
              !bicyclesUrl
                ? !border
                  ? "border-[#000]"
                  : "border-red-600"
                : "border-[#000]"
            } border-2 border-solid rounded-md py-[5px] px-[25px] outline-none`}
            placeholder="Bicycles Img"
            onChange={(e) => setBicyclesUrl(e.target.value)}
            value={bicyclesUrl}
          />
          <input
            type="text"
            className={`text-[25px] w-[100%] ${
              !bicyclesName
                ? !border
                  ? "border-[#000]"
                  : "border-red-600"
                : "border-[#000]"
            } border-2 border-solid rounded-md py-[5px] px-[25px] outline-none`}
            placeholder="Bicycles name"
            onChange={(e) => setBicyclesName(e.target.value)}
            value={bicyclesName}
          />
          <input
            type="text"
            className={`text-[25px] w-[100%] ${
              !bicyclesDes
                ? !border
                  ? "border-[#000]"
                  : "border-red-600"
                : "border-[#000]"
            } border-2 border-solid rounded-md py-[5px] px-[25px] outline-none`}
            placeholder="Bicycles Description"
            onChange={(e) => setBicyclesDes(e.target.value)}
            value={bicyclesDes}
          />
          <input
            type="text"
            className={`text-[25px] w-[100%] ${
              !bicyclesPrice
                ? !border
                  ? "border-[#000]"
                  : "border-red-600"
                : "border-[#000]"
            } border-2 border-solid rounded-md py-[5px] px-[25px] outline-none`}
            placeholder="Bicycles Price"
            onChange={(e) => setBicyclesPrice(e.target.value)}
            value={bicyclesPrice}
          />
          <div className="flex items-center justify-between">
            <input
              type="text"
              maxLength={3}
              className={`text-[25px] w-[15%] ${
                !sizeS
                  ? !border
                    ? "border-[#000]"
                    : "border-red-600"
                  : "border-[#000]"
              } border-2 border-solid rounded-md py-[5px] px-[10px] outline-none`}
              placeholder="   S"
              onChange={(e) => setSizeS(e.target.value)}
              value={sizeS}
            />
            <input
              type="text"
              maxLength={3}
              className={`text-[25px] w-[15%] ${
                !sizeML
                  ? !border
                    ? "border-[#000]"
                    : "border-red-600"
                  : "border-[#000]"
              } border-2 border-solid rounded-md py-[5px] px-[10px] outline-none`}
              placeholder=" M-L"
              onChange={(e) => setSizeML(e.target.value)}
              value={sizeML}
            />
            <input
              type="text"
              maxLength={3}
              className={`text-[25px] w-[15%] ${
                !sizeM
                  ? !border
                    ? "border-[#000]"
                    : "border-red-600"
                  : "border-[#000]"
              } border-2 border-solid rounded-md py-[5px] px-[10px] outline-none`}
              placeholder="   M"
              onChange={(e) => setSizeM(e.target.value)}
              value={sizeM}
            />
            <input
              type="text"
              maxLength={3}
              className={`text-[25px] w-[15%] ${
                !sizeL
                  ? !border
                    ? "border-[#000]"
                    : "border-red-600"
                  : "border-[#000]"
              } border-2 border-solid rounded-md py-[5px] px-[10px] outline-none`}
              placeholder="   L"
              onChange={(e) => setSizeL(e.target.value)}
              value={sizeL}
            />
            <input
              type="text"
              maxLength={3}
              className={`text-[25px] w-[15%] ${
                !sizeXL
                  ? !border
                    ? "border-[#000]"
                    : "border-red-600"
                  : "border-[#000]"
              } border-2 border-solid rounded-md py-[5px] px-[10px] outline-none`}
              placeholder="   XL"
              onChange={(e) => setSizeXL(e.target.value)}
              value={sizeXL}
            />
          </div>
          <div className="">
            <select
              className={`text-[25px] w-[600px] mb-[40px]  ${
                !bicyclesCategory
                  ? !border
                    ? "border-[#000]"
                    : "border-red-600"
                  : "border-[#000]"
              } border-2 border-solid rounded-md py-[5px] px-[25px] outline-none`}
              onChange={(e) => setBicyclesCategory(e.target.value)}
            >
              <option value="">Категории товара</option>
              <option value="Горные велосипеды">Горные велосипеды</option>
              <option value="Городские велосипеды">Городские велосипеды</option>
              <option value="Гравийные велосипеды">Гравийные велосипеды</option>
              <option value="Двухподвесные велосипеды">
                Двухподвесные велосипеды
              </option>
            </select>
            <div className="flex items-center justify-between w-[100%]">
              <select
                className={`text-[25px] ${
                  !bicyclesBrand
                    ? !border
                      ? "border-[#000]"
                      : "border-red-600"
                    : "border-[#000]"
                } border-2 border-solid rounded-md py-[5px] px-[25px] outline-none`}
                onChange={(e) => setBicyclesBrand(e.target.value)}
              >
                <option value="">Бренд</option>
                <option value="Bianci">Bianci</option>
                <option value="BMC">BMC</option>
                <option value="Ciclistino">Ciclistino</option>
                <option value="Colnago">Colnago</option>
              </select>
              <select
                className={`text-[25px] ${
                  !bicyclesMaterial
                    ? !border
                      ? "border-[#000]"
                      : "border-red-600"
                    : "border-[#000]"
                } border-2 border-solid rounded-md py-[5px] px-[25px] outline-none`}
                onChange={(e) => setBicyclesMaterial(e.target.value)}
              >
                <option value="">Материал рамы</option>
                <option value="Алюминий">Алюминий</option>
                <option value="Карбон">Карбон</option>
                <option value="Сталь">Сталь</option>
              </select>
            </div>
          </div>
          <button
            className="bg-[#F57520] text-[35px] py-[5px] px-[45px] w-[100%] rounded-lg text-white"
            onClick={() => addBicycles()}
          >
            Save
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Create;
