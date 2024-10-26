import { checked } from "../../assets"

const PlanFeature = (props) => {
    const { featureText } = props
        
    return (
        // plan feature
        <div className="flex justify-center items-center 
        gap-[20px]">
            {/* plan feature image */}
            <img 
                src={checked} 
                alt="Checked Icon" 
            />
            {/* plan feature text */}
            <p className="font-rubik font-normal text-[12px] 
            text-darkGray sm:text-[14px]">
                {featureText}
            </p>
        </div>
    )
}
export default PlanFeature