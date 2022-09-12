import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Navbar = () => {
    return(
        <>
        <NavContainer>
            <h2><span>Mi parcial</span></h2>
            <div>
                <Link to ="/">Inico</Link>
                <Link to="/formulario">Ejercicio1</Link>
                <Link to="/conversor">Ejercicio2</Link>
            </div>
        </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`
h2{
    color: white;
    font-weight: 400;
    span{
        font-weight: bold;
    }
}
padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;
a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
`