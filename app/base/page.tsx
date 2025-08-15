import Image from "next/image";

export const metadata = {
  title: "Cesk.",
};

export default function Base() {
  return (
    <div className="h-screen bg-cover bg-center flex justify-center items-center" style={{backgroundImage: "url('/portfolio_teste/gradient_blue_bg.png')"}}>
      <Image src="/portfolio_teste/logo.png" alt="Logo" height={200} width={200} />
    </div>
  );
}
