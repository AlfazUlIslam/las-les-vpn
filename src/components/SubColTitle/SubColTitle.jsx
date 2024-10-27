const SubColTitle = (props) => {
    const { content } = props
        
    return (
        // sub column title
        <h6 className="mb-[10px] font-rubik font-medium 
        text-[18px] text-blueishBlack">
            {content}
        </h6>
    )
}
export default SubColTitle