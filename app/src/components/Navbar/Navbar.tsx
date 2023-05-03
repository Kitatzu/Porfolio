import Link from "next/link";
import style from "../Navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.div}>
      <nav>
        <ul>
          <li>
            <Link href="#about-me"> Sobre Mi</Link>
          </li>
          <li>
            <Link href="#projects"> Proyectos </Link>
          </li>
          <li>
            <Link href="#skills"> Skills </Link>
          </li>
          <li>
            <Link href="#contact-me"> Contáctame </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
