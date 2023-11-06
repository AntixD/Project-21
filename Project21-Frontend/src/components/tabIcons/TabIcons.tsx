import React from "react";
import Svg, { Circle, Ellipse, Path } from "react-native-svg";

type IconType = "Home" | "Map" | "Search" | "SavedArticle" | "ProfileModal";

interface TabIconProps {
  type: IconType;
  isActive: boolean;
}

const TabIcons: React.FC<TabIconProps> = ({ type, isActive }) => {
  switch (type) {
    case "Home":
      return isActive ? (
        <Svg width={24} height={24} fill="none">
          <Path
            fill="#003665"
            d="M16.076 2h3.386A2.549 2.549 0 0 1 22 4.56v3.415a2.549 2.549 0 0 1-2.538 2.56h-3.386a2.549 2.549 0 0 1-2.539-2.56V4.56A2.549 2.549 0 0 1 16.076 2Z"
            opacity={0.4}
          />
          <Path
            fill="#003665"
            fillRule="evenodd"
            d="M4.539 2h3.385a2.549 2.549 0 0 1 2.539 2.56v3.415a2.549 2.549 0 0 1-2.539 2.56H4.54A2.549 2.549 0 0 1 2 7.974V4.56A2.549 2.549 0 0 1 4.539 2Zm0 11.466h3.385a2.549 2.549 0 0 1 2.539 2.56v3.414A2.55 2.55 0 0 1 7.924 22H4.54A2.55 2.55 0 0 1 2 19.44v-3.415a2.549 2.549 0 0 1 2.539-2.56Zm14.923 0h-3.386a2.549 2.549 0 0 0-2.539 2.56v3.414A2.55 2.55 0 0 0 16.076 22h3.386A2.55 2.55 0 0 0 22 19.44v-3.415a2.549 2.549 0 0 0-2.538-2.56Z"
            clipRule="evenodd"
          />
        </Svg>
      ) : (
        <Svg width={24} height={24} fill="none">
          <Path
            stroke="#969696"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 6.5C3 3.875 3.028 3 6.5 3s3.5.875 3.5 3.5.011 3.5-3.5 3.5S3 9.125 3 6.5ZM14 6.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5S14 9.125 14 6.5ZM3 17.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5S3 20.125 3 17.5ZM14 17.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5-3.5-.875-3.5-3.5Z"
            clipRule="evenodd"
          />
        </Svg>
      );

    case "Map":
      return isActive ? (
        <Svg width={24} height={24} fill="none">
          <Path
            fill="#003665"
            d="M7.63 3.57c.18-.098.37.053.37.257v13.556c0 .223-.152.412-.35.516a1.394 1.394 0 0 0-.02.011l-2.35 1.34c-1.64.94-2.99.16-2.99-1.74V7.78c0-.63.45-1.41 1.01-1.73l4.33-2.48ZM14.722 6.102A.5.5 0 0 1 15 6.55v13.153a.5.5 0 0 1-.717.45l-4.25-2.047a.5.5 0 0 1-.283-.45V4.446a.5.5 0 0 1 .722-.448l4.25 2.104ZM22 6.49v9.73c0 .63-.45 1.41-1.01 1.73l-3.491 2a.5.5 0 0 1-.749-.433V6.33a.5.5 0 0 1 .252-.434L19.01 4.75C20.65 3.81 22 4.59 22 6.49Z"
          />
        </Svg>
      ) : (
        <Svg width={24} height={24} fill="none">
          <Path
            stroke="#969696"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.29 7.78v9.73c0 1.9 1.35 2.68 2.99 1.74l2.35-1.34c.51-.29 1.36-.32 1.89-.05l5.25 2.63c.53.26 1.38.24 1.89-.05l4.33-2.48c.55-.32 1.01-1.1 1.01-1.74V6.49c0-1.9-1.35-2.68-2.99-1.74l-2.35 1.34c-.51.29-1.36.32-1.89.05L9.52 3.52c-.53-.26-1.38-.24-1.89.05L3.3 6.05c-.56.32-1.01 1.1-1.01 1.73ZM8.56 4v13M15.73 6.62V20"
          />
        </Svg>
      );
    case "SavedArticle":
      return isActive ? (
        <Svg width={24} height={24} fill="none">
          <Path
            fill="#003665"
            d="M11.991 18.622 5.5 21.864a1.02 1.02 0 0 1-1.376-.4A1.09 1.09 0 0 1 4 20.967v-7.258c0 .72.406 1.164 1.473 1.661l6.518 3.252Z"
            opacity={0.4}
          />
          <Path
            fill="#003665"
            fillRule="evenodd"
            d="M8.895 2h6.175c2.707 0 4.904 1.066 4.93 3.793v15.174c-.001.17-.044.338-.123.488a1.008 1.008 0 0 1-1.402.409l-6.484-3.242-6.518-3.252C4.406 14.873 4 14.428 4 13.71V5.793C4 3.066 6.196 2 8.895 2Zm-.67 7.622h7.524a.788.788 0 0 0 .785-.79.788.788 0 0 0-.785-.791H8.225a.788.788 0 0 0-.785.79c0 .437.351.791.785.791Z"
            clipRule="evenodd"
          />
        </Svg>
      ) : (
        <Svg width={25} height={24} fill="none">
          <Path
            stroke="#969696"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.239 6.154c0-2.751-1.88-3.854-4.589-3.854H9.291C6.667 2.3 4.7 3.328 4.7 5.97v14.724a.95.95 0 0 0 1.413.828l6.382-3.58 6.327 3.574a.95.95 0 0 0 1.417-.827V6.154Z"
            clipRule="evenodd"
          />
          <Path
            stroke="#969696"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.771 9.028h7.318"
          />
        </Svg>
      );
    case "Search":
      return isActive ? (
        <Svg width={24} height={24} fill="none">
          <Ellipse
            cx={10.599}
            cy={10.653}
            fill="#003665"
            rx={8.599}
            ry={8.653}
          />
          <Path
            fill="#003665"
            d="M20.675 21.955a1.321 1.321 0 0 1-.89-.384l-2.036-2.38a1.088 1.088 0 0 1-.08-1.522.975.975 0 0 1 1.387 0l2.561 2.05c.37.377.483.937.29 1.43a1.335 1.335 0 0 1-1.179.851l-.053-.045Z"
            opacity={0.4}
          />
        </Svg>
      ) : (
        <Svg width={24} height={24} fill="none">
          <Circle
            cx={11.767}
            cy={11.767}
            r={8.989}
            stroke="#969696"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
          <Path
            stroke="#969696"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.018 18.485 21.542 22"
          />
        </Svg>
      );
    case "ProfileModal":
      return isActive ? (
        <Svg width={24} height={24} fill="none">
          <Path
            fill="#003665"
            d="M11.997 15.175c-4.313 0-7.997.68-7.997 3.4C4 21.295 7.66 22 11.997 22c4.313 0 7.997-.68 7.997-3.4 0-2.721-3.66-3.425-7.997-3.425Z"
          />
          <Path
            fill="#003665"
            d="M11.997 12.584a5.273 5.273 0 0 0 5.292-5.292A5.273 5.273 0 0 0 11.997 2a5.274 5.274 0 0 0-5.292 5.292 5.274 5.274 0 0 0 5.292 5.292Z"
            opacity={0.4}
          />
        </Svg>
      ) : (
        <Svg width={24} height={24} fill="none">
          <Path
            stroke="#969696"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948Z"
            clipRule="evenodd"
          />
          <Path
            stroke="#969696"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.429}
            d="M11.985 12.006A4.596 4.596 0 1 0 7.389 7.41a4.58 4.58 0 0 0 4.563 4.596h.033Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    default:
      return null;
  }
};

export default TabIcons;
