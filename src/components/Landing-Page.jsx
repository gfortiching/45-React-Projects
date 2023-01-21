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
            <h1>PHP</h1>
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
                <span><h1 className="greet">Nice to meet you!</h1></span>
                <span><h1 className="name">I'm Gabriel and I'm a Full-Stack Web Developer.</h1></span>
            </div>
        </div>
        <div className="right">
            <img src={Me} alt="" className="myImg" />
        </div>
    </article>
    </>

)};

export default Landing;