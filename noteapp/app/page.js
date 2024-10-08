import Image from "next/image";
import Application from "./Components/Application";
import Title from "./Components/Title";

export default function Home(props) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Application/>
    </div>
  );
}
