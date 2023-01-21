import "./css/Projects.css";
import Counter from "./Project1";

function Projects() {
    return (
        <>
        <section className="projects">
            <article className="projects-section">
            <div className="title"><h4>PROJECTS</h4></div>
                <div className="text">
                    <p>"Welcome back!</p>
                    <p>This project will be a work in progress until I complete all the 44 projects.</p>
                    <p>If you wish to follow me, here is the link:</p>
                    <a href="https://contactmentor.com/best-react-projects-for-beginners-easy/" target="blank"><p>45 Best React Projects for Beginners in Easy to Hard Order</p></a>
                    <p>I did not include #1 since I used Vite.js for this website."</p>
                </div>
            </article>
        </section>

        <section className="projects">
            <article className="projects-section">
            <div className="title"><h4>PROJECT 1</h4></div>
                <div className="text">
                    <h5>Simple Counter</h5>
                    <h6>Topics covered: React class-based components, props, state.</h6>
                </div>
                <Counter />
            </article>
        </section>
        </>
    )
}

export default Projects;