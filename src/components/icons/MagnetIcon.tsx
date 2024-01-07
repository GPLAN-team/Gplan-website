import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

function MagnetIcon(props : {color: String}) {
  return (
    <SvgIcon sx={{ color: `${props.color}`}}>
      {/* credit: plus icon from https://heroicons.com/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        color="black"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 15L2 11L8.75 4.23001C10.2338 2.90134 12.1702 2.19149 14.1612 2.24637C16.1522 2.30124 18.0466 3.11666 19.455 4.52505C20.8633 5.93344 21.6788 7.82779 21.7336 9.8188C21.7885 11.8098 21.0787 13.7462 19.75 15.23L13 22L9 18L15.39 11.64C15.7052 11.2281 15.8601 10.7157 15.8258 10.1981C15.7916 9.68058 15.5705 9.19308 15.2037 8.8263C14.8369 8.45953 14.3494 8.23845 13.8319 8.20419C13.3143 8.16992 12.8019 8.3248 12.39 8.64001L6 15Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8L9 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15L16 19" />
      </svg>
    </SvgIcon>
  );
}

export default MagnetIcon;
