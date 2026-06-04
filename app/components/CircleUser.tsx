import { CircleUser } from "lucide-react";

interface CircleUserProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  top?: string;
  left?: string;
}

const CircleUserButton = ({
  size = 48,
  color = "#5298C8",
  onClick,
  top = "66%",
  left = "27%",
}: CircleUserProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed z-50 p-2 rounded-full bg-transparent hover:bg-transparent dark:transparent dark:hover:bg-transparent"
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
      }}
      aria-label="User menu"
    >
      <div className="transition-all duration-300 hover:scale-125">
        <CircleUser size={size} color={color} />
      </div>
    </button>
  );
};

export default CircleUserButton;
