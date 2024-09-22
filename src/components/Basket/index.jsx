import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import emptyBasket from "../../assets/images/basket.png";
import {
  clearBasket,
  decrementQuantity,
  deleteBasket,
  incrementQuantity,
} from "../../redux/reducers/BasketSlice";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "../SignIn";

const Basket = () => {
  const { user } = useAuth();
  const { basket } = useSelector((s) => s.basket);
  const [modal, setModal] = useState(false);

  const discount = basket.reduce((acc, el) => {
    return (acc += Math.floor(parseInt((el.price / 100) * 10 * el.quantity)));
  }, 0);
  const totalPrice = basket.reduce((acc, el) => {
    return (acc += Math.floor(parseInt(((el.price * 90) / 100) * el.quantity)));
  }, 0);
  const allPrice = basket.reduce((acc, el) => {
    return (acc += Math.floor(parseInt(el.price * el.quantity)));
  }, 0);

  function signInAccount() {
    if (!user) {
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
      navigate("/order");
    }
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        {!basket.length ? (
          <div className="flex items-center justify-center">
            <img src={emptyBasket} alt="img" width={600} />
          </div>
        ) : (
          <div className="flex flex-col">
            <h1 className="text-[64px] font-[400]">Корзина</h1>
            <div className="flex w-[949px] items-center justify-between">
              <h1
                onClick={() => navigate("/bicycles")}
                className="text-[#F57520] text-[16px] leading-[25.6px] font-[400] cursor-pointer"
              >
                Вернуться к покупкам
              </h1>
              <h1
                onClick={() => dispatch(clearBasket())}
                className="font-[400] text-[14px] leading-[22.4px] text-[#B3B3B3] cursor-pointer"
              >
                Очистить корзину
              </h1>
            </div>
            <div className=" flex items-center gap-[20px] ">
              <div className="flex flex-col gap-3  w-[949px]">
                {user ? (
                  basket.map((el) => (
                    <div className="flex items-center  justify-around w-[940px] h-[162px] border-2 border-solid border-black">
                      <img src={el.images} alt="img" className="w-[20%]" />
                      <div className="">
                        <h1>{el.name}</h1>
                        <div className=" flex gap-2 mt-2">
                          <h2>size:</h2>
                          {el.objCS.lll ? <h2>L</h2> : null}
                          {el.objCS.mlmlml ? <h2>ML</h2> : null}
                          {el.objCS.mmm ? <h2>M</h2> : null}
                          {el.objCS.sss ? <h2>S</h2> : null}
                          {el.objCS.xlxlxl ? <h2>XL</h2> : null}
                        </div>
                        {el.objCS.colGreen ? (
                          <div className=" w-[50px] h-[20px] bg-green-600 rounded-[6px] mt-[10px]"></div>
                        ) : null}
                        {el.objCS.colRed ? (
                          <div className=" w-[50px] h-[20px] bg-red-600 rounded-[6px] mt-[10px]"></div>
                        ) : null}
                        {el.objCS.colBlue ? (
                          <div className=" w-[50px] h-[20px] bg-blue-600 rounded-[6px] mt-[10px]"></div>
                        ) : null}
                        {el.objCS.colOrange ? (
                          <div className=" w-[50px] h-[20px] bg-orange-600 rounded-[6px] mt-[10px]"></div>
                        ) : null}
                        {el.objCS.colYellow ? (
                          <div className=" w-[50px] h-[20px] bg-yellow-300 rounded-[6px] mt-[10px]"></div>
                        ) : null}
                      </div>
                      <div className=" border-solid border-[1px] border-[#E5E5E5] flex items-center rounded-[10px] w-[123px] h-[52px] justify-around">
                        <button
                          onClick={() => dispatch(decrementQuantity(el))}
                          className="text-[30px] font-[400]"
                        >
                          -
                        </button>
                        <h1>{el.quantity}</h1>
                        <button
                          onClick={() => dispatch(incrementQuantity(el))}
                          className="text-[30px] font-[400]"
                        >
                          +
                        </button>
                      </div>
                      <h3 className="text-2xl">{el.price * el.quantity}$</h3>
                      <a
                        href="#"
                        className="text-4xl"
                        onClick={() => dispatch(deleteBasket(el._id))}
                      >
                        <IoClose />
                      </a>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center flex-col gap-[20px] justify-center">
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
                )}
              </div>
              <ToastContainer />
              <div className="flex flex-col items-center w-[290px] h-[378px] border-[1px] border-solid border-[#E5E5E5] rounded-[5px]">
                <div className=" flex flex-col   w-[242px] h-[238px] gap-[24px] mt-[20px] ">
                  <div className="flex items-center justify-between">
                    <h1 className="font-[300] text-[16px] leading-[25.6px] text-[#777777]">
                      Номер заказа
                    </h1>
                    <h2 className="text-[#101010] leading-[25.6px] text-[16px] font-[300]">
                      789563678
                    </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="font-[300] text-[16px] leading-[25.6px] text-[#777777]">
                      Сумма заказа (без скидки)
                    </h1>
                    <h2 className="text-[#101010] leading-[25.6px] text-[16px] font-[300]">
                      {user ? allPrice : 0}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="font-[300] text-[16px] leading-[25.6px] text-[#777777]">
                      Скидка -10%
                    </h1>
                    <h2 className="text-[#101010] leading-[25.6px] text-[16px] font-[300]">
                      {user ? discount : 0}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="font-[500] text-[24px] tracking-[1%] leading-[38.4px] text-[#101010]">
                      Итого
                    </h1>
                    <h2 className="text-[#101010] tracking-[1%] leading-[38.4px] text-[24px] font-[500]">
                      {user ? totalPrice : 0}
                    </h2>
                  </div>
                  <button
                    onClick={() => signInAccount()}
                    className="text-[white] font-[500] text-[16px] leading-[19.68px] bg-[#F57520]  flex  items-center justify-center rounded-[10px] w-[242px]  py-[16px]"
                  >
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default Basket;
