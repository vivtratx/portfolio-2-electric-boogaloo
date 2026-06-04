import Image from "next/image";
import maincard from "./maincard.png";

function MainCard() {
  return <img src={maincard.src} alt="Image" height={600} width={900} />;
}

export default MainCard;
