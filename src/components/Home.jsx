import { useEffect, useState } from "react";

// MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
//



export default function Home(params) {
    
    const [visible, setVisible] = useState(false);

    const [valueTab, setValueTab] = useState(0);

    const handleChangeTab = (event, newValue) => {
      
      setValueTab(newValue);

      const sectionId = `sectionTab${newValue}`;
      const element = document.getElementById(sectionId);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
      }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
        setVisible(true); 
        }, 11000);

        return () => clearTimeout(timer);
    }, []);

return (
    <>
      <div className="grid place-items-center w-screen h-screen overflow-auto">

        <header className="w-full bg-black py-5 sticky top-0 z-10 grid place-items-center">
          <div className="w-[72rem] flex justify-between items-center">
            <a href="/" className="text-3xl font-bold text-[#48CFCB]">VASAWAT</a>
            <div className="flex gap-10">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={valueTab} onChange={handleChangeTab}   
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#48CFCB',
                  },
                  '& .MuiTab-root': {
                    color: 'white',
                  },
                  '& .Mui-selected': {
                    color: '#48CFCB',
                  },
                  '& .MuiTab-root:hover': {
                    color: '#48CFCB',
                  },
                  '& .css-19wsa2m-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                    color: '#48CFCB',
                  },
                  '& .css-9gnw14.Mui-selected': {
                    color: '#48CFCB',
                  },
                }} aria-label="header">
                  <Tab label="Home" />
                  <Tab label="About Me" />
                  <Tab label="Skills" />
                  <Tab label="Projects" />
                  <Tab label="Contact" />
                </Tabs>
              </Box>

            </div>
          </div>
        </header>

        <section id="sectionTab0" className="grid grid-cols-2  gap-4 w-[72rem] mt-20">
          <div className="flex items-center">
            <div className="flex flex-col gap-4">
              <p className="text-[#229799] text-xl font-bold">HELLO!!</p>
              <p className="text-6xl font-bold">I'm <span className="text-[#48CFCB]">vasawat</span></p>
              <p className="text-6xl text-[#48CFCB] font-bold">Prapachaimongkol</p>
              <p className="text-xl font-bold">A Web Developer</p>
            </div>
            
          </div>
          <div>
              <img
                src="/images/section1.png"
                
                alt="vasawat"
              />
          </div>
          <div id="sectionTab1"/>
        </section>

        <section className="max-w-6xl mt-24">
          <p className="text-5xl text-center font-bold mb-10">About Me</p>
          <p className="py-5 opacity-80 text-xl">"I’m a recent graduate from Mae Fah Luang University with a passion for developert. I enjoy creating websites. I work well with others, communicate clearly, and always try to learn new things. I’m hard-working, good at solving problems, and excited to contribute my skills to a team.I’m currently looking for a position as a Junior Frontend Developer, Junior Backend Developer, or Junior Full-Stack Developer."</p>
          <div className="flex flex-col gap-4 text-xl">
            <p><span className="text-[#48CFCB]">Name: </span><span className="opacity-80">Vasawat Prapachaimongkol</span></p>
            <p><span className="text-[#48CFCB]">Date of Birth: </span><span className="opacity-80">19/05/2001</span></p>
            <p><span className="text-[#48CFCB]">Address: </span><span className="opacity-80">Bangkok</span></p>
            <p><span className="text-[#48CFCB]">Email: </span><span className="opacity-80">vasawat.ppcmk@gmail.com</span></p>
            <p><span className="text-[#48CFCB]">Phone: </span><span className="opacity-80">083-232-5607</span></p>
          </div>
          <div className="w-1/4 my-10 mx-auto" >
            <a href="/pdf/vasawat_resume.pdf" download="vasawat_resume.pdf">
              <div className="text-xl text-center font-bold p-5 text-[#48CFCB] rounded-lg bg-[#424242] hover:opacity-60 transition duration-500 ">
                Dowload My Resume
              </div>
            </a>
          </div>
          <div id="sectionTab2"></div>
        </section>

        <section className="w-6xl mt-24">
          <p className="text-5xl text-center font-bold">My Skills</p>
          <div className="grid grid-cols-2 gap-4 my-20">
            <ul className="flex flex-col gap-4 text-xl text-center opacity-80 font-bold ">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Angular</li>
                <li>Tailwind</li>
                <li>Postman</li>
            </ul>
            <ul className="flex flex-col gap-4 text-xl text-center opacity-80 font-bold ">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>AWS</li>
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
          <div id="sectionTab3"></div>
        </section>

        <section  className="max-w-6xl mx-auto mt-24">
          <p className="text-5xl text-center font-bold mb-10">My Projects</p>
          <p className="text-center opacity-70 text-xl mb-10">wait my backend around 1 min</p>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <a href="https://vonble.netlify.app/">
                <img src="/images/projectVonble.png" className="w-full h-72 object-cover" alt="vonble" />
              </a>
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">Vonble</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
            <div>
              <a href="https://thatakopittayakom.netlify.app/">
                <img src="/images/projectTclub.png" className="w-full h-72 object-cover" alt="thatakoClub" />
              </a>
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">ThatakoClub</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
            <div>
              <a href="https://thatakopittayakomapply.netlify.app/">
                <img src="/images/projectTapply.png" className="w-full h-72 object-cover" alt="thatakoApply" />
              </a>
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">ThatakoApply</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
            <div>
              <a href="https://blogsprojectvasawat.netlify.app/">
                <img  src="/images/projectBlog.png" className="w-full h-72 object-cover" alt="MyBlog" />
              </a>
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">MyBlog</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
            <div>
              <a href="https://bankappvasawat.netlify.app/">
                <img src="/images/projectBankapp.png" className="w-full h-72 object-cover" alt="BankApp" />
              </a>
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">BankApp</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
            <div>
              <a href="https://capitals-quiz-vasawat.netlify.app/">
                <img src="/images/projectCapitalQuiz.png" className="w-full h-72 object-cover" alt="CapitalQuiz" />
              </a>
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">Capital Quiz</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
            <div>
              <a href="https://pokedex-bbegg.netlify.app/">
                <img src="/images/projectPokedex.png" className="w-full h-72 object-cover" alt="Pokedex" />
              </a>
              <div className="mt-5">
                <p className="text-3xl font-bold text-[#48CFCB]">Pokedex</p>
                <p className="opacity-70">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <p>Detail</p>
              </div>
            </div>
          </div>
          <div id="sectionTab4"></div>
        </section>

        <section  className="max-w-6xl mx-auto my-24">
          <p className="text-5xl text-center font-bold mb-20">My Contact</p>
            <div className="grid grid-cols-2 gap-24">

              <div className="flex flex-col items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-[#424242] flex items-center justify-center">
                    <span className="material-icons text-[#48CFCB] text-5xl">call</span>
                </div>
                <p className="text-xl font-bold">Contact Number</p>
                <p className="font-bold opacity-70">083-232-5607</p>
              </div>

              <div className="flex flex-col items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-[#424242] flex items-center justify-center">
                    <span className="material-icons text-[#48CFCB] text-5xl">mail</span>
                </div>
                <p className="text-xl font-bold">Email Address</p>
                <p className="font-bold opacity-70">vasawat.ppcmk@gmail.com</p>
              </div>

            </div>
        </section>
        

      </div>
    </>
);

};
