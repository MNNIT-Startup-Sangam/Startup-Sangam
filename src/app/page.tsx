import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Herosection } from "@/components/Herosection";
import { TimelineDemo } from "@/components/Events";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
<Herosection/>
<div className=" mt-96">
<TimelineDemo/>
</div>
    </div>
  );
}
