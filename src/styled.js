import styled from "styled-components";

const DivComp1 = styled.div `
    background-color: lightblue;
    border: 3px solid blue;
    padding: 20px;

    p {
        color: blue;
    }
`

const Button = styled.button `
    background-color: ${(props) => props.habilitado ? "blue" : "red"};
    border-radius: 5px;
    padding: 5px;
    color: white;
    border: none;
`

export {DivComp1, Button}