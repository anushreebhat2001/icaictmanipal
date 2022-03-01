import React from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import useState from 'react-hook-use-state';

const Nav = styled.div `
    justify-contents: right;
    margin-top: 2vw;    
`;

const NavLink = styled.li `
    width: 100%;
    margin:1.5vw;
    color: white;
    font-size: 3vw;
    align-items: left;
    justify-content: left;
    list-style-type: none;
`;

const NavMenu = styled.ul `
    margin: 0;
    padding: 0;
    border-bottom-left-radius: 3vw;
    position:relative
    height: 100%;
    display: block;
    background-color: rgb(13, 35, 70);;
    width: 100%;
    padding:2vw;
    font-weight: 700;
    flex-direction: column;
    position: fixed;
    color: white;
    top: 12vw;
    left: 70vw;
`;

const Link = styled.a `
    text-decoration: none;
    color: white;
    font-size: 2.4vw;
    border-bottom: 0.1vw solid white;
    font-weight:600;
    &:active {
        border-bottom: 0.3vw solid rgb(183, 206, 250);
    }
    &:link {
        color: white;
    }
    &:active {
        color: white;
    }
    &:hover {
        color: rgb(145, 196, 255);
    }

`;

export function SmallNavbar () {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Nav>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && <NavMenu> Menu
                <NavLink to="/">
                    <Link>Home</Link>
                </NavLink>
                <NavLink to="/Committees">
                <Link>Committees</Link>
                </NavLink>
                <NavLink to="/CallforPapers">
                <Link>Call for Papers</Link>
                </NavLink>
                <NavLink to="/ImportantDates">
                <Link>Important Dates</Link>
                </NavLink>
                <NavLink to="/Keynote">
                <Link>Keynote</Link>
                </NavLink>
                <NavLink to="/AcceptedPapers">
                <Link>Accepted Papers</Link>
                </NavLink>
                <NavLink to="/Registration">
                <Link>Registration</Link>
                </NavLink>
                <NavLink to="/Publication">
                <Link>Publications</Link>
                </NavLink>
                <NavLink to="/Downloads">
                <Link>Downloads</Link>
                </NavLink>
                <NavLink to="/Partners">
                <Link>Partners</Link>
                </NavLink>
            </NavMenu> }
           </Nav>
        </>
    );
};