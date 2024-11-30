import Header from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import ToggleTheme from "@/components/ToggleTheme";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';

export default async function Home() {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <SideBar />
      </div>
      <main className="md:pl-72 min-h-screen">
          <div className="fixed bottom-6 right-6">
          <ToggleTheme />
        </div>
      </main>
    </div>
  );
}
