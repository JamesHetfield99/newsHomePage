import "./section.css"

const mobileScreen = window.innerWidth <= 600
const Section = () => {
  return (
    <section className="section-1">
        <img src={require(`../../images/image-web-3-${mobileScreen ? "mobile" : "desktop"}.jpg`)} className="section-image" alt="section" />
        <div className="section-info-container">
            <h1>The Bright Future of Web 3.0?</h1>
            <div className="wrapper">
              <p>
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
              </p>
              <button>Read More</button>
            </div>
        </div>
    </section>
  )
}

export default Section
