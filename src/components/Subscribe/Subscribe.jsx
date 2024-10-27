import { SectionButton } from "../"

const Subscribe = () => {
  return (
    // subscribe
    <div className="w-[280px] h-[300px] rounded-[10px] 
    bg-[#FFF] shadow-xl px-[35px] py-[25px] flex flex-col 
    justify-between items-center absolute top-[-150px] 
    left-[50%] translate-x-[-50%] sm:w-[450px] md:w-[650px] 
    md:h-[250px] md:flex-row md:top-[-125px] xl:w-[1140px] 
    xl:h-[233px] xl:px-[70px] xl:py-[58px] xl:top-[-116px]">
        {/* subscribe section content */}
        <div>
            {/* subscribe section heading */}
            <h2 className="w-[250px] mb-[20px] font-rubik 
            font-medium text-[25px] leading-[35px] 
            text-blueishBlack text-center sm:w-[350px] 
            sm:text-[35px] sm:leading-[45px] md:text-start 
            xl:w-[371px]">
                Subscribe Now for Get Special Features!
            </h2>
            {/* subscribe section description */}
            <p className="font-rubik font-normal text-[14px] 
            text-darkGray text-center sm:text-[16px] md:text-start">
                Let's subscribe with us and find the fun.
            </p>
        </div>
        <SectionButton content={"Subscribe Now"} />
    </div>
  )
}
export default Subscribe