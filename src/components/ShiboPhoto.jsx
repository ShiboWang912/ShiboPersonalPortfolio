//Mia photo
import React, { Suspense, useEffect, useState } from "react";
import { styles } from "../styles";

const ShiboPhoto = () => {
  //   const isMobile = window.innerWidth < 500; // Check if the screen size is smaller than 500px
  const isMobile = window.matchMedia("(max-width: 500px)");

  return (
    <div>
      <img
        src={isMobile ? "sb.jpg" : "sb.jpg"}
        alt="Image"
        // style={{ height: 350 }}
        style={{ width: 350, borderRadius: 80 }}
      />
    </div>
  );
};
export default ShiboPhoto;
