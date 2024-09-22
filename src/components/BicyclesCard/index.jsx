import React, { useState } from "react";
import img1 from "../../assets/images/img1.svg";
import img2 from "../../assets/images/img2.svg";
import img3 from "../../assets/images/img3.svg";
import img4 from "../../assets/images/img4.svg";
import img5 from "../../assets/images/img5.svg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { PiCursorClick } from "react-icons/pi";

const BicyclesCard = ({ el }) => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="p-[20px] border-2 border-solid relative border-[#F57520] rounded-lg w-[300px] h-[460px]"
      onMouseOut={() => setClick(false)}
      onMouseOver={() => setClick(true)}
    >
      <img
        src={
          el.brand === "Bianci"
            ? img1
            : el.brand === "BMC"
            ? img2
            : el.brand === "Ciclistino"
            ? img3
            : el.brand === "Cipollini"
            ? img4
            : el.brand === "Colnago"
            ? img5
            : null
        }
        alt="flag"
        className=" absolute top-0 left-0"
      />

      <Zoom>
        <img
          src={el.images}
          alt="img"
          className="w-[250px] mx-auto mb-[40px] mt-[30px]"
        />
      </Zoom>
      <h1
        className="text-[20px] mb-[26px] cursor-pointer"
        onClick={() => navigate(`/details/${el._id}`)}
      >
        {el.name}
      </h1>
      <h4 className="text-[25px] text-gray-400">{el.price}₽</h4>
      <button
        className="flex items-center justify-center text-white h-[40px] w-[200px] text-[15px] bg-[#F57520] rounded-lg"
        style={{
          position: "absolute",
          bottom: "15px",
          left: "60px",
          transform: click ? "translateY(0)" : "translateY(100px)",
          opacity: click ? "1" : "0",
        }}
      >
        <PiCursorClick />В 1 клик
      </button>
    </div>
  );
};

export default BicyclesCard;
