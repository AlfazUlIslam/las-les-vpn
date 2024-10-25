import { useState } from "react"
import Navlink from "../Navlink/Navlink"
import NavbarButton from "../NavbarButton/NavbarButton"
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"
import { logo } from "../../assets"
import "./Navbar.css"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle)
    }

    return (
        // navbar
        <nav>
            {/* container */}
            <div className="container p-6 flex justify-between 
            items-center lg:py-8 xl:py-12">
                {/* logo */}
                <div>
                    <img 
                        className="w-[120px] sm:w-[160px] xl:w-[180px]"
                        src={logo} 
                        alt="LasLesVPN Logo" 
                    />
                </div>
                {/* navbar links */}
                <ul className="hidden md:flex md:justify-center 
                md:items-center md:gap-[20px] xl:gap-[40px]">
                    <Navlink content={"About"} />
                    <Navlink content={"Features"} />
                    <Navlink content={"Pricing"} />
                    <Navlink content={"Testimonials"} />
                    <Navlink content={"Help"} />
                </ul>
                {/* sign in & sign up buttons */}
                <div className="hidden md:flex md:justify-center 
                md:items-center md:gap-[10px] xl:gap-[40px]">
                    {/* sign in button */}
                    <NavbarButton content={"Sign In"} />
                    {/* sign up button */}
                    <NavbarButton content={"Sign Up"} />
                </div>
                {/* mobile menu & button */}
                <div className="relative md:hidden">
                    {/* mobile menu button */}
                    <button
                        className="text-3xl"
                        onClick={handleToggle}
                    >
                        {toggle ? <IoCloseSharp /> : <IoMenuSharp />}
                    </button>
                    {/* mobile menu */}
                    {toggle && 
                    <div className="min-w-sm bg-[#FFF] border 
                    border-[#DDD] rounded-lg shadow-xl px-6 py-4 
                    flex flex-col gap-4 absolute top-14 -right-4 
                    slide-up">
                        {/* navbar links */}
                        <ul className="flex flex-col justify-center 
                        items-center">
                            <Navlink content={"About"} />
                            <Navlink content={"Features"} />
                            <Navlink content={"Pricing"} />
                            <Navlink content={"Testimonials"} />
                            <Navlink content={"Help"} />
                        </ul>
                        {/* sign in & sign up buttons */}
                        <div className="flex flex-col justify-center 
                        items-center gap-2">
                            {/* sign in button */}
                            <NavbarButton content={"Sign In"} />
                            {/* sign up button */}
                            <NavbarButton content={"Sign Up"} />
                        </div>
                    </div>
                    }
                </div>
            </div>
        </nav>
    )
}
export default Navbar