const SubColLink = (props) => {
    const { content } = props
        
    return (
        // sub column link
        <a className="font-rubik font-normal text-[16px] 
        text-darkGray cursor-pointer transition-all 
        duration-1000 hover:text-darkRed">
            {content}
        </a>
    )
}
export default SubColLink