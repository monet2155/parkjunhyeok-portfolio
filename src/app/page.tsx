import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <main className={"mt-[72px]"}>
      <Header />
      <Profile />
      <Summary />
    </main>
  );
}
