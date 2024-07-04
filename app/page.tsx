import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-black drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-black text-lg">Simple Authentification</p>
        <div>
          <Button variant="default" size="lg">
            Sign IN
          </Button>
        </div>
      </div>
    </main>
  );
}
