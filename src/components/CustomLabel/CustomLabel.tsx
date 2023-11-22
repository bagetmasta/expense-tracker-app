import { Text } from "recharts";

interface CustomLabelProps {
  x: string | number;
  y: number | string;
  width: number | string;
  value: number | string;
  index: number;
  activeIndex: number;
}

export const RenderCustomizedLabel: React.FC<CustomLabelProps> = ({
  x,
  y,
  width,
  value,
  index,
  activeIndex,
}) => {
  const isActive = index === activeIndex;

  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(+value);

  return (
    <Text
      x={+x + +width / 2}
      y={y}
      fill={isActive ? "#8234F8" : "#A3A3A3"}
      textAnchor="middle"
      dy={-10}
    >
      {formattedValue}
    </Text>
  );
};
