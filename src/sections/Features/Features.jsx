import { FeatureItem } from "../../components"
import { featuresImage } from "../../assets"

const Features = () => {
  return (
    // features section
    <section id="features">
        {/* features container */}
        <div className="container px-6 pb-[60px] flex 
        flex-col justify-center items-center sm:gap-10 
        md:flex-row md:justify-between md:gap-0 xl:pb-[120px]">
            {/* features image */}
            <div>
                <img 
                    className="w-[300px] sm:w-[500px] 
                    md:w-[300px] lg:w-[500px] xl:w-auto"
                    src={featuresImage} 
                    alt="Features Image" 
                />
            </div>
            {/* features content */}
            <div className="flex flex-col justify-center 
            items-center gap-[20px] md:items-start">
                {/* features heading */}
                <h2 className="w-[300px] font-rubik font-medium 
                text-[25px] text-blueishBlack leading-[40px] 
                text-center sm:w-[400px] sm:text-[35px] 
                md:w-[300px] md:text-[25px] md:text-start 
                lg:w-[400px] lg:text-[35px] xl:leading-[50px]">
                    We Provide Many Features You Can Use
                </h2>
                {/* features description */}
                <p className="w-[300px] font-rubik font-normal 
                text-[14px] text-darkGray leading-[24px] 
                text-center sm:w-[400px] sm:text-[16px] 
                sm:leading-[30px] md:w-[300px] md:text-[14px] 
                md:leading-[24px] md:text-start lg:w-[400px] 
                lg:text-[16px] lg:leading-[30px] xl:w-[427px]">
                    You can explore the features that we provide with fun and have their own functions each feature.
                </p>
                {/* features list */}
                <div className="flex flex-col justify-center 
                items-start gap-[20px]">
                    <FeatureItem 
                        content={"Powerfull online protection."}
                    />
                    <FeatureItem 
                        content={"Internet without borders."}
                    />
                    <FeatureItem 
                        content={"Supercharged VPN."}
                    />
                    <FeatureItem 
                        content={"No specific time limits."}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
export default Features