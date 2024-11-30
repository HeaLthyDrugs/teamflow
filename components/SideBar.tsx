"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { SignedIn, UserButton } from "@clerk/nextjs";

export function SideBar() {
    const links = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Team",
            href: "/dashboard/team",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "/dashboard/settings",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Workflows",
            href: "/dashboard/workflows",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen} animate={false}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <Logo />
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SignedIn>
                            <UserButton
                                showName={true}
                                appearance={{
                                    elements: {
                                        avatarBox: "w-10 h-10 md:w-12 md:h-12 ",
                                        userButtonTrigger: "hover:opacity-80 transition-opacity",
                                        userButtonPopoverCard: "md:right-0"
                                    }
                                }}
                            />
                        </SignedIn>
                    </div>
                </SidebarBody>
            </Sidebar>
        </div>
    )
}





export const Logo = () => {
    return (
        <Link
            href="/"
            className="font-normal flex space-x-4 items-center text-sm text-black py-1 relative z-20"
        >
            <Image
                src="/assets/t.png"
                alt="Logo with name"
                width={55}
                height={32}
                className="hidden md:block rounded-xl"
            />
            <Image
                src="/assets/t.png"
                alt="Logo"
                width={40}
                height={32}
                className="md:hidden rounded-xl"
            />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-black dark:text-white whitespace-pre text-xl ml-12"
            >
                .teamflow
            </motion.span>
        </Link>
    );
};
