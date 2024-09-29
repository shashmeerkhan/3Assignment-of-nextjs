import Link from "next/link";
import pic1 from "../../pictures/pic1.png"
import Image from "next/image";
export default function Header() {
  return (
   
        <div>
            <header>
            <div className="logo"><Image src={pic1} alt="logo" width={50} height={40}
            /> </div>
     <div className="list">
     <ul>
      <li id="nam">SHAHMEER KHAN</li>
        <Link href={"/"}>
        <li>Home</li></Link>
        <Link href={"/about-us"}><li>About-us</li></Link>
       <Link href={"/contact-us"}> <li>Contact-us</li></Link>
        <Link href={"/cousres"}> <li>Courses</li></Link>
        
      </ul>
    
     </div></header>
        </div>
  );
}
