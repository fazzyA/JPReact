import Sec from "./Second"
import Third from "./Third"

const First = () => {
    return (
        <>
            <h1>Make Header, body, footer component. <br/> Call these in root component called Main.js. Show Main component in index.js</h1>
            <h1>Make a  students array and display in react component with the use of map</h1>
            <Sec/>
            <Third/>
        </>
    )
}

export default First

//npx create-react-app myapp