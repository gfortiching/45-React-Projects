import Me from '/images/meTransparent.png'

function Landing() {

    function Skills() {

        return (
        <>
        <section className="top-animation">
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>BOOTSTRAP</h1>
            <h1>JavaScript</h1>
            <h1>REACT JS</h1>
        </section>
        </>
    )
    }

    return (
    <>
    <Skills />
    <article>
        <div className="left">
            <div className="left-wrapper">
                <h1 className="greet">Hey! &#128075;</h1>
                <span><h1 className="greet">I'm Gabriel. Nice to meet you!</h1></span>
                <span><h1 className="name">Let's Learn React.js!</h1></span>
            </div>
        </div>
        <div className="right">
            <img src={Me} alt="" className="myImg" />
        </div>
    </article>
    </>

)};

export default Landing;