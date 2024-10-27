import { star } from "../../assets"

const TestimonialCard = (props) => {
    const { image, altText, name, address, rating, quote } = props
        
    return (
        // testimonial card
        <div className="w-[250px] h-[180px] rounded-[5px] 
        p-[14px] bg-white border-[2px] border-mediumGray 
        transition-all duration-1000 hover:border-darkRed 
        sm:w-[370px] sm:h-[250px] sm:rounded-[10px] sm:p-[30px] 
        md:w-[250px] md:h-[180px] md:rounded-[5px] md:p-[14px] 
        lg:w-[320px] lg:h-[250px] lg:rounded-[10px] lg:p-[30px] 
        xl:w-[370px]">
            {/* testimonial card header */}
            <header className="mb-[20px] flex justify-start 
            items-center">
                {/* image */}
                <img 
                    className="w-[35px] mr-[10px] sm:mr-[20px] 
                    md:mr-[10px] xl:mr-[20px]"
                    src={image} 
                    alt={altText}
                />
                {/* name & address */}
                <div className="flex flex-col">
                    {/* name */}
                    <span className="font-rubik font-medium 
                    text-[14px] text-blueishBlack sm:text-[18px] 
                    md:text-[14px] lg:text-[16px] xl:text-[18px]">
                        {name}
                    </span>
                    {/* address */}
                    <span className="font-rubik font-normal 
                    text-[10px] text-darkGray sm:text-[14px] 
                    md:text-[10px] lg:text-[12px] xl:text-[14px]">
                        {address}
                    </span>
                </div>
                {/* rating */}
                <div className="ml-[20px] mr-[5px] font-rubik 
                font-normal text-[12px] text-blueishBlack 
                sm:ml-[50px] sm:mr-[10px] sm:text-[16px] 
                md:ml-[20px] md:mr-[5px] md:text-[12px] 
                lg:ml-[40px] lg:text-[14px] xl:ml-[50px] 
                xl:mr-[10px] xl:text-[16px]">
                    {rating}
                </div>
                {/* star icon */}
                <img 
                    src={star} 
                    alt="Star Icon" 
                />
            </header>
            {/* testimonial card quote */}
            <div className="font-rubik font-normal 
            text-[12px] text-blueishBlack sm:text-[16px] 
            md:text-[12px] lg:text-[14px] xl:text-[16px]">
                {quote}
            </div>
        </div>
    )
}
export default TestimonialCard