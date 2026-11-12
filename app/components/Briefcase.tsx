import { Briefcase } from "lucide-react";

interface BriefcaseButtonProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  top?: string;
  left?: string;
}

const BriefcaseButton = ({
  size = 48,
  color = "#5298C8",
  onClick,
  top = "62%",
  left = "38.9%",
}: BriefcaseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed z-50 p-2 rounded-full bg-transparent hover:bg-transparent dark:transparent dark:hover:bg-transparent"
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
      }}
      aria-label="Briefcase"
    >
      <div className="transition-all duration-300 hover:scale-125">
        <Briefcase size={size} color={color} />
      </div>
    </button>
  );
};

export default BriefcaseButton;
