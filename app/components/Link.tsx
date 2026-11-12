import { Link } from "lucide-react";

interface LinkButtonProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  top?: string;
  left?: string;
}

const LinkButton = ({
  size = 48,
  color = "#5298C8",
  onClick,
  top = "62%",
  left = "30.1%",
}: LinkButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed z-50 p-2 rounded-full bg-transparent hover:bg-transparent dark:transparent dark:hover:bg-transparent"
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
      }}
      aria-label="Link"
    >
      <div className="transition-all duration-300 hover:scale-125">
        <Link size={size} color={color} />
      </div>
    </button>
  );
};

export default LinkButton;
