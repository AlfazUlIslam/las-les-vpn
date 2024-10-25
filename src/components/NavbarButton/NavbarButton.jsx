const NavbarButton = (props) => {
    const { content } = props
        
    return (
        // navbar button
        <button className="w-[100px] h-[30px] border border-darkRed 
        rounded-[50px] font-rubik font-medium text-[12px] text-darkRed 
        transition-all duration-1000 hover:bg-darkRed hover:shadow-darkRed 
        hover:text-[#FFF] active:scale-90 lg:w-[120px] lg:h-[40px] lg:text-[14px] 
        xl:w-[150px] xl:h-[45px] xl:text-[16px]">
            {content}
        </button>
    )
}
export default NavbarButton