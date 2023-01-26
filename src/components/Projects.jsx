import "./css/Projects.css";
import Counter from "./Project2";
import Temperature from "./Project3";
import SearchFilter from "./Project4";
import BasicRegistration from "./Project5";
import ReactQuizApp from "./Project6";
import ReactNavbar from "./Project7";

function Projects() {
    return (
        <>
        <section className="projects">
            <article className="projects-section">
            <div className="title"><h4>PROJECTS</h4></div>
                <div className="text">
                    <p>"Welcome back!</p>
                    <p>This project will be a work in progress until I complete all the 45 projects.</p>
                    <p>If you wish to follow me, here is the link:</p>
                    <a href="https://contactmentor.com/best-react-projects-for-beginners-easy/" target="blank"><p>45 Best React Projects for Beginners in Easy to Hard Order</p></a>
                </div>
            </article>
        </section>

        <section className="projects">
            <article className="projects-section">
            <div className="project-title"><h4>PROJECT 1</h4></div>
            <div className="text">
                    <h5>Hello World App</h5>
                    <h6>Topics covered: React setup, modifying app.js file</h6>
                    <h6 className="mt-5">You can view my create-react-app in the link below!</h6>
                    <a href="https://gfortiching.github.io/react-portfolio/" target="blank"><p>Personal Portfolio</p></a>
                </div>
            </article>
        </section>

        <section className="projects">
            <article className="projects-section">
            <div className="project-title"><h4>PROJECT 2</h4></div>
                <div className="text">
                    <h5>Simple Counter</h5>
                    <h6>Topics covered: React class-based components, props, state.</h6>
                </div>
                <Counter />
            </article>
        </section>

        <section className="projects">
            <article className="projects-section">
            <div className="project-title"><h4>PROJECT 3</h4></div>
                <div className="text">
                    <h5>Temperature Controller App</h5>
                    <h6>Topics covered: React basics like Hooks, components, useState().</h6>
                </div>
                <Temperature />
            </article>
        </section>

        <section className="projects">
            <article className="projects-section">
            <div className="project-title"><h4>PROJECT 4</h4></div>
                <div className="text">
                    <h5>Search Filter</h5>
                    <h6>Topics covered: React components, useState(), using controlled HTML input field in React.</h6>
                </div>
                <SearchFilter />
            </article>
        </section>

        <section className="projects">
            <article className="projects-section">
            <div className="project-title"><h4>PROJECT 5</h4></div>
                <div className="text">
                    <h5>Basic Registration Form</h5>
                    <h6>Topics covered: React Hooks, components, useState(), using controlled HTML form in React.</h6>
                </div>
                <BasicRegistration />
            </article>
        </section>

        <section className="projects">
            <article className="projects-section">
            <div className="project-title"><h4>PROJECT 6</h4></div>
                <div className="text">
                    <h5>React Quiz App</h5>
                    <h6>Topics covered: React Hooks, components, props, useState().</h6>
                </div>
                <ReactQuizApp />
            </article>
        </section>

        <section className="projects">
            <article className="projects-section">
            <div className="project-title"><h4>PROJECT 7</h4></div>
                <div className="text">
                    <h5>React Navbar</h5>
                    <h6>Topics covered: CSS styling along with flex and grid. React basics like components, state, etc.</h6>
                </div>
                <ReactNavbar />
            </article>
        </section>

        <section className="projects">
            <article className="projects-section">
            <div className="project-title"><h4>PROJECT 8</h4></div>
                <div className="text">
                    <h5> User Login app using Auth0</h5>
                    <h6>Topics covered: React basics like Hooks, components, props, useState().</h6>
                </div>
            </article>
        </section>

        </>
    )
}

export default Projects;

