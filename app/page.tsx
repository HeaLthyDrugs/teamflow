import { SideBar } from "@/components/SideBar";
import ToggleTheme from "@/components/ToggleTheme";
import { ArrowRight, LayoutDashboard, Sparkles } from "lucide-react";
import Link from "next/link";
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto p-8">
            {/* Welcome Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 text-center">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold mb-4 dark:text-white">
                Welcome to .teamflow
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get started by accessing your personalized dashboard to manage workflows and tasks efficiently.
              </p>
              <Link 
                href="/dashboard" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Feature Cards */}
            {/* <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard 
                title="Manage Workflows"
                description="Create and monitor automated workflows to streamline your processes."
                href="/dashboard/workflows"
              />
              <FeatureCard 
                title="Track Tasks"
                description="Keep track of all your tasks and their progress in one place."
                href="/dashboard/tasks"
              />
              <FeatureCard 
                title="Team Collaboration"
                description="Work together with your team members efficiently."
                href="/dashboard/team"
              />
            </div> */}
          </div>

          <div className="fixed bottom-6 right-6">
            <ToggleTheme />
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ title, description, href }: { 
  title: string; 
  description: string; 
  href: string; 
}) {
  return (
    <Link href={href}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <h3 className="text-lg font-semibold mb-2 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
        <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </Link>
  );
}
