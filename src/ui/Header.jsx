import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to="/" >Company name</ Link>
            <p>Peter</p>
        </header>
    )
}

export default Header
