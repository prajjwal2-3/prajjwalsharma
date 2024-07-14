import "aos/dist/aos.css";
import AOS from 'aos'
import Card from "./components/Card";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { data } from "@/constants/data";
export default function Home() {
  return (
    <main className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
       <div data-aos="fade-down" data-aos-duration="400">
        <Card name={data.name} title={data.title} social={data.social} />
      </div>

      <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">
        <About title={data.about.title} description={data.about.description} />
      </div>

      <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">
        <Skills skills={data.skills} />
      </div>

      <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">
        <Experience
          title={data.experience.title}
          companies={data.experience.companies}
        />
      </div>

      <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">
        <Projects projects={data.projects} />
      </div>
      <Footer github={data.social.github} />
    </main>
  );
}
