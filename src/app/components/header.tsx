import Link from "next/link";
import pic1 from "../../pictures/pic1.png";
import Image from "next/image";
export default function Header() {
  return (
    <div>
      <header>
        <nav>
            <div className="logo"><Image src={pic1} alt="logo" width={50} height={40}/> </div>
           
            
            <Link href={"./"}> <button className="menuLinks" id="menuLinks">Portfolio</button></Link>
            <Link href={"./about-us"}> <button className="menuLinks">About</button></Link>
            <Link href={"./contact-us"}> <button className="menuLinks">Contact</button></Link>
            <div className="menu-icon" id="menu-icon">
                &#9776;  
            </div>
        </nav>
    </header>
    <div> 
      </div>
    </div>
  );
}
