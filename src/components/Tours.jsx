import Title from "./Title"
import { tours } from "../../data.js"
import Tour from "./Tour"

const Tours = () => {
  return (
    <section className="section tours" id="tours">
        <Title title="featured" subTitle="tours"/>
        <div className="section-center tour-center">
            {tours.map((tour)=>{
                return <Tour key={tour.id} {...tour} />
            })}
            {/* {tours.map((tour)=>{return (<Tour key={tour.id} image={tour.image} date={tour.date} title={tour.title} info={tour.info} location={tour.location} duration={tour.duration} price={tour.price}/>)
                })

            } */}
            
            
        </div>
        
    </section>
  )
}

export default Tours