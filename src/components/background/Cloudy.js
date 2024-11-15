import Cloud from "./Cloud"

const Cloudy = ({top,left}) =>{
    const style = {
        position:"absolute",
        width:"100%",
        height:"100%",
        top,
        left
    }
    return(<div style={style}>
        <Cloud top={`${20*100/1700}%`} left={`${70*100/1700}%`}/>
        <Cloud top={`${10*100/1700}%`} left={`${20*100/1700}%`}/>
        <Cloud top={`${40*100/1700}%`} left={`${80*100/1700}%`}/>
        <Cloud top={`${45*100/1700}%`} left={`${20*100/1700}%`}/>
    </div>)
}

export default Cloudy