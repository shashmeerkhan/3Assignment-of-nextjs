import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import pic1 from "../pictures/pic1.png"

export default function Home() {
  return (
    <>
      <div className="parent">
      <div className="myname">
        <h1>Hi, <br />I am <span>Shahmeer Khan</span></h1>
      </div>
      <div className="mypic">
        {/* Use Next.js Image component */}
        <Image
          src={pic1} // Path to the image in the public folder
          alt="Shahmeer Khan"
          width={600} // Set the desired width
          height={400} // Set the desired height
        />
      </div>
      </div>
    </>
  );
}
