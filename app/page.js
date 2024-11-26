"use client";
import { useState } from "react";
import Image from "next/image";
import Footer from "./footer";
import  GoogleGenerativeAI from "@google/generative-ai";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "How can I help you learn more about Jackie and his Resume?",
    },
  ]);

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   let newMessages = [...messages, { role: "user", content: messageInput }];
  //   setMessages(newMessages);
  //   setMessageInput("");
  //   const apiMessage = await fetch("/api", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ messages: newMessages }),
  //   }).then((res) => res.json());
  //   setMessages([
  //     ...newMessages,
  //     { role: "assistant", content: apiMessage.message },
  //   ]);
  // };
  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: "user", content: messageInput }];
    setMessages(newMessages);
    setMessageInput("");

    try {
      const apiMessage = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/generate`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: newMessages }), // newMessages should be structured properly for the API
      });
  
      if (!apiMessage.ok) {
          throw new Error("Network response was not ok");
      }
  
      const response = await apiMessage.json();
      setMessages([
          ...newMessages,
          { role: "assistant", content: response.message },
      ]);
  } catch (error) {
      console.error("Error:", error);
      // Update the messages state to inform the user about the error
      setMessages([...newMessages, { role: "assistant", content: "Sorry, there was an error processing your request." }]);
  }
};
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">JC</div>
          <div className="logo-text">Jackie Cheung's Portfolio Website</div>
        </a>
    <footer/>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:jackiecheung@pursuit.org" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small>
                Jackie Cheung
              </h1>
              <p>
                As a creative mind with a love for wrestling content on YouTube,
                I strive to make learning HTML, CSS, and JavaScript engaging and
                accessible for everyone. My passion for coding is matched only
                by my enthusiasm for sharing knowledge and helping others
                succeed in their own projects. Recently, I've been diving into
                the fascinating world of AI, incorporating cutting-edge tools
                like Poe AI into my work. This allows me to not only enhance my
                projects but also explore innovative ways to teach coding
                concepts. Join me on this exciting journey as we combine the
                worlds of technology and creativity, one line of code at a time!{" "}
                <span>
                  I'm interested in AI topics which is why I also add things
                  like ChatGPT into my projects these days.
                </span>
              </p>
              <div className="call-to-action">
                <a
                  href="./imgs/Resume_Jackie Cheung.pdf"
                  className="button black"
                >
                  View Resume
                </a>
                <a
                  href="mailto:jackiecheung@pursuit.org"
                  className="button white"
                >
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/JackieC1993">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/jackiecheung93/?trk=opento_sprofile_details">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/jackie93.png" alt="Jackie Cheung" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/sass.png" width="128" alt="Sass" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              <img src="./imgs/azure.png" width="128" alt="Azure" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/sass.png" width="128" alt="Sass" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              <img src="./imgs/azure.png" width="128" alt="Azure" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Java</li>
                <li>PHP</li>
                <li>Ruby</li>
                <h3>Soft Skills</h3>
                <ul>
                  <li>Teamwork</li>
                  <li>Communication</li>
                  <li>Problem-solving</li>
                  <li>Adaptability</li>
                  <li>Creative Problem-Solving</li>
                </ul>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi, I'm Jackie Cheung, a passionate developer with a love for
                wrestling content on YouTube. I specialize in HTML, CSS,
                JavaScript, and React, making web development both fun and
                engaging. Recently, I've been exploring the exciting world of
                AI, integrating tools like Poe AI into my projects to enhance
                functionality and creativity. Join me as I combine my interests
                in coding and technology to create innovative solutions!
              </p>
              <p>
                I'm currently working on a project that uses Azure AI to create
                a chatbot that can help answer questions about web development.
                I'm also working on a project that uses React and Next.js to
                create a portfolio website design that looks good.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experiences
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/pursuit.png" alt="Pursuit" width="100%" />
                  <figcaption>Pursuit</figcaption>
                </div>
              </figure>
              <h3>Pursuit / Software Engineering Fellow</h3>
              <div>March 2023 - Current</div>
              <p>
                Completed 3 web application projects using a variety of
                programming languages and technologies.
                  {" "}
                </p>
                <p>
                  Built RESTful APIs and integrated data from third party APIs
                  to build projects.{" "}
                </p>
                <p>
                  {" "}
                  Technologies used: JavaScript, HTML, CSS, Bootstrap, Express,
                  Node.js, MySQL, PostgreSQL, React/Redux, Data Structure,
                  Algorithms, Sprints, Agile
                </p>
                <p>
                Utilized Git and Github for version control, used Netlify and
                Render for deployment.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/queenfold.png"
                    alt="QueenScottishFold"
                    width="65%"
                  />
                  <figcaption>QueenScottishFold</figcaption>
                </div>
              </figure>
              <h3>QueenScottishFold/ Social Media Ambassador</h3>
              <div>June 2020 - Current</div>
              <p>
                Upload 20 posts of content per month, including daily instagram
                stories to showcase ScottishFold and British Shorthair to
                consumers.
              </p>
              <p>
                {" "}
                Stay up to date with the latest kitten-related social media
                trends.{" "}
              </p>
              <p>
                {" "}
                Actively engage with followers by responding to comments,
                running polls, Q&As and encouraging user-generated content .{" "}
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/projectfind.png"
                    alt="ProjectFind"
                    width="100%"
                  />
                  <figcaption>ProjectFind</figcaption>
                </div>
              </figure>
              <h3>Project Find / Social Worker</h3>
              <div>Febraury 2022 - April 2022</div>
              <p>Created and completed case files, detailing key client information during intake process</p>
                    <p> Managed and entered data into STARS and Access databases.</p>
                    <p> Guided clients through key benefits enrollment processes, including SNAP, Social Security, etc</p> 
                    <p>
    Provided administrative services, handling confidential information. 
</p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="https://github.com/JackieC1993/Backend_Pizza" className="bento-item">
              <img src="./imgs/pizza.png" alt="Pizza" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/water.png" alt="Water" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/game.png" alt="Game" width="100%" />
            </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small>Talk to me</small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Gemini AI Chatbot</h3>
              <p>
                I've put together a chatbot here which knows all my skills, work
                experience and has a copy of my CV/Resume. You can use it to ask
                questions about me to get a better idea of who I am and what
                I've done.
              </p>
              <p>
                You can also download my resume here if you want to take a look
                at it. I'm currently looking for new opportunities so if you
                have a project you think I'd be a good fit for, please get in
                touch!
              </p>
              <a href="./imgs/Resume_Jackie Cheung.pdf" className="button black">
                Download Resume
              </a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>
                        {message.role === "user" ? "You" : "AI"}
                      </span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input
                  type="text"
                  placeholder="Hey Jackie, what skills are you best at?"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
