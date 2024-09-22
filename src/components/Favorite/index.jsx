import React, { useState } from "react";
import { useSelector } from "react-redux";
import BicyclesCard from "../BicyclesCard";
import emptyFav from "../../assets/images/favorite.webp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SignIn from "../SignIn";

const Favorite = () => {
  const { user } = useAuth();
  const { favorite } = useSelector((s) => s.bicyclesFavorite);
  console.log(favorite, "fav");
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="container">
        <div className=" mt-[30px]">
          {!user ? (
            <div className="flex items-center mt-[200px] flex-col gap-[20px] justify-center">
              <h1 className="text-[40px] font-[600] text-blue-500">
                SignIn Account!
              </h1>
              <button
                className="w-[200px] h-[40px] rounded-[10px] bg-orange-500 text-white font-[600]"
                onClick={() => setModal(true)}
              >
                auth
              </button>
            </div>
          ) : favorite.length === 0 ? (
            <div className="flex items-center justify-center mx-auto">
              <img
                src={emptyFav}
                alt=""
                onClick={() => navigate("/")}
                className="w-[600px]"
              />
            </div>
          ) : (
            <div className="flex items-center flex-wrap gap-[30px]">
              {favorite.map((el) => (
                <BicyclesCard el={el} />
              ))}
            </div>
          )}
        </div>
        <div className=" fixed top-[200px] left-[25%] z-30">
          {modal ? <SignIn /> : null}
        </div>
        {modal ? (
          <div className="bgmodal" onClick={() => setModal(false)}></div>
        ) : null}
      </div>
    </div>
  );
};

export default Favorite;
