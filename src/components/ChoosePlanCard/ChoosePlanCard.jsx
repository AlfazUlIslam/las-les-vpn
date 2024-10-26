import PlanFeature from "../PlanFeature/PlanFeature"
import { surprise } from "../../assets"

const ChoosePlanCard = (props) => {
    const { title, featureTexts, isFree, price } = props
        
    return (
        // choose plan card
        <div className="w-[250px] h-[600px] rounded-[10px] 
        border-[2px] border-mediumGray pt-[40px] pb-[25px] flex 
        flex-col justify-between items-center transition-all 
        duration-1000 hover:border-darkRed sm:w-[330px] 
        sm:h-[760px] sm:rounded-[10px] sm:pt-[80px] sm:pb-[50px]">
            {/* choose plan image */}
            <img 
                src={surprise} 
                alt="Surprise Box" 
            />
            {/* choose plan title */}
            <h6 className="font-rubik font-medium 
            text-[16px] text-blueishBlack sm:text-[18px]">
                {title}
            </h6>
            {/* choose plan features */}
            <div className="flex flex-col justify-start 
            items-start gap-[10px]">
                {featureTexts.map((featureText, index) => (
                    // choose plan feature
                    <PlanFeature 
                        key={index}
                        featureText={featureText}
                    />
                ))}
            </div>
            {/* choose plan price */}
            {isFree ? 
                <div className="font-rubik text-medium 
                text-[20px] text-blueishBlack sm:text-[25px]">
                    Free
                </div>
                : 
                <div className="font-rubik text-medium 
                text-[20px] text-blueishBlack sm:text-[25px]">
                    ${price}
                    <span className="text-darkGray">/mo</span>
                </div>
            }
            {/* choose plan button */}
            <button className="w-[177px] h-[45px] rounded-[50px] 
            bg-darkRed font-rubik font-bold text-[16px] 
            text-[#FFF] transition-all duration-1000 
            hover:shadow-darkRed active:scale-90">
                Select
            </button>
        </div>
    )
}
export default ChoosePlanCard