import React, { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestrauntMenu;
