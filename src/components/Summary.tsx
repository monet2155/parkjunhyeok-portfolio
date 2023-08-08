function SummaryItem({
  title,
  itemList,
}: {
  title: string;
  itemList: string[];
}) {
  return (
    <li
      className={
        "bg-white w-[400px] text-black p-6 rounded-2xl flex flex-col items-center gap-4 shadow-lg"
      }
    >
      <div className={"font-bold text-lg text-point"}>{title}</div>
      <ul className={"w-full flex flex-col gap-2"}>
        {itemList.map((ele) => (
          <li key={ele}> • {ele}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Summary() {
  return (
    <section className={"bg-point text-white flex flex-col gap-4 py-12 px-4"}>
      <div className={"text-center font-medium text-lg"}>
        TypeScript, Next.js, React 기반의 3년차 개발자 박준혁입니다.
      </div>
      <div className={"text-center font-medium text-lg"}>
        빠른 이해력과 유연한 사고로 복잡한 문제를 해결하며, 새로운 업무에 빠르게
        적응합니다.
      </div>
      <div className={"w-32 bg-white h-2 mx-auto my-4"} />
      <ul className={"flex flex-wrap justify-center gap-4"}>
        <SummaryItem
          title={"웹/앱 서비스 설계, 개발, 운영 경험"}
          itemList={[
            "Next.js, React.js 웹 서비스 개발 및 운영",
            "Flutter 앱 개발",
            "React Native 앱 개발",
            "Android 앱 개발",
          ]}
        />
        <SummaryItem
          title={"비즈니스적 문제 해결에 대한 깊은 관심"}
          itemList={[
            "스타트업 창업 경험",
            "다양한 PoC 및 초기 프로젝트 참여",
            "사이드프로젝트 진행",
          ]}
        />
        <SummaryItem
          title={"서비스 개발에 대한 넓은 이해도"}
          itemList={[
            "Unity 활용 디지털 트윈 프로젝트",
            "Python 웹 크롤링",
            "외부 SDK 활용 로봇 동작 제어 앱",
            ".NET 프로젝트",
            "Socket, Bluetooth, RFID 등 프로젝트 경험",
          ]}
        />
      </ul>
    </section>
  );
}
