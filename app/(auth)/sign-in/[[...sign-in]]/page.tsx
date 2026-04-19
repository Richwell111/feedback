"use client";
import { SignIn } from "@clerk/nextjs";
import { dark, neobrutalism } from '@clerk/ui/themes'
import { useTheme } from "next-themes";

export default function Page() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex min-h-screen justify-center">
      <SignIn
        appearance={{
          theme: theme === "light" ? dark : undefined,
        }}
      />
    </div>
  );
}