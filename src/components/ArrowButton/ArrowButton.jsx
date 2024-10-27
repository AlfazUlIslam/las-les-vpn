const ArrowButton = (props) => {
    const { elementIcon } = props
        
    return (
        // arrow button
        <div className="w-[35px] h-[35px] rounded-full 
        border-[2px] border-darkRed text-md text-darkRed 
        flex justify-center items-center transition-all 
        duration-1000 hover:bg-darkRed hover:text-[#FFF] 
        active:scale-90 md:w-[40px] md:h-[40px] md:text-lg 
        xl:w-[60px] xl:h-[60px] xl:text-xl">
            {/* <FaArrowLeft /> */}
            {elementIcon}
        </div>
    )
}
export default ArrowButton