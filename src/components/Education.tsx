import CareerList from "@/assets/career.json";

export default function Education() {
  return (
    <section className={"py-12 bg-white "}>
      <h1 className={"text-center text-black font-bold text-3xl"}>Education</h1>
      <ul className={"flex flex-col px-8 mt-10 items-center gap-8"}>
        <li
          className={
            "flex flex-row bg-white max-w-[1000px] w-full gap-12 sm:overflow-auto border p-10 rounded-2xl shadow-lg"
          }
        >
          <section className={"min-w-[200px]"}>
            <h2 className={"text-2xl font-bold "}>{"서울디지털대학교"}</h2>
            <h3 className={"whitespace-pre-wrap"}>{"소프트웨어공학과 학사"}</h3>
            <h3 className={"text-gray-500 "}>2023.03 ~ 현재 재학 중</h3>
          </section>
          <div className={"whitespace-pre-wrap"}>
            {`- .NET프로그래밍, Unity, OpenGL 과목 이수\n- 인공지능 과목 이수`}
          </div>
        </li>
        <li
          className={
            "flex flex-row bg-white max-w-[1000px] w-full gap-12 sm:overflow-auto border p-10 rounded-2xl shadow-lg"
          }
        >
          <section className={"min-w-[200px]"}>
            <h2 className={"text-2xl font-bold "}>{"명지전문대학"}</h2>
            <h3 className={"whitespace-pre-wrap"}>
              {"소프트웨어콘텐츠과 전문학사"}
            </h3>
            <h3 className={"text-gray-500 "}>2017.03 ~ 2021.02</h3>
          </section>
          <div className={"whitespace-pre-wrap"}>
            {`졸업 학점 4.0/4.5\n- Unity, Unreal 활용 실감형 콘텐츠, 게임개발 과목 이수
- Android 활용 앱 개발 과목 이수
- JSP, HTML 활용 웹, 웹 서버 개발 과목 이수`}
          </div>
        </li>
      </ul>
    </section>
  );
}
