import React from "react";
import AndroidIcon from "@mui/icons-material/Android";

const Button = () => {
  return (
    <div className="button">
      <a href="./public/app-release.apk" download="FocusLock.apk">
        <AndroidIcon />
        <h1> Download</h1>
      </a>
    </div>
  );
};

export default Button;
