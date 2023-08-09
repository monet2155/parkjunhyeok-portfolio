import CareerList from "@/assets/career.json";

type CareerType = {
  id: number;
  company: string;
  startDate: string | null;
  endDate: string | null;
  position: string;
  projectList: {
    title: string;
    startDate: string | null;
    endDate: string | null;
    summary: string;
    performance: string | null;
    usingTech: string[] | null;
    url: string | null;
  }[];
};

function CareerCard(career: CareerType) {
  return (
    <li
      className={
        "flex flex-row bg-white p-12 rounded-2xl max-w-[1000px] w-full gap-12 sm:overflow-auto"
      }
    >
      <section className={"min-w-[180px]"}>
        <h2 className={"text-2xl font-bold "}>{career.company}</h2>
        <h3 className={"whitespace-pre-wrap"}>{career.position}</h3>
        <h3 className={"text-gray-500 "}>
          {career.startDate} ~ {career.endDate ?? "현재 재직 중"}
        </h3>
      </section>
      <ul className={"flex flex-col gap-8 w-full"}>
        {career.projectList.map((ele, index) => (
          <li
            key={ele.title}
            className={
              index == career.projectList.length - 1 ? "" : "pb-8 border-b-2"
            }
          >
            <h3 className={"text-lg font-medium"}>{ele.title}</h3>
            <h4 className={"text-gray-500 "}>
              {ele.startDate} ~ {ele.endDate ?? "현재"}
            </h4>
            <div className={"mt-2 whitespace-pre-wrap"}>{ele.summary}</div>
            {ele.performance && <div>- 성과 : {ele.performance}</div>}
            {ele.usingTech && (
              <div>- 사용 기술 : {ele.usingTech.join(", ")}</div>
            )}
            {ele.url && (
              <div>
                - 링크 :{" "}
                <a href={ele.url} className={"underline"}>
                  {ele.url}
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Career() {
  return (
    <section className={"py-12 bg-gray-100"} id={"career-section"}>
      <h1 className={"text-center text-black font-bold text-3xl"}>Career</h1>
      <ul className={"flex flex-col px-8 mt-10 items-center gap-8"}>
        {CareerList.data.map((ele) => (
          <CareerCard key={ele.id} {...ele} />
        ))}
      </ul>
    </section>
  );
}
