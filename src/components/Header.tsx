export default function Header() {
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
              <a>Summary</a>
            </li>
            <li>
              <a>Career</a>
            </li>
            <li>
              <a>Skill</a>
            </li>
            <li>
              <a>Education</a>
            </li>
            <li>
              <a>Etc</a>
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
