const Mountant = ({ top, left, right }) => {
    const style = {
        width: "90vw",
        height: "100vw",
        borderRadius: "50%",
        backgroundColor: "#114282",
        position: "absolute",
        right: right,
        left: left,
        top: top,
        boxShadow: "rgba(99, 99, 99, 1) 0px 1px 8px 0px"
    }
    return <div style={style}>

    </div>
}

export default Mountant