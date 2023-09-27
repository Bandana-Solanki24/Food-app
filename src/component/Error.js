import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oopps</h1>
      <p>Something went wrong</p>
      <p>{err.status}</p>
    </div>
  );
};

export default Error;
