import { useEffect, useState } from "react";


export default function Home(params) {
    
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setVisible(true); 
        }, 11000);

        return () => clearTimeout(timer);
    }, []);

return (
    <>
      <div className="grid place-items-center w-screen h-screen overflow-auto">

        <header className="w-full bg-[#424242] py-5 sticky top-0 z-10 grid place-items-center">
          <div className="w-[72rem] flex justify-between items-center">
            <a href="/" className="text-3xl font-bold text-[#48CFCB]">VASAWAT</a>
            <div className="flex gap-10">
              <p>Home</p>
              <a href="#section2">About Me</a>
              <a href="#section3">Skills</a>
              <p>Projects</p>
              <p>Contact</p>
            </div>
          </div>
        </header>

        <section id="section1" className="grid grid-cols-2 gap-4 w-[72rem] mt-20">
          <div className="flex items-center">
            <div className="flex flex-col gap-4">
              <p className="text-[#229799]">HELLO</p>
              <p className="text-6xl">I'm <span className="text-[#48CFCB]">vasawat</span></p>
              <p className="text-6xl text-[#48CFCB]">Prapachaimongkol</p>
              <p className="text-xl">A Web Developer</p>
            </div>
            
          </div>
          <div>
              <img
                src="/images/section1.png"
                width={550}
                height={550}
                alt="vasawat"
              />
          </div>
        </section>

        <section id="section2" className="max-w-6xl mt-24">
          <p className="text-5xl text-center font-bold mb-10">About Me</p>
          <p className="py-5 opacity-80 text-xl">"I’m a recent graduate from Mae Fah Luang University with a passion for developert. I enjoy creating websites. I work well with others, communicate clearly, and always try to learn new things. I’m hard-working, good at solving problems, and excited to contribute my skills to a team.I’m currently looking for a position as a Junior Frontend Developer, Junior Backend Developer, or Junior Full-Stack Developer."</p>
          <div className="flex flex-col gap-4 text-xl">
            <p>Name: <span className="opacity-80">Vasawat Prapachaimongkol</span></p>
            <p>Date of Birth: <span className="opacity-80">19/05/2001</span></p>
            <p>Address: <span className="opacity-80">Bangkok</span></p>
            <p>Email: <span className="opacity-80">vasawat.ppcmk@gmail.com</span></p>
            <p>Phone: <span className="opacity-80">083-232-5607</span></p>
          </div>
          <div className="w-1/4 my-10 mx-auto" >
            <a href="/pdf/vasawat_resume.pdf" download="vasawat_resume.pdf">
              <div className="text-xl text-center font-bold p-5 text-[#48CFCB] rounded-lg bg-[#424242] hover:opacity-60 transition duration-500 ">
                Dowload My Resume
              </div>
            </a>
          </div>
          
          
        </section>

        <section id="section3" className="w-6xl mt-24">
          <p className="text-5xl text-center font-bold">My Skills</p>
          <div className="grid grid-cols-2 gap-4 my-20">
            <ul className="flex flex-col gap-4 text-xl text-center opacity-80 font-bold ">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Git</li>
                <li>GitHub</li>
            </ul>
            <ul className="flex flex-col gap-4 text-xl text-center opacity-80 font-bold ">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PHP</li>
                <li>Laravel</li>
            </ul>
          </div>
          
          <div className="overflow-hidden relative my-28">

            <div className="marquee absolute top-0 left-0" style={{ paddingLeft: "5rem" }}>
                <div className="flex gap-20 text-xl font-bold text-center">
                    <div className="flex flex-col justify-between">
                        <img  src="/logo/html.png" className="logo" alt="HTML" />
                        <p className="mt-2">HTML</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/css.png" className="logo" alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/js.png" className="logo" alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/tailwind.png" className="logo mt-2" alt="Tailwind" />
                        <p>Tailwind</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/react.png" className="logo" alt="React" />
                        <p>React</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/angular.png" className="logo" alt="Angular" />
                        <p>Angular</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/nodejs.png" className="logo" alt="Node.js" />
                        <p>Node.js</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/7.png" className="logo mt-5" alt="MongoDB" />
                        <p>MongoDB</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/postgresql.png" className="logo" alt="PostgreSQL" />
                        <p>PostgreSQL</p>
                    </div>
                </div>
            </div>
              
            <div className={visible ? "marquee2 opacity-100" : "marquee2 opacity-0"} style={{ paddingLeft: "5rem" }}>
                <div className="flex gap-20 text-xl font-bold text-center">
                    <div className="flex flex-col justify-between">
                        <img src="/logo/html.png" className="logo" alt="HTML" />
                        <p className="mt-2">HTML</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/css.png" className="logo" alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/js.png" className="logo" alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/tailwind.png" className="logo mt-2" alt="Tailwind" />
                        <p>Tailwind</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/react.png" className="logo" alt="React" />
                        <p>React</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/angular.png" className="logo" alt="Angular" />
                        <p>Angular</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/nodejs.png" className="logo" alt="Node.js" />
                        <p>Node.js</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/7.png" className="logo mt-5" alt="MongoDB" />
                        <p>MongoDB</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="/logo/postgresql.png" className="logo" alt="PostgreSQL" />
                        <p>PostgreSQL</p>
                    </div>
                </div>
            </div>

          </div>

        </section>

        <section id="section4" className="max-w-6xl mx-auto mt-24">
          <p className="text-5xl text-center font-bold">My Projects</p>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <img src="/images/section1.png" width={600} height={400} alt="Project 1" />
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">Vonble</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
            <div>
              <img src="/images/section1.png" width={600} height={400} alt="Project 2" />
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">ThatakoClub</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
            <div>
              <img src="/images/section1.png" width={600} height={400} alt="Project 3" />
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">ThatakoApply</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
            <div>
              <img src="/images/section1.png" width={600} height={400} alt="Project 4" />
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">Capital Quiz</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
          </div>
        </section>

        <section id="section5" className="max-w-6xl mx-auto my-24">
          <p className="text-5xl text-center font-bold mb-20">My Contact</p>
            <div className="grid grid-cols-2 gap-24">

              <div className="flex flex-col items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-[#424242] flex items-center justify-center">
                    <span className="material-icons text-[#48CFCB] text-5xl">call</span>
                </div>
                <p className="text-xl font-bold">Contact Number</p>
                <p className="font-bold">083-232-5607</p>
              </div>

              <div className="flex flex-col items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-[#424242] flex items-center justify-center">
                    <span className="material-icons text-[#48CFCB] text-5xl">mail</span>
                </div>
                <p className="text-xl font-bold">Email Address</p>
                <p className="font-bold">vasawat.ppcmk@gmail.com</p>
              </div>

            </div>
        </section>
        

      </div>
    </>
);

};
