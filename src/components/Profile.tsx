import Image from "next/image";
import ProfileImagePng from "@/assets/image_profile.png";

function ProfileItem({ title, value }: { title: string; value: string }) {
  return (
    <tr>
      <td className={"p-6 font-bold"}>{title}</td>
      <td>{value}</td>
    </tr>
  );
}

export default function Profile() {
  return (
    <section className={"flex flex-row items-center justify-evenly pt-10"}>
      <Image
        src={ProfileImagePng}
        alt={"profile image"}
        className={"w-[30%] rounded-full"}
      />
      <section>
        <table>
          <tbody>
            <ProfileItem title={"이름"} value={"박준혁"} />
            <ProfileItem title={"생년월일"} value={"1998.12.08"} />
            <ProfileItem title={"연락처"} value={"0502-1902-7760"} />
            <ProfileItem title={"이메일"} value={"monet9812@gmail.com"} />
          </tbody>
        </table>
      </section>
    </section>
  );
}
