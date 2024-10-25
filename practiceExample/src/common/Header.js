import { useContext } from "react"
import { Link } from "react-router-dom"
import { SumContext } from "../App"
const Header = () => {
    const sum = useContext(SumContext)
    return (
        <>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/counter">Counter ({sum})</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </>
    )
}
export default Header