type HomeIconProps = {
  color?: React.CSSProperties["color"];
};

const HomeIcon: React.FC<HomeIconProps> = ({ color = "inherit" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="25"
    viewBox="0 0 21 25"
    fill="none"
  >
    <path
      d="M1 9.25978L10.1957 1.75L19.3913 9.25978V21.0609C19.3913 21.6299 19.176 22.1757 18.7928 22.5781C18.4096 22.9805 17.8898 23.2065 17.3478 23.2065H3.04348C2.50151 23.2065 1.98175 22.9805 1.59852 22.5781C1.21529 22.1757 1 21.6299 1 21.0609V9.25978Z"
      fill={color === "active" ? "#FF643B" : "#A3A3A3"}
      stroke={color === "active" ? "#FF643B" : "#A3A3A3"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeIcon;
