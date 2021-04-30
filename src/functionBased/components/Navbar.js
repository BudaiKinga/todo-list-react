import React from "react"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import {AiFillFastForward, AiFillFastBackward} from "react-icons/ai"


const Navbar = () => {
    const links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/about",
            text: "About",
        },
    ]

    const [gordulve, setGordulve] = useState(false)

    const handleToggle = () => {
        setGordulve(!gordulve)
    }

    const closeIt = () => { setGordulve(false) }

    return (
        <nav className="navBar">
            <button onClick={handleToggle}>{gordulve ? <AiFillFastBackward/> : <AiFillFastForward/>}</button>

            <ul className={`menuNav ${gordulve ? " showMenu" : ""}`}>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink to={link.path} onClick={closeIt} activeClassName="active-link" exact>

                                {link.text}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Navbar