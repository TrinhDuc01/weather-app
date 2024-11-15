
import Cloudy from "./Cloudy"
import Ground from "./Ground"
import Mountant from "./Mountant"
import Sun from "./Sun"

const Foreground = () => {
    const style = {
        position:"relative",
        height: '100vh',
        backgroundImage: "linear-gradient(#ec7686 5%, #fab500 40%)" //se nhan tu redux de thay doi nen
    }
    return (<div style={style}>
        <Cloudy  left={"10%"} top={"12%"} />
        <Cloudy  left={"40%"} top={"13%"}/>
        <Cloudy  left={"70%"} top={"14%"}/>
        <Sun top="30%" left={"20%"}/>
        <Mountant  top="36%"/>
        <Mountant  top="40%" right={"-30%"}/>
        <Mountant  top="40%" left={"-30%"}/>
        <Ground/>
    </div>)
}

export default Foreground