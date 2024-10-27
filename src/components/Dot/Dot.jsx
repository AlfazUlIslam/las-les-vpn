const Dot = (props) => {
    const { active } = props
        
    return (
        // dot
        <div className={`w-[6px] h-[6px] rounded-full
        ${active ? "bg-darkRed" : "bg-mediumLightGray"} 
        md:w-[10px] md:h-[10px] xl:w-[15px] xl:h-[15px]`}>
        </div>
    )
}
export default Dot