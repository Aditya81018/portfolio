import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import { Button } from "./components/ui/button";
import UtilityCard from "./components/utility-card";
import RotatingText from "./components/rotating-texts";

function App() {
  return (
    <>
      <section
        id="intro"
        className="h-screen w-screen p-24 pt-8 flex flex-col justify-between"
      >
        <Navbar />
        <div>
          <div className="font-black text-2xl text-glow-15">
            I'm Aditya Jaiswal
          </div>
          <div className="text-6xl text-primary">
            <span className="text-glow-15 font-primary">I can make </span>
            <RotatingText
              className="inline-block  font-black bg-gradient-to-r bg-clip-text text-transparent"
              words={[
                {
                  text: "Apps",
                  color:
                    "drop-shadow-[0_0_10px_rgba(239,68,68,1)] from-red-500 via-rose-500 to-pink-500",
                },
                {
                  text: "Simulations",
                  color:
                    "drop-shadow-[0_0_10px_rgba(34,197,94,1)] from-green-500 via-emerald-500 to-teal-500",
                },
                {
                  text: "Robots",
                  color:
                    "drop-shadow-[0_0_10px_rgba(59,130,246,1)] from-teal-500 via-cyan-500 to-sky-500",
                },
                {
                  text: "Designs",
                  color:
                    "drop-shadow-[0_0_10px_rgba(249,115,22,1)] from-orange-500 via-amber-500 to-yellow-500",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <SkillsetSection />
      <ProjectsSection />
      <BlogsSection />
      <TimelineSection />
      <ContactsSection />
    </>
  );
}

function SkillsetSection() {
  return (
    <section
      id="skillset"
      className="h-screen w-screen px-24 py-8 flex flex-col"
    >
      <div className="text-4xl text-center uppercase font-black">Skillset</div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 flex items-center justify-center bg-yellow-500 rounded-full text-6xl">
          JS
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="h-screen w-screen px-24 py-8 flex justify-around items-center"
    >
      <div className="flex flex-col gap-4">
        <div className="text-4xl uppercase font-black ">Projects</div>
        <div className="w-[45ch] text-muted-foreground">
          My latest projects, showcasing some of my most interesting work, are
          definitely worth exploring.
        </div>
        <Link to="/projects">
          <Button>See more projects</Button>
        </Link>
      </div>
      <div className="overflow-y-scroll h-full flex flex-col p-4 gap-8">
        <UtilityCard
          title="Project 1"
          description="Project description! You love this project. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ut minima sunt aliquid! Dicta, quasi omnis."
          imageSrc="https://picsum.photos/3000/2000"
        />
        <UtilityCard
          title="Project 1"
          description="Project description! You love this project. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ut minima sunt aliquid! Dicta, quasi omnis."
          imageSrc="https://picsum.photos/300/200"
        />
        <UtilityCard
          title="Project 1"
          description="Project description! You love this project. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ut minima sunt aliquid! Dicta, quasi omnis."
          imageSrc="https://picsum.photos/300/200"
        />
      </div>
    </section>
  );
}

function BlogsSection() {
  return (
    <section
      id="blogs"
      className="h-screen w-screen px-24 py-8 flex justify-around items-center gap-32"
    >
      <div className="overflow-y-scroll h-full flex flex-col p-4 gap-8">
        <UtilityCard
          title="Blog 1"
          description="Project description! You love this project. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ut minima sunt aliquid! Dicta, quasi omnis."
          imageSrc="https://picsum.photos/3000/2000"
        />
        <UtilityCard
          title="Blog 2"
          description="Blog description! You love this blog. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ut minima sunt aliquid! Dicta, quasi omnis."
          imageSrc="https://picsum.photos/300/200"
        />
        <UtilityCard
          title="Blog 3"
          description="Blog description! You love this blog. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ut minima sunt aliquid! Dicta, quasi omnis."
          imageSrc="https://picsum.photos/300/200"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-4xl uppercase font-black ">Blogs</div>
        <div className="w-[45ch] text-muted-foreground">
          I enjoy documenting the interesting projects, challenges and
          experiments I work on, sharing insights along the way.
        </div>
        <Link to="/blogs">
          <Button>See more blogs</Button>
        </Link>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section
      id="timeline"
      className="h-screen w-screen px-24 py-8 flex flex-col"
    >
      <div className="text-4xl text-center uppercase font-black">Timeline</div>
      <div className="w-full h-full flex items-center justify-center">
        Timeline and GitHub Integration
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section
      id="contacts"
      className="h-screen w-screen p-24 pt-8 flex flex-col justify-between"
    >
      <div></div>
      <div className="flex flex-col items-end">
        <div className="font-black text-2xl text-muted-foreground">
          Open for <span className="text-primary">Freelancing</span>
        </div>
        <div className="font-black text-6xl text-right">
          Let’s build something <br /> great together.
        </div>
      </div>
    </section>
  );
}

export default App;
