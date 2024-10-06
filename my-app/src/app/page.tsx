// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
        <Link href="/home">Home</Link> 
        
        </li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/signup-login">Sign Up/Login</Link></li>
      </ul>
      
    </div>
  );
}
