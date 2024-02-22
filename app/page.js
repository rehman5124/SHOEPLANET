"use client";

import {
  Navbar,
  HeroSection,
  PopularSales,
  Highlights,
  TopSales,
  Featured,
  SportCategories,
  Footer,
  CartSection,
} from "@/components";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  const [componentData, setComponentData] = useState([]);
  const [topData, setTopData] = useState([]);


  const data = (prodUct) => {
    const prodExist = componentData.find((item) => item.id === prodUct.id);
    {
      prodExist
        ? { ...prodExist, quantity: +1 }
        : setComponentData((prevProduct) => {
            return [...prevProduct, { ...prodUct, quantity: 1 }];
          });
    }
    // setComponentData((prevProduct) => {
    //   return [...prevProduct, prodUct]
    // })
  };

  const topSalesData = (prodUct) => {
    const prodExist = topData.find((item) => item.id === prodUct.id);
    {
      prodExist
        ? { ...prodExist, quantity: +1 }
        : setTopData((prevProduct) => {
            return [...prevProduct, { ...prodUct, quantity: 1 }];
          });
    }

    // setTopData((prevProduct) => {
    //   return [...prevProduct, prodUct]
    // })
  };

  const deleteComponent = (id) => {
    setComponentData((prevProduct) => {
      return prevProduct.filter((product, index) => {
        return index !== id;
      });
    });

  };

  const deleteTopComponent = (id) => {
    setTopData((prevProduct) => {
      return prevProduct.filter((product, index) => {
        return index !== id;
      });
    });
  };

  return (
    <Provider store={store}>
      <Navbar />
      <CartSection
        topItem={topData}
        item={componentData}
        deleteTopComponent={deleteTopComponent}
        deleteComponent={deleteComponent}
      />
      <HeroSection />
      <PopularSales fetchData={data} />
      <Highlights />
      <TopSales fetchData={topSalesData} />
      <Featured />
      <SportCategories />
      <Footer />
    </Provider>
  );
}
