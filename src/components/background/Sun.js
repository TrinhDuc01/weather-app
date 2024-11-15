const Sun = ({top,left}) => {
    const styleOut = {
        height: 168 * 100 / 1700 + "vw",
        position: 'absolute',
        top,
        left,
        width: 168 * 100 / 1700 + "vw",
        backgroundColor: "#ffc044",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const styleIn = {
        height: "86%",
        width: "86%",
        backgroundColor: "#ffe155",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const styleInner = {
        height: "86%",
        width: "86%",
        backgroundColor: "#f1da2a",
        borderRadius: "50%",
    }
    return <div style={styleOut}>
        <div style={styleIn}>
            <div style={styleInner}></div>
        </div>
    </div>
}

export default Sun