import { Subscribe, SocialLink, SubCol, SubColTitle, SubColLink } from "../../components"
import { FaFacebookF, FaTwitter,  } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { logo } from "../../assets"

const Footer = () => {
  return (
    // footer
    <footer id="footer" className="bg-[#EEE] relative">
        {/* footer container */}
        <div className="container px-6 pt-[180px] pb-[100px] 
        flex flex-col items-center gap-[60px] md:flex-row md:gap-0">
            {/* subscribe */}
            <Subscribe />
            {/* column one */}
            <div className="w-auto flex flex-col items-center 
            md:w-1/2 md:items-start">
                {/* logo */}
                <img 
                    src={logo} 
                    alt="LasLesVPN Logo" 
                />
                {/* text */}
                <p className="w-[280px] mt-[20px] mb-[30px] font-rubik 
                font-medium text-[14px] leading-[24px] text-darkGray 
                text-center md:w-[250px] md:text-[16px] md:text-start 
                xl:w-[340px] xl:leading-[30px]">
                    <span className="pr-1 font-semibold">LaslesVPN</span> 
                    is a private virtual network that has unique features and has high security.
                </p>
                {/* social links */}
                <div className="mb-[30px] flex justify-center items-center 
                gap-[20px]">
                    <SocialLink elementIcon={<FaFacebookF />} />
                    <SocialLink elementIcon={<FaTwitter />} />
                    <SocialLink elementIcon={<ImInstagram />} />
                </div>
                {/* copyright text */}
                <div className="font-rubik font-normal text-[16px] 
                text-mediumDarkGray">
                    ©2020Lasles
                    <span className="text-medium">VPN</span>
                </div>
            </div>
            {/* column two */}
            <div className="w-auto flex flex-col justify-between 
            items-center gap-[40px] sm:flex-row sm:items-start 
            sm:gap-[30px] md:w-1/2 md:gap-0">
                {/* sub column one */}
                <SubCol>
                    <SubColTitle content={"Product"} />
                    <SubColLink content={"Download"} />
                    <SubColLink content={"Pricing"} />
                    <SubColLink content={"Locations"} />
                    <SubColLink content={"Server"} />
                    <SubColLink content={"Countries"} />
                    <SubColLink content={"Blog"} />
                </SubCol>
                {/* sub column two */}
                <SubCol>
                    <SubColTitle content={"Engage"} />
                    <SubColLink content={"LasLesVPN?"} />
                    <SubColLink content={"FAQ"} />
                    <SubColLink content={"Tutorials"} />
                    <SubColLink content={"About Us"} />
                    <SubColLink content={"Privacy Policy"} />
                    <SubColLink content={"Terms of Service"} />
                </SubCol>
                {/* sub column three */}
                <SubCol>
                    <SubColTitle content={"Earn Money"} />
                    <SubColLink content={"Affiliate"} />
                    <SubColLink content={"Become Partner"} />
                </SubCol>
            </div>
        </div>
    </footer>
  )
}
export default Footer