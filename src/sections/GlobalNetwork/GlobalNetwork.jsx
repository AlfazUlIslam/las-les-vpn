import { globalNetwork, sponsors } from "../../assets"

const GlobalNetwork = () => {
    return (
        // global network
        <section id="global-network">
            {/* global network container */}
            <div className="container px-6 pb-[120px] flex 
            flex-col items-center">
                {/* global network heading */}
                <h2 className="w-[280px] font-rubik font-medium 
                text-[25px] leading-[40px] text-blueishBlack 
                text-center sm:w-[383px] sm:text-[35px] 
                sm:leading-[50px]">
                    Huge Global Network of Fast VPN
                </h2>
                {/* global network description */}
                <p className="w-[280px] mt-[10px] mb-[60px] 
                font-rubik font-medium text-[14px] leading-[30px] 
                text-darkGray text-center sm:w-[555px] sm:mt-[20px] 
                sm:text-[16px] xl:mb-[150px]">
                    See 
                    <span className="px-1 font-semibold">LaslesVPN</span> 
                    everywhere to make it easier for you when you move locations.
                </p>
                {/* global network image */}
                <div>
                    <img src={globalNetwork} alt="Global Network" />
                </div>
                {/* sponsers */}
                <div>
                    <img src={sponsors} alt="Sponsors" />
                </div>
            </div>
        </section>
    )
}
export default GlobalNetwork