import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata = {
  title: "Cesk.",
};

export default function Base() {
  return (
    <div className="h-screen bg-[url('/gradient_blue_bg.png')] bg-cover bg-center flex justify-center items-center">
      <Image src="/logo.png" alt="Logo" height={200} width={200} />
    </div>
  );
}
