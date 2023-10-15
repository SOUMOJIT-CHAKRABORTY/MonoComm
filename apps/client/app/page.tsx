import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen">
      <Navbar />
      <div className="flex flex-col justify-center h-screen items-center mx-auto bg-gradient-to-r from-green-300 to-purple-400">
        <div className="artboard phone-1 gap-6 border rounded-lg bg-white  flex flex-col justify-center items-center">
          <h1 className="text-2xl">Home</h1>
          <button className="btn btn-primary">One</button>
        </div>
      </div>
    </section>
  );
}
