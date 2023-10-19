import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";

import { options } from "@/app/api/auth/[...nextauth]/options";
import HeroSection from "@/app/components/HeroSection/HeroSection";

export default async function Home() {
  const session = await getServerSession(options);
  if (!session?.user) {
    console.log(
      "No active Server Session : + ",
      JSON.stringify(session, null, 2)
    );
    redirect(`/signin?callbackUrl=/home`);
  }

  console.log("Home Page Server Session:", JSON.stringify(session, null, 2));

  return (
    <main className="flex bg-[#121212] min-w-screen mx-auto flex-col min-h-screen justify-items-center items-center gap-10">
      <HeroSection />
    </main>
  );
}
