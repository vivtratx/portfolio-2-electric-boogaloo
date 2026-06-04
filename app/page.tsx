import Image from "next/image";
import MainCard from "./components/maincard";
import { App } from "./components/wave";
import CircleUserButton from "./components/CircleUser";
import LinkButton from "./components/Link";
import BriefcaseButton from "./components/Briefcase";
import MailButton from "./components/Mail";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-white">
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white dark:bg-white">
        <div className="absolute inset-0 top-[50px] z-0">
          <App />
        </div>
        {/* Foreground */}
        <div className="relative z-10">
          <MainCard />
        </div>
        <CircleUserButton></CircleUserButton>
        <LinkButton></LinkButton>
        <BriefcaseButton></BriefcaseButton>
        <MailButton></MailButton>
      </main>
    </div>
  );
}
