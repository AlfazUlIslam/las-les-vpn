const SectionButton = (props) => {
    const { content } = props
        
    return (
        // section button
        <div className="w-[150px] h-[40px] rounded-[5px] 
        bg-darkRed flex justify-center items-center font-rubik 
        font-bold text-[14px] text-[#FFF] leading-[25px] 
        cursor-pointer transition-all duration-1000 
        hover:shadow-darkRed active:scale-90 lg:w-[200px] 
        lg:h-[50px] lg:rounded-[10px] lg:text-[16px] 
        lg:leading-[25px] xl:w-[250px] xl:h-[60px]">
            {content}
        </div>
    )
}
export default SectionButton