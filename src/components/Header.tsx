"use client";

export default function Header() {
  const onClickProfile = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onClickSkill = () => {
    const content = document.getElementById("skill-section");
    if (!content) return;
    const scrollToY = content.offsetTop - 72;

    window.scrollTo({ top: scrollToY, behavior: "smooth" });
  };

  const onClickCareer = () => {
    const content = document.getElementById("career-section");
    if (!content) return;
    const scrollToY = content.offsetTop - 72;

    window.scrollTo({ top: scrollToY, behavior: "smooth" });
  };

  const onClickEducation = () => {
    const content = document.getElementById("education-section");
    if (!content) return;
    const scrollToY = content.offsetTop - 72;

    window.scrollTo({ top: scrollToY, behavior: "smooth" });
  };

  return (
    <header
      className={
        "flex flex-row items-center justify-between fixed top-0 left-0 right-0 py-4 px-6 bg-white"
      }
    >
      <a className={"font-bold text-xl"}>Park Jun Hyeok&apos;s Portfolio</a>
      <div className={"flex flex-row items-center gap-4"}>
        <nav className={"max-md:hidden"}>
          <ul className={"flex flex-row items-center gap-4"}>
            <li>
              <button onClick={onClickProfile}>Profile</button>
            </li>
            <li>
              <button onClick={onClickSkill}>Skill</button>
            </li>
            <li>
              <button onClick={onClickCareer}>Career</button>
            </li>
            <li>
              <button onClick={onClickEducation}>Etc</button>
            </li>
          </ul>
        </nav>
        <button className={"px-6 py-2 bg-point text-white rounded-2xl"}>
          Contact
        </button>
      </div>
    </header>
  );
}
