import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Headers from "./../Component/Utilities/HeadersU-A";
import PieChartPage from "./PieChartPage";
import MyBarChart from "./../Component/CHarts/MyBarChart";
const BarChartPage = ({ open }) => {
  const drawerWidth = 240;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box
      width={`${
        open
          ? screenWidth > 600
            ? `calc(100% - ${drawerWidth}px)`
            : "100%"
          : "100%"
      }`}
      component={"main"}
      sx={{
        display: "block",
        ml: screenWidth < 600 ? "auto" : open ? `${drawerWidth}px` : 0,
        mt: "30px",
      }}
    >
      <Headers
        screenWidth={screenWidth}
        open={open}
        head="Bar Chart"
        text="The minimum wage in Germany, France and Spain (EUR/month)"
        isbtn={false}
      />
      <MyBarChart open={open} screenWidth={screenWidth} />
    </Box>
  );
};

export default BarChartPage;
