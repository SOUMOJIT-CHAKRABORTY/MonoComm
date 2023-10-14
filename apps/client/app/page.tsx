import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto h-screen bg-gradient-to-r from-green-300 to-purple-400">
      <div className="artboard phone-1 gap-6 border rounded-lg bg-white  flex flex-col justify-center items-center">
        <h1 className="text-2xl">Home</h1>
        <button className="btn btn-primary">One</button>
      </div>
    </div>
  );
}
