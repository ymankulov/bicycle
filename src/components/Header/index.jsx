import React, { useState } from "react";
import logo from "../../assets/images/header-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CgFileAdd } from "react-icons/cg";
import { useSelector } from "react-redux";
import SignIn from "../SignIn";
import { useAuth } from "../../context/AuthContext";
import icon from "../../assets/images/usericon.webp";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const { user, logOut } = useAuth();
  const [modal, setModal] = useState(false);
  const { basket } = useSelector((s) => s.basket);
  const { favorite } = useSelector((s) => s.bicyclesFavorite);
  console.log(user, "header");
  return (
    <div className="py-[30px] bg-black sticky top-0 z-[99] ">
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" />
          <div className="text-white text-[20px] uppercase flex items-center gap-[30px]">
            <NavLink to={"/"}>Trade In</NavLink>
            <NavLink to={"/bicycles"}>Велосипеды</NavLink>
            <NavLink to={"/jh"}>Экипировка</NavLink>
            <NavLink to={"/j"}>Аксессуары</NavLink>
          </div>
          <div className="flex text-white text-[30px] gap-6">
            <NavLink to="/create">
              <CgFileAdd />
            </NavLink>
            <Link to="/search">
              <CiSearch />
            </Link>
            <Link to="/" onClick={() => setModal(!modal)}>
              <CiUser />
            </Link>
            <Link to="/favorite" className="relative">
              {favorite.length ? (
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#F57520] absolute top-0 right-0"></div>
              ) : null}
              <CiHeart />
            </Link>
            <Link to="/basket" className="relative">
              {basket.length ? (
                <div className="w-[10px] h-[10px] rounded-[50%] bg-[#F57520] absolute top-0 right-0"></div>
              ) : null}
              <BsCart3 />
            </Link>
          </div>
          <div className="flex items-center justify-center cursor-pointer" onClick={()=> user ? null : setModal(!modal)}>
            <h1 className="text-xl text-white">
              {user?.displayName ? user.displayName : "регистрация"}
            </h1>
            <img
              src={user?.photoURL ? user.photoURL : icon}
              alt="img"
              width={50}
              className="rounded-[50px]"
            />
          </div>
        </div>
      </div>
      {user ? (
        <a
          href="#"
          className="text-[30px] text-red-600 absolute top-2 right-2"
          onClick={() => logOut()}
        >
          <IoMdLogOut />
        </a>
      ) : null}
      <div className=" fixed top-[200px] left-[25%] z-30">
        {modal ? <SignIn /> : null}
      </div>
      {modal ? (
        <div className="bgmodal" onClick={() => setModal(false)}></div>
      ) : null}
    </div>
  );
};

export default Header;
