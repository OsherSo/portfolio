import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="About" className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hi, I'm Osher, a passionate full-stack web developer dedicated to
            creating elegant solutions with the latest technologies. I
            specialize in crafting user-centric experiences and scalable
            applications that make a difference.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
