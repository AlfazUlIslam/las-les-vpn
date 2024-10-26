import { checkedCircle } from "../../assets"

const FeatureItem = (props) => {
  const { content } = props
  
  return (
    // feature item
    <div className="flex justify-center items-center 
    gap-[10px]">
      {/* feature item image */}
      <img 
        className="w-[16px] sm:w-auto md:w-[16px] lg:w-auto"
        src={checkedCircle} 
        alt="Checked Circle Image" 
      />
      {/* feature item text */}
      <p className="font-rubik font-normal text-[12px] 
      text-darkGray leading-[24px] sm:text-[14px] 
      sm:leading-[30px] md:text-[12px] md:leading-[24px] 
      lg:text-[14px] lg:leading-[30px]">
        {content}
      </p>
    </div>
  )
}
export default FeatureItem