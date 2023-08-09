export default function Award() {
  return (
    <section className={"py-12 bg-gray-100"}>
      <h1 className={"text-center text-black font-bold text-3xl"}>Award</h1>
      <ul className={"flex flex-col px-8 mt-10 items-center gap-8"}>
        <li
          className={
            "flex flex-row max-sm:flex-col bg-white p-8 rounded-2xl max-w-[1000px] w-full gap-12 sm:overflow-auto"
          }
        >
          <section className={"min-w-[180px]"}>
            <h3 className={"text-gray-500 "}>2021.11</h3>
          </section>

          <div className={"whitespace-pre-wrap"}>
            <h3 className={"text-lg font-medium"}>
              과기정통부 주관 2021 메타버스 기반 핀테크 해커톤 최우수상
            </h3>
            {`메타버스 크라우드 펀딩 서비스 개발 및 출품
- PM 및 메타버스 채팅 서버 연동 개발`}
          </div>
        </li>
        <li
          className={
            "flex flex-row max-sm:flex-col bg-white p-8 rounded-2xl max-w-[1000px] w-full gap-12 sm:overflow-auto"
          }
        >
          <section className={"min-w-[180px]"}>
            <h3 className={"text-gray-500 "}>2020.10</h3>
          </section>

          <div className={"whitespace-pre-wrap"}>
            <h3 className={"text-lg font-medium"}>
              2020 XR 그랜드 챌린지 한국가상증강현실산업협회장상
            </h3>
            {`- C#, Unity, VIVE 를 사용한 VR 콘텐츠 개발
- 사료주기, 장난감 사용 등 컨트롤러 연동 상호작용 개발
- 반려동물 행동 AI(FSM) 및 움직임 개발`}
          </div>
        </li>
      </ul>
    </section>
  );
}
