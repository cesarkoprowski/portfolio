"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Home, FolderGit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const MySidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-4 top-1/2 -translate-y-1/2 z-50 h-[97vh] rounded-2xl p-1 transition-all duration-300",
        "bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg",
        isOpen ? "w-[250px]" : "w-[65px]"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="pr-[9px] my-4 flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "text-white cursor-pointer transition-all duration-300 hover:bg-transparent",
              isOpen && "bg-cover bg-center bg-no-repeat rounded-md w-27"
            )}
            style={{
              ...(isOpen && {
                backgroundImage: `url(./logo.png)`,
              }),
            }}
          >
            {!isOpen && (
              <Image
                src="./simple_logo.png"
                alt="Logo"
                className="w-6 h-6 object-contain"
                width={10}
                height={10}
                draggable={false}
              />
            )}
          </Button>
        </div>

        <nav className="flex flex-col gap-2 text-white font-semibold">
          <SidebarItem
            icon={<Home size={20} />}
            label="Home"
            href="/"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<FolderGit size={20} />}
            label="Projects"
            href="/config"
            isOpen={isOpen}
          />
        </nav>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isOpen: boolean;
}

const SidebarItem = ({ icon, label, href, isOpen }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center rounded-lg text-base transition-colors hover:bg-white/4",
        "h-14"
      )}
    >
      <div className="w-[54px] flex justify-center items-center">{icon}</div>

      <span
        className={cn(
          "overflow-hidden whitespace-nowrap transition-all duration-300",
          isOpen ? "max-w-full opacity-100" : "ml-0 max-w-0 opacity-0"
        )}
      >
        {label}
      </span>
    </Link>
  );
};

export default MySidebar;
