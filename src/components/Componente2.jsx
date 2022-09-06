import styled from "styled-components"

const DivComp2 = styled.div `
    border: 3px solid green;
    padding: 20px;
    background-color: lightgreen;

    h2 {
        color: yellow;
    }

    p {
        color: orange;
    }
`

function Componente2() {
    return(
        <DivComp2>
            <h2>Estilização Componente 2</h2>
            <p>Desta vez dentro do componente</p>
        </DivComp2>
    )
}

export default Componente2