import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Create from "./components/Create";
import { Route, Routes } from "react-router-dom";
import BicycleDetails from "./components/BicycleDetails";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import Bicycles from "./components/Bicycles";
import Search from "./components/Search";
import Order from "./components/Order";

const App = () => {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/create",
      element: <Create />,
    },
    {
      id: 3,
      link: "/details/:id",
      element: <BicycleDetails />,
    },
    {
      id: 4,
      link: "/basket",
      element: <Basket />,
    },
    {
      id: 5,
      link: "/favorite",
      element: <Favorite />,
    },
    {
      id: 6,
      link: "/bicycles",
      element: <Bicycles />,
    },
    {
      id: 7,
      link: "/search",
      element: <Search />,
    },
    {
      id: 8,
      link: "/order",
      element: <Order />,
    },
  ];
  return (
    <div>
          <Header />
          <Routes>
            {routes.map((el) => (
              <Route path={el.link} element={el.element} key={el.id} />
            ))}
          </Routes>
    </div>
  );
};

export default App;
