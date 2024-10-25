import { Stat, Line, SectionButton } from "../../components"
import { bannerImage, user, mapPin, server } from "../../assets"

const Banner = () => {
    return (
        // banner
        <section id="banner">
            {/* banner container */}
            <div className="container px-6 py-[60px] 
            flex flex-col justify-center items-center 
            gap-[50px] xl:py-[120px] xl:gap-[100px]">
                {/* banner content & image */}
                <div className="flex flex-col-reverse justify-between 
                items-center gap-6 sm:gap-14 md:w-full md:flex-row 
                md:gap-0">
                    {/* banner content */}
                    <div className="flex flex-col items-center 
                    md:items-start">
                        {/* heading */}
                        <h1 className="w-[280px] font-rubik 
                        font-normal text-[25px] text-blueishBlack 
                        text-center leading-[40px] sm:w-[400px] 
                        sm:text-[35px] md:w-[280px] md:text-[25px] 
                        md:text-start lg:w-[400px] lg:text-[35px] 
                        xl:w-[555px] xl:text-[50px] xl:leading-[70px] 
                        xl:font-medium">
                            Want anything to be easy with 
                            <span className="pl-2 font-medium 
                            xl:font-bold">
                                LaslesVPN.
                            </span>
                        </h1>
                        {/* description */}
                        <p className="w-[280px] mt-[10px] 
                        mb-[30px] font-rubik font-normal text-[14px] 
                        text-darkGray text-center sm:w-[400px] 
                        sm:mt-[20px] sm:mb-[30px] sm:text-[16px] 
                        md:w-[280px] md:text-[14px] md:text-left 
                        lg:w-[400px] lg:text-[16px] xl:w-[555px] 
                        xl:mb-[50px]">
                            Provide a network for all your needs 
                            with ease and fun using
                            <span className="px-1 font-semibold">
                                LaslesVPN
                            </span> 
                            discover interesting features from us.
                        </p>
                        {/* button */}
                        <SectionButton content={"Get Started"} />
                    </div>
                    {/* banner image */}
                    <div>
                        <img 
                            className="w-[300px] sm:w-[500px] 
                            md:w-[300px] lg:w-[500px] xl:w-auto"
                            src={bannerImage} 
                            alt="Banner Image" 
                        />
                    </div>
                </div>
                {/* statistics */}
                <div className="w-[300px] rounded-[5px] shadow-xl 
                px-[30px] py-[12px] flex flex-col justify-between 
                items-start gap-6 sm:w-[500px] sm:rounded-[8px] 
                sm:py-[24px] sm:flex-row sm:items-center sm:gap-6 
                md:w-full lg:py-[38px] xl:w-[1140px] xl:rounded-[10px] 
                xl:px-[90px] xl:gap-0">
                    <Stat 
                        image={user}
                        altText={"An User"}
                        statDomain={"Users"}
                        statValue={90}
                    />
                    <Line />
                    <Stat 
                        image={mapPin}
                        altText={"Map-Pin"}
                        statDomain={"Locations"}
                        statValue={30}
                    />
                    <Line />
                    <Stat 
                        image={server}
                        altText={"A Server"}
                        statDomain={"servers"}
                        statValue={50}
                    />
                </div>
            </div>
        </section>
    )
}
export default Banner