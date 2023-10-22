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
    <div className="flex text-foreground bg-background min-w-screen mx-auto flex-col min-h-screen gap-10">
      <HeroSection />
    </div>
  );
}
