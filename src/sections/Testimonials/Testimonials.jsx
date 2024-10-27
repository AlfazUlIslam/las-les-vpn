import { TestimonialCard, Dot, ArrowButton } from "../../components"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { testimonialsCardsData } from "../../assets"

const Testimonials = () => {
  return (
    // testimonials section
    <section id="testimonials">
      {/* testimonilas container */}
        <div className="container px-6 pb-[60px] xl:pb-[180px]">
          {/* testimonials heading */}
          <h2 className="w-[280px] mx-auto font-rubik 
          font-medium text-[25px] leading-[40px] text-blueishBlack 
          text-center sm:w-[447px] sm:text-[35px] 
          sm:leading-[50px]">
            Trusted by Thousands of Happy Customer
          </h2>
          {/* testimonials description */}
          <p className="w-[280px] mx-auto mt-[10px] mb-[30px] 
          font-rubik font-normal text-[14px] leading-[30px] 
          text-darkGray text-center sm:w-[500px] sm:mt-[20px] 
          sm:mb-[60px] sm:text-[16px] xl:w-[555px]">
            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
          </p>
          {/* testimonials cards */}
          <div className="mb-[30px] flex flex-col justify-center 
          items-center gap-[10px] md:flex-row md:justify-between 
          md:gap-[6px] xl:mb-[60px] xl:gap-0">
            {testimonialsCardsData.map((datum, index) => (
              <TestimonialCard 
                key={index}
                image={datum.image}
                altText={datum.altText}
                name={datum.name}
                address={datum.address}
                rating={datum.rating}
                quote={datum.quote}
              />
            ))}
          </div>
          {/* testimonials dots & arrows */}
          <div className="w-[250px] mx-auto flex justify-between 
          items-center sm:w-[350px] md:w-[600px] lg:w-[850px]">
            {/* tesimonials dots */}
            <div className="flex justify-center items-center 
            gap-[15px]">
              <Dot active={true} />
              <Dot active={false} />
              <Dot active={false} />
              <Dot active={false} />
              <Dot active={false} />
            </div>
            {/* tesimonials arrows */}
            <div className="flex justify-center items-center 
            gap-[20px]">
              {/* arrow left */}
              <ArrowButton elementIcon={<FaArrowLeft />} />
              {/* arrow right */}
              <ArrowButton elementIcon={<FaArrowRight />} />
            </div>
          </div>
        </div>
    </section>
  )
}
export default Testimonials