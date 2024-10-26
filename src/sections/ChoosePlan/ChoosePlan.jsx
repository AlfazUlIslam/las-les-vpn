import { ChoosePlanCard } from "../../components"
import { planFeatures } from "../../assets"

const ChoosePlan = () => {
  return (
    // choose plan section
    <section id="choose-plan">
        {/* choose plan container */}
        <div className="container px-6 py-[60px] 
        xl:py-[120px]">
            {/* choose plan heading */}
            <h2 className="font-rubik font-medium text-[25px] 
            text-blueishBlack text-center sm:text-[35px]">
                Choose Your Plan
            </h2>
            {/* choose plan description */}
            <p className="w-[260px] mt-[10px] mb-[30px] mx-auto 
            font-rubik font-normal text-[14px] leading-[30px] 
            text-darkGray text-center sm:w-[400px] sm:text-[16px] 
            xl:w-[555px] xl:mt-[20px] xl:mb-[60px]">
                Let's choose the package that is best for you and explore it happily and cheerfully.
            </p>
            {/* choose plan cards */}
            <div className="flex flex-col justify-center 
            items-center gap-[20px] md:flex-row md:gap-[10px] 
            xl:gap-[50px]">
                <ChoosePlanCard 
                    title={"Free Plan"}
                    featureTexts={planFeatures.free}
                    isFree={true}
                    price={0}
                />
                <ChoosePlanCard 
                    title={"Standard Plan"}
                    featureTexts={planFeatures.standard}
                    isFree={false}
                    price={9}
                />
                <ChoosePlanCard 
                    title={"Premium Plan"}
                    featureTexts={planFeatures.premium}
                    isFree={false}
                    price={12}
                />
            </div>
        </div>
    </section>
  )
}
export default ChoosePlan