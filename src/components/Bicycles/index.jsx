import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BicyclesCard from "../BicyclesCard";
import loading from "../../assets/images/loading.svg";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import axios from "axios";
import { getBicycles } from "../../redux/reducers/CreateSlice";
import { MdCheckBox } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const Bicycles = () => {
  const { bicycles } = useSelector((s) => s.bicyclesCreate);
  const dispatch = useDispatch();
  const [filterProduct, setFilterProduct] = useState(bicycles);
  //Category
  const [category, setCategory] = useState(false);
  const [gornyi, setGornyi] = useState(false);
  const [gorod, setGorod] = useState(false);
  const [graviyni, setGraviyni] = useState(false);
  const [dvuhpodves, setDvuhpodves] = useState(false);
  //Brand
  const [brand, setBrand] = useState(false);
  const [bianci, setBianci] = useState(false);
  const [bmc, setBmc] = useState(false);
  const [cilcistino, setCilcistino] = useState(false);
  const [colnago, setColnago] = useState(false);
  //Material
  const [material, setMaterial] = useState(false);
  const [alymini, setAlymini] = useState(false);
  const [carbon, setCarbon] = useState(false);
  const [stal, setStal] = useState(false);
  //Price
  const [price, setPrice] = useState(false);
  //

  async function filterProducts() {
    try {
      let { data } = await axios.get(
        `https://api.elchocrud.pro/api/v1/94bbfdd99130cbebe3b7ce1e5cd2fb4e/bicycles`
      );
      dispatch(getBicycles(data));
      let filtered = data;
      if (gornyi) {
        filtered = filtered.filter((el) => el.category === "Горные велосипеды");
      } else if (gorod) {
        filtered = filtered.filter(
          (el) => el.category === "Городские велосипеды"
        );
      } else if (graviyni) {
        filtered = filtered.filter(
          (el) => el.category === "Гравийные велосипеды"
        );
      } else if (dvuhpodves) {
        filtered = filtered.filter(
          (el) => el.category === "Двухподвесные велосипеды"
        );
      }

      if (bianci) {
        filtered = filtered.filter((el) => el.brand === "Bianci");
      } else if (bmc) {
        filtered = filtered.filter((el) => el.brand === "BMC");
      } else if (cilcistino) {
        filtered = filtered.filter((el) => el.brand === "Cilcistno");
      } else if (colnago) {
        filtered = filtered.filter((el) => el.brand === "Colnago");
      }

      if (alymini) {
        filtered = filtered.filter((el) => el.material === "Алюминий");
      } else if (carbon) {
        filtered = filtered.filter((el) => el.material === "Карбон");
      } else if (stal) {
        filtered = filtered.filter((el) => el.material === "Сталь");
      }

      setFilterProduct(filtered);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    filterProducts();
  }, [
    gornyi,
    gorod,
    graviyni,
    dvuhpodves,
    bianci,
    bmc,
    cilcistino,
    colnago,
    alymini,
    carbon,
    stal,
  ]);

  return (
    <div className="py-[100px]">
      <div className="container">
        <div className="flex items-start justify-between gap-[50px]">
          <div className="w-[400px] flex items-start flex-col gap-[30px]">
            <div className=" flex items-start flex-col gap-[10px]">
              <div className="">
                {category ? (
                  <h1
                    className="text-[20px] font-[600] flex items-center gap-[20px] cursor-pointer"
                    onClick={() => setCategory(false)}
                  >
                    Категории товара <GoChevronUp className="text-[30px]" />
                  </h1>
                ) : (
                  <h1
                    className="text-[20px] font-[600] flex items-center gap-[20px] cursor-pointer"
                    onClick={() => setCategory(true)}
                  >
                    Категории товара <GoChevronDown className="text-[30px]" />
                  </h1>
                )}
              </div>
              <div
                className=""
                style={{
                  display: category ? "block" : "none",
                }}
              >
                <div className="flex items-center gap-[5px] text-[15px]">
                  {gornyi ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setDvuhpodves(false);
                        setGornyi(false);
                        setGorod(false);
                        setGraviyni(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setDvuhpodves(false);
                        setGornyi(true);
                        setGorod(false);
                        setGraviyni(false);
                      }}
                    />
                  )}
                  <h1>Горные велосипеды</h1>
                </div>
                <div className="flex items-center gap-[10px] text-[15px]">
                  {gorod ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setDvuhpodves(false);
                        setGornyi(false);
                        setGorod(false);
                        setGraviyni(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setDvuhpodves(false);
                        setGornyi(false);
                        setGorod(true);
                        setGraviyni(false);
                      }}
                    />
                  )}
                  <h1>Городские велосипеды</h1>
                </div>
                <div className="flex items-center gap-[10px] text-[15px]">
                  {graviyni ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setDvuhpodves(false);
                        setGornyi(false);
                        setGorod(false);
                        setGraviyni(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setDvuhpodves(false);
                        setGornyi(false);
                        setGorod(false);
                        setGraviyni(true);
                      }}
                    />
                  )}
                  <h1>Гравийные велосипеды</h1>
                </div>
                <div className="flex items-center gap-[10px] text-[15px]">
                  {dvuhpodves ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setDvuhpodves(false);
                        setGornyi(false);
                        setGorod(false);
                        setGraviyni(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setDvuhpodves(true);
                        setGornyi(false);
                        setGorod(false);
                        setGraviyni(false);
                      }}
                    />
                  )}
                  <h1>Двухподвесные велосипеды</h1>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-col gap-[10px]">
              <div className="">
                {price ? (
                  <h1
                    className="text-[20px] font-[600] flex items-center gap-[140px] cursor-pointer"
                    onClick={() => setPrice(false)}
                  >
                    Цена <GoChevronUp className="text-[30px]" />
                  </h1>
                ) : (
                  <h1
                    className="text-[20px] font-[600] flex items-center gap-[140px] cursor-pointer"
                    onClick={() => setPrice(true)}
                  >
                    Цена <GoChevronDown className="text-[30px]" />
                  </h1>
                )}
              </div>
              <div
                className=""
                style={{
                  display: price ? "block" : "none",
                }}
              >
                <input type="range" name="" id="" className="w-[250px]" />
                <div className="flex items-center gap-[10px]">
                  <button className="w-[100px] h-[50px] border-2 border-solid rounded-[10px]">
                    0 Com
                  </button>
                  -
                  <button className="w-[120px] h-[50px] border-2 border-solid rounded-[10px]">
                    100000 Com
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex items-start flex-col gap-[10px]">
              <div className="">
                {brand ? (
                  <h1
                    className="text-[20px] font-[600] flex items-center gap-[130px] cursor-pointer"
                    onClick={() => setBrand(false)}
                  >
                    Бренд <GoChevronUp className="text-[30px]" />
                  </h1>
                ) : (
                  <h1
                    className="text-[20px] font-[600] flex items-center gap-[130px] cursor-pointer"
                    onClick={() => setBrand(true)}
                  >
                    Бренд <GoChevronDown className="text-[30px]" />
                  </h1>
                )}
              </div>
              <div
                className=""
                style={{
                  display: brand ? "block" : "none",
                }}
              >
                <div className="flex items-center gap-[5px] text-[15px]">
                  {bianci ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setBianci(false);
                        setBmc(false);
                        setCilcistino(false);
                        setColnago(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setBianci(true);
                        setBmc(false);
                        setCilcistino(false);
                        setColnago(false);
                      }}
                    />
                  )}
                  <h1>Bianci</h1>
                </div>
                <div className="flex items-center gap-[10px] text-[15px]">
                  {bmc ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setBianci(false);
                        setBmc(false);
                        setCilcistino(false);
                        setColnago(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setBianci(false);
                        setBmc(true);
                        setCilcistino(false);
                        setColnago(false);
                      }}
                    />
                  )}
                  <h1>BMC</h1>
                </div>
                <div className="flex items-center gap-[10px] text-[15px]">
                  {cilcistino ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setBianci(false);
                        setBmc(false);
                        setCilcistino(false);
                        setColnago(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setBianci(false);
                        setBmc(false);
                        setCilcistino(true);
                        setColnago(false);
                      }}
                    />
                  )}
                  <h1>Ciclistino</h1>
                </div>
                <div className="flex items-center gap-[10px] text-[15px]">
                  {colnago ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setBianci(false);
                        setBmc(false);
                        setCilcistino(false);
                        setColnago(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setBianci(false);
                        setBmc(false);
                        setCilcistino(false);
                        setColnago(true);
                      }}
                    />
                  )}
                  <h1>Colnago</h1>
                </div>
              </div>
            </div>
            <div className=" flex items-start flex-col gap-[10px]">
              <div className="">
                {material ? (
                  <h1
                    className="text-[20px] font-[600] flex items-center gap-[35px] cursor-pointer"
                    onClick={() => setMaterial(false)}
                  >
                    Материал рамы <GoChevronUp className="text-[30px]" />
                  </h1>
                ) : (
                  <h1
                    className="text-[20px] font-[600] flex items-center gap-[35px] cursor-pointer"
                    onClick={() => setMaterial(true)}
                  >
                    Материал рамы <GoChevronDown className="text-[30px]" />
                  </h1>
                )}
              </div>
              <div
                className=""
                style={{
                  display: material ? "block" : "none",
                }}
              >
                <div className="flex items-center gap-[5px] text-[15px]">
                  {alymini ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setAlymini(false);
                        setCarbon(false);
                        setStal(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setAlymini(true);
                        setCarbon(false);
                        setStal(false);
                      }}
                    />
                  )}
                  <h1>Алюминий</h1>
                </div>
                <div className="flex items-center gap-[10px] text-[15px]">
                  {carbon ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setAlymini(false);
                        setCarbon(false);
                        setStal(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setAlymini(false);
                        setCarbon(true);
                        setStal(false);
                      }}
                    />
                  )}
                  <h1>Карбон</h1>
                </div>
                <div className="flex items-center gap-[10px] text-[15px]">
                  {stal ? (
                    <MdCheckBox
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setAlymini(false);
                        setCarbon(false);
                        setStal(false);
                      }}
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      className="text-[30px] cursor-pointer"
                      onClick={() => {
                        setAlymini(false);
                        setCarbon(false);
                        setStal(true);
                      }}
                    />
                  )}
                  <h1>Сталь</h1>
                </div>
              </div>
            </div>
            <button
              className="w-[200px] h-[40px] border-2 border-solid border-black rounded-[10px] text-[17px] cursor-pointer font-[600] "
              onClick={() => {
                setGornyi(false);
                setGorod(false);
                setGraviyni(false);
                setDvuhpodves(false);
                setCarbon(false);
                setAlymini(false);
                setStal(false);
                setBianci(false);
                setBmc(false);
                setCilcistino(false);
                setColnago(false);
              }}
            >
              Сбросить фильтры
            </button>
          </div>
          {bicycles.length ? (
            <div className="flex items-center flex-wrap gap-[20px]">
              {filterProduct.map((el) => (
                <BicyclesCard el={el} key={el._id} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center mt-[100px]">
              <img src={loading} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bicycles;
