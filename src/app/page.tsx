import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Summary from "@/components/Summary";
import Skill from "@/components/Skill";
import Career from "@/components/Career";
import Education from "@/components/Education";
import Award from "@/components/Award";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <main className={"mt-[72px]"}>
      <Header />
      <Profile />
      <Summary />
      <Skill />
      <Career />
      <Education />
      <Award />
      <Footer />
      <FloatingButton />
    </main>
  );
}
