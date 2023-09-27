import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  console.log(resInfo);
  // if (restrauntInfo === null) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[0]?.card?.card?.info;

  // // if (
  // //   restrauntInfo?.cards &&
  // //   Array.isArray(restrauntInfo.cards) &&
  // //   restrauntInfo.cards.length > 0
  // // ) {
  // //   const { info } = restrauntInfo.cards[0]?.card?.card || {};
  // //   const { name, cuisines, costForTwoMessage } = info || {};

  // // Now you can use name, cuisines, and costForTwoMessage safely
  // // }
  // if (
  //   restrauntInfo?.cards &&
  //   restrauntInfo.cards.length > 2 &&
  //   restrauntInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length > 1
  // ) {
  //   const { card } =
  //     restrauntInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1] || {};
  //   const { itemCards } = card || {};

  //   // Now you can use itemCards safely
  // }

  // const categories =
  //   restrauntInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  //     (c) =>
  //       c?.card?.["card"]?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  // ) || [];

  return (
    <div className="text">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      {/* <p className="font-bold text-lg">
        {restrauntInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")} -{" "}
        {restrauntInfo?.cards[0]?.card?.card?.info.costForTwoMessage}
      </p> */}
    </div>
  );
};

export default RestrauntMenu;
