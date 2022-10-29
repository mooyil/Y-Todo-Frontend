import { LightMode, Nightlight } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export default function DarkLightMode() {

    

  const [darkmode, setDarkmode] = React.useState(true);
  return (
    <>
      {darkmode ? (
        <IconButton sx={{ color: "white" }}>
          <LightMode/>
        </IconButton>
      ) : (
        <IconButton sx={{ color: "white" }}>
          <Nightlight />
        </IconButton>
      )}
    </>
  );
}
