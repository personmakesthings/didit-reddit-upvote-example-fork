import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LoginButton } from "@/components/LoginButton";
import BackBtn from "@/components/BackBtn";

export default async function PleaseLogin() {
  const session = await auth();

  if (!session) {
    return (
      <div className="max-w-screen-lg mx-auto p-4 mt-10">
        <p>You must login to vote on posts <LoginButton /></p>
        {/* <BackBtn /> */}
      </div>
    )
  } else {
    redirect("/")
  }
}
