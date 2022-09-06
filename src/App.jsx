import Componente1 from "./components/Componente1"
import Componente2 from "./components/Componente2"
import Componente3 from "./components/Componente3"

function App() {
    return(
        <>
            <h1>Aula 07</h1>
            <Componente1/> {/*estilização externa*/}
            <Componente2/> {/*estilização interna*/}
            <Componente3/>
        </>
    )
}

export default App