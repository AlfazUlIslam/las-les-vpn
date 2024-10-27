const SocialLink = (props) => {
    const { elementIcon } = props
        
    return (
        // social link
        <a className="block w-[33px] h-[33px] rounded-full 
        bg-lightGray shadow-xl text-darkRed flex justify-center 
        items-center cursor-pointer transition-all duration-1000 
        hover:bg-darkRed hover:text-[#FFF] md:w-[28px] md:h-[28px] 
        xl:w-[33px] xl:h-[33px]">
            {elementIcon}
        </a>
    )
}
export default SocialLink