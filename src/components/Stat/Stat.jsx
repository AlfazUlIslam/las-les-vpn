import { useState, useEffect } from "react"

const Stat = (props) => {
    const { image, altText, statDomain, statValue } = props

    const [count, setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount == statValue) {
                    clearInterval(intervalId)
                    return statValue
                } else {
                    return prevCount + 1
                }
            })
        }, 50)

        return () => clearInterval(intervalId)
    }, [])
        
    return (
        // stat
        <div className="w-[130px] mx-auto flex 
        justify-start items-center gap-[16px] 
        lg:w-auto lg:gap-[36px]">
            {/* stat image */}
            <div className="w-[35px] h-[35px] rounded-full 
            bg-lightGray flex justify-center items-center 
            lg:w-[55px] lg:h-[55px]">
                <img 
                    className=""
                    src={image} 
                    alt={altText} 
                />
            </div>
            {/* stat content */}
            <div className="flex flex-col items-start">
                {/* stat value */}
                <h6 className="font-rubik font-bold text-[18px] 
                text-blueishBlack leading-[30px] lg:text-[20px] 
                xl:text-[25px]">
                    {count + "+"}
                </h6>
                {/* stat domain */}
                <span className="font-rubik font-normal text-[18px] 
                text-darkGray leading-[30px] lg:text-[20px] 
                xl:text-[25px]">
                    {statDomain}
                </span>
            </div>
        </div>
    )
}
export default Stat