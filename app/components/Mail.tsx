import { Send } from "lucide-react";

interface MailButtonProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  top?: string;
  left?: string;
}

const MailButton = ({
  size = 48,
  color = "#5298C8",
  onClick,
  top = "66%",
  left = "51%",
}: MailButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed z-50 p-2 rounded-full bg-transparent hover:bg-transparent dark:transparent dark:hover:bg-transparent"
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
      }}
      aria-label="Mail"
    >
      <div className="transition-all duration-300 hover:scale-125">
        <Send size={size} color={color} />
      </div>
    </button>
  );
};

export default MailButton;
