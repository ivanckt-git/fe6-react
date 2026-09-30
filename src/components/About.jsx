import aboutImg from '../assets/beach.jpg'
import Title from './Title'
const About = () => {
  return (
    <section className="section" id="about">
        {/* <div className="section-title">
            <h2>About <span>Us</span></h2>
        </div> */}
        <Title title="About" subTitle="Us"/>
        {/* <!-- layout --> */}
        <div className="section-center about-center">
            <div className="about-img">
                <img src={aboutImg} alt="about img"/>
            </div>
            <div className="about-info">
                <h3>Explore the difference</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores </p>
                <p>Dnima at iste mollitia minus dicta, magni nulla, earum deserunt.</p>
                <a href="#" className="btn" role="button">read more</a>
            </div>
            
            
        </div>
    </section>
  )
}

export default About