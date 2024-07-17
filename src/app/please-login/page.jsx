import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LoginButton } from "@/components/LoginButton";

export default async function PleaseLogin() {
  const session = await auth();

  if (!session) {
    return (
      <div className="max-w-screen-lg mx-auto p-4 mt-10">
        You must login to vote on posts <LoginButton />
      </div>
    )
  } else {
    redirect("/")
  }
}
