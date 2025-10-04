"use client";
import Link from "next/link";
import { IconArticle, IconUser } from "@tabler/icons-react";

export default function AdminHeader() {
  const navLinks = [
    { icon: IconUser, name: "Users", href: "/admin/users" },
    { icon: IconArticle, name: "Problems", href: "/admin/problems" },
  ];

  return (
    <header className="bg-blue-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex h-16 items-center justify-start gap-6">
          <Link
            href="/"
            className="text-3xl font-bold text-white whitespace-nowrap shrink-0 border-r border-white pr-6 mr-2"
          >
            NCHUOJ
          </Link>

          <nav className="flex items-center gap-8 overflow-x-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-white text-lg font-semibold whitespace-nowrap hover:opacity-90"
                >
                  <Icon size={20} className="shrink-0" />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
