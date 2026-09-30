import Service from "./Service"
import Title from "./Title"
import { services } from "../../data"

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={"Our"} subTitle={"Services"}/>
      {/* <!-- 2 classNamees 1 for size/position, 1 for media query/ layout --> */}
      <div className="section-center services-center">
          {services.map((service)=>{
                return (<Service icon={service.icon} title={service.title} info={service.info} key={service.id}/>)
              }
            )
          } 
      </div>
    </section>
  )
}

export default Services