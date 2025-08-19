import Image from "next/image";

export const metadata = {
  title: "Cesk.",
};

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url(./gradient_bg.png)" }}
    >
      <Image src="./logo.png" alt="Logo" height={200} width={200} />
    </div>
  );
}
