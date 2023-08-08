import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Summary from "@/components/Summary";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className={"mt-[72px]"}>
      <Header />
      <Profile />
      <Summary />
      <Skill />
    </main>
  );
}
