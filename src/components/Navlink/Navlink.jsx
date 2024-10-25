const Navlink = (props) => {
    const { content } = props

    return (
        // navlink
        <li>
            <a 
                href="#"
                className="font-rubik font-normal text-[12px] text-darkGray 
                relative transition-all duration-1000 hover:text-darkRed 
                after:content-[''] after:w-[0%] after:h-[1px] after:bg-darkRed 
                after:absolute after:left-0 after:bottom-[-3px] after:transition-all 
                after:duration-1000 hover:after:w-[100%] lg:text-[14px] xl:text-[16px]"
            >
                {content}
            </a>
        </li>
    )
}
export default Navlink