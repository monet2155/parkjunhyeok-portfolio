import SkillData from "@/assets/skill.json";

function SkillItem({
  title,
  itemList,
}: {
  title: string;
  itemList: { name: string; isImportant: boolean }[];
}) {
  return (
    <li
      className={
        "bg-white border p-6 rounded-2xl shadow-lg mb-8 break-inside-avoid"
      }
    >
      <div className={"flex flex-col text-black gap-4"}>
        <div className={"text-lg font-bold"}>{title}</div>
        <ul className={"w-full flex flex-col gap-2"}>
          {itemList.map((ele, index) => (
            <li
              key={ele.name + index}
              className={ele.isImportant ? "text-point font-bold" : ""}
            >
              {" "}
              • {ele.name}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Skill() {
  return (
    <section className={"py-12"}>
      <h1 className={"text-center font-bold text-3xl "}>Skill</h1>
      <section className={" mt-8 mx-[5%] xl:mx-[10%] 2xl:mx-[15%]"}>
        <ul className={"gap-8 masonry lg:columns-3 md:columns-2 columns-1 "}>
          {SkillData.data.map((ele) => (
            <SkillItem
              key={ele.title}
              title={ele.title}
              itemList={ele.itemList}
            />
          ))}
        </ul>
      </section>
    </section>
  );
}
