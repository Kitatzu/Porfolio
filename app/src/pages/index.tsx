import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import style from "./index.module.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="about-me" className={style.section1}>
        Seccion 1
      </section>
      <section id="projects" className={style.section2}>
        Seccion 2
      </section>
      <section id="skills" className={style.section3}>
        Seccion 3
      </section>
      <section id="contact-me" className={style.section4}>
        Seccion 4
      </section>
      <Footer />
    </main>
  );
}
