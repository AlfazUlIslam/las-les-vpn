const SubCol = (props) => {
    const { children } = props
        
    return (
        // sub column
        <div className="flex flex-col items-center gap-[10px] 
        sm:w-[150px] md:items-start xl:w-auto">
            {children}
        </div>
    )
}
export default SubCol