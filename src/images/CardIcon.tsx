type CardIconProps = {
  color?: React.CSSProperties["color"];
};

const CardIcon: React.FC<CardIconProps> = ({ color = "inherit" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="23"
    viewBox="0 0 29 23"
    fill="none"
  >
    <path
      d="M27.3914 0.5H1.39136C0.838232 0.5 0.391357 0.946875 0.391357 1.5V6.5H28.3914V1.5C28.3914 0.946875 27.9445 0.5 27.3914 0.5ZM0.391357 21.5C0.391357 22.0531 0.838232 22.5 1.39136 22.5H27.3914C27.9445 22.5 28.3914 22.0531 28.3914 21.5V9.25H0.391357V21.5ZM18.4851 15.75C18.4851 15.6125 18.5976 15.5 18.7351 15.5H23.8914C24.0289 15.5 24.1414 15.6125 24.1414 15.75V18C24.1414 18.1375 24.0289 18.25 23.8914 18.25H18.7351C18.5976 18.25 18.4851 18.1375 18.4851 18V15.75Z"
      fill={color === "action" ? "#FF643B" : "#A3A3A3"}
    />
  </svg>
);

export default CardIcon;
