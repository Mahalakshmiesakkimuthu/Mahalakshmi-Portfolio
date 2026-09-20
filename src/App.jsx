
import "./App.css";
import { useEffect } from "react";

import profilePic from "./assets/portfoliopic.png";
import profile from "./assets/profile.png";
import portfoliopic from "./assets/portfoliopic.png";
import skyscopeImg from "./assets/skyscope.png";
import cartifyImg from "./assets/cartify.png";
import tasknovaImg from "./assets/tasknova.png";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaCode,
    FaMobileAlt,
    FaPaintBrush,
    FaUser,
    FaMapMarkerAlt,
    FaEnvelope,
    FaGraduationCap,
    FaLinkedin,
    FaPhone,
    FaDownload
} from "react-icons/fa";

import { SiExpress } from "react-icons/si";

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        }, {
            threshold: 0.2
        });

        const elements = document.querySelectorAll(".fade-up");

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="header">
                <h1 className="name">Mahalakshmi.dev</h1>

                <nav>
                    <ul className="nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

            <section id="home" className="container fade-up">

                <div className="side1">

                    <p>Hello I'm</p>

                    <h1>
                        <span>Mahalakshmi</span>
                    </h1>

                    <h2>
                        Frontend Developer | MERN Enthusiast
                    </h2>

                    <p className="description">
                        I build responsive and user-friendly web applications
                        using modern technologies. Passionate about creating
                        clean, efficient and impactful digital experiences.
                    </p>

                    <div className="card">

                        <div>
                            <h2>Projects</h2>
                            <p>2+</p>
                        </div>

                        <div>
                            <h2>Experience</h2>
                            <p>Fresher</p>
                        </div>

                        <div>
                            <h2>Learning</h2>
                            <p>Everyday</p>
                        </div>

                    </div>


                    <div className="btn">
                        <a
                            href="/resume.pdf"
                            download="Mahalakshmi_Resume.pdf"
                            className="resume-btn"
                        >
                            <FaDownload />
                            Download Resume
                        </a>
                    </div>



                </div>

                <div className="pic">
                    <img src={portfoliopic} alt="Mahalakshmi" />
                </div>

            </section>

            <section id="what-i-do" className="what-i-do fade-up">

                <div className="section-heading">
                    <h3>What I Do</h3>
                    <span></span>
                </div>

                <div className="services-container">

                    <div className="service-card">
                        <div className="service-icon">
                            <FaCode />
                        </div>

                        <h2>Web Development</h2>

                        <p>
                            I create clean, responsive websites using HTML,
                            CSS, and JavaScript.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FaReact />
                        </div>

                        <h2>React Development</h2>

                        <p>
                            I build interactive and component-based web
                            applications using React.js.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FaMobileAlt />
                        </div>

                        <h2>Responsive Design</h2>

                        <p>
                            I develop websites that work smoothly across
                            desktops, tablets, and mobile devices.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FaPaintBrush />
                        </div>

                        <h2>UI Implementation</h2>

                        <p>
                            I turn designs and ideas into clean, functional,
                            and user-friendly web interfaces.
                        </p>
                    </div>

                </div>
            </section>

            <section id="about" className="about-section fade-up">

                <div className="about-container">

                    <div className="about-image">
                        <img
                            src={profile}
                            alt="Mahalakshmi"
                        />
                    </div>

                    <div className="about-content">

                        <p className="about-subtitle">
                            About Me
                        </p>

                        <h2>
                            Get to <span>Know me!</span>
                        </h2>

                        <div className="about-line"></div>

                        <p className="about-description">
                            I'm a BCA graduate from Bishop Heber College,
                            Tiruchirappalli, passionate about web development
                            and problem solving. I enjoy turning ideas into
                            real-world applications.
                        </p>

                        <p className="about-description">
                            I'm currently focusing on improving my skills in
                            the MERN stack and building projects that solve
                            real-life problems.
                        </p>

                        <div className="about-info">

                            <div className="about-info-card">
                                <div className="about-icon">
                                    <FaUser />
                                </div>

                                <div>
                                    <h4>Name</h4>
                                    <p>Mahalakshmi</p>
                                </div>
                            </div>

                            <div className="about-info-card">
                                <div className="about-icon">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <h4>Location</h4>
                                    <p>Tiruchirappalli, Tamil Nadu</p>
                                </div>
                            </div>

                            {/* Gmail Email Link */}
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=mahalakshmiesakkimuthuu@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-info-card"
                            >
                                <div className="about-icon">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <h4>Email</h4>
                                    <p>mahalakshmiesakkimuthuu@gmail.com</p>
                                </div>
                            </a>

                            <div className="about-info-card">
                                <div className="about-icon">
                                    <FaGraduationCap />
                                </div>

                                <div>
                                    <h4>Education</h4>
                                    <p>BCA - Bishop Heber College</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section id="skills" className="skills fade-up">

                <h3 className="section-title">MY SKILLS</h3>

                <h3>Technologies I work with</h3>

                <div className="skills-container">

                    <div className="skill-card">
                        <FaHtml5 className="skill-icon html" />
                        <p>HTML5</p>
                    </div>

                    <div className="skill-card">
                        <FaCss3Alt className="skill-icon css" />
                        <p>CSS3</p>
                    </div>

                    <div className="skill-card">
                        <FaJs className="skill-icon javascript" />
                        <p>JavaScript</p>
                    </div>

                    <div className="skill-card">
                        <FaReact className="skill-icon react" />
                        <p>React.js</p>
                    </div>

                    <div className="skill-card">
                        <FaNodeJs className="skill-icon node" />
                        <p>Node.js</p>
                    </div>

                    <div className="skill-card">
                        <SiExpress className="skill-icon express" />
                        <p>Express.js</p>
                    </div>

                    <div className="skill-card">
                        <div className="github-icons">
                            <FaGitAlt />
                            <FaGithub />
                        </div>
                        <p>Git & GitHub</p>
                    </div>

                </div>

            </section>

            <section className="projects fade-up" id="projects">

                <h2 className="head-project">My Projects</h2>

                <p className="section-subtitle">
                    Some of the projects I've built
                </p>

                <div className="projects-container">

                    <div className="project-card">

                        <div className="project-image">
                            <img
                                src={skyscopeImg}
                                alt="SkyScope Weather App"
                            />
                        </div>

                        <div className="project-content">

                            <h3>SkyScope</h3>

                            <p>
                                A responsive weather application built with React.js
                                that displays real-time weather information.
                            </p>

                            <div className="tech-stack">
                                <span>React</span>
                                <span>API</span>
                                <span>CSS</span>
                            </div>

                            <div className="project-buttons">
                                <a
                                    href="https://weather-dbtxrkm98-mahalakshmiesakkimuthus-projects.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href="https://github.com/Mahalakshmiesakkimuthu/Weather-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="project-card">

                        <div className="project-image">
                            <img
                                src={cartifyImg}
                                alt="Cartify E-Commerce Website"
                            />
                        </div>

                        <div className="project-content">

                            <h3>Cartify</h3>

                            <p>
                                An e-commerce website with product categories,
                                cart, wishlist and local storage functionality.
                            </p>

                            <div className="tech-stack">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>

                            <div className="project-buttons">
                                <a
                                    href="https://mahalakshmiesakkimuthu.github.io/Cartify-Website/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href="https://github.com/Mahalakshmiesakkimuthu/Cartify-Website"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="project-card">

                        <div className="project-image">
                            <img
                                src={tasknovaImg}
                                alt="TaskNova Task Manager"
                            />
                        </div>

                        <div className="project-content">

                            <h3>TaskNova</h3>

                            <p>
                                A task management application where users can add,
                                complete and delete tasks using LocalStorage.
                            </p>

                            <div className="tech-stack">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>

                            <div className="project-buttons">
                                <a
                                    href="https://mahalakshmiesakkimuthu.github.io/TaskNova/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href="https://github.com/Mahalakshmiesakkimuthu/TaskNova"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

            <section id="education" className="education-section fade-up">

                <div className="education-heading">

                    <p>MY EDUCATION</p>

                    <h2>
                        Education & <span>Qualification</span>
                    </h2>

                    <div className="education-line"></div>

                </div>

                <div className="education-container">

                    <div className="education-card">

                        <div className="education-icon">
                            <FaGraduationCap />
                        </div>

                        <div className="education-content">

                            <span className="education-year">
                                2023 - 2026
                            </span>

                            <h3>
                                Bachelor of Computer Applications
                            </h3>

                            <h4>
                                Bishop Heber College
                            </h4>

                            <p>
                                Tiruchirappalli, Tamil Nadu
                            </p>

                            <div className="education-result">
                                CGPA: 8.0 / 10
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section id="contact" className="contact-section fade-up">

                <div className="contact-container">

                    <div className="contact-left">

                        <p className="contact-subtitle">
                            GET IN TOUCH
                        </p>

                        <h2>
                            Let's work <span>together.</span>
                        </h2>

                        <div className="contact-line"></div>

                        <p className="contact-description">
                            I'm currently looking for opportunities as a
                            Frontend Developer / Web Developer / MERN Stack Developer.
                            Feel free to contact me for opportunities,
                            projects or collaboration.
                        </p>

                        <div className="contact-details">

                            {/* Gmail Email */}
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=mahalakshmiesakkimuthuu@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item"
                            >
                                <div className="contact-icon">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <small>Email</small>
                                    <p>
                                        mahalakshmiesakkimuthuu@gmail.com
                                    </p>
                                </div>
                            </a>

                            <div className="contact-item">

                                <div className="contact-icon">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <small>Location</small>

                                    <p>
                                        Tiruchirappalli, Tamil Nadu
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="contact-card">

                        <h3>Connect With Me</h3>

                        <p>
                            You can also find me on:
                        </p>

                        <div className="social-links">

                            {/* GitHub */}
                            <a
                                href="https://github.com/mahalakshmiesakkimuthu"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                                GitHub
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/mahalakshmisakki"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                                LinkedIn
                            </a>

                        </div>

                        {/* Gmail Compose Button */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=mahalakshmiesakkimuthuu@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button"
                        >
                            <FaEnvelope />
                            Send Me an Email
                        </a>

                    </div>

                </div>

            </section>

        </>
    );
}

export default App;

