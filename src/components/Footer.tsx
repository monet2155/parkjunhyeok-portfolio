import GithubLogoPng from "@/assets/github-mark-white.png";
import TistoryLogoPng from "@/assets/tistory-logo.png";
import LinkedInLogoPng from "@/assets/linkedin-logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={"p-12 bg-gray-700 flex flex-col items-center gap-6"}>
      <div className={"flex flex-row gap-6"}>
        <a href={"https://github.com/monet2155"} className={"w-10 h-10"}>
          <Image src={GithubLogoPng} alt={"github logo"} />
        </a>
        <a href={"https://developnerror.tistory.com/"} className={"w-10 h-10"}>
          <Image src={TistoryLogoPng} alt={"tistory logo"} />
        </a>
        <a
          href={"https://www.linkedin.com/in/junhyeok-park-aa8934259/"}
          className={"w-10 h-10"}
        >
          <Image src={LinkedInLogoPng} alt={"linkedin logo"} />
        </a>
      </div>
      <span className={"text-white text-center"}>
        © 2023. Park Jun Hyeok. All rights reserved.
      </span>
    </footer>
  );
}
