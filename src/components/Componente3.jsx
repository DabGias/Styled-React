import { useState } from "react"
import {Button} from "../styled"

function Componente3() {
    const [tarefa, setTarefa] = useState("")
    const [todas, setTodas] = useState([])

    function anotarTarefa(e) {
        setTarefa(e.target.value)
    }

    function inserirTarefa() {
        const tarefasAnotadas = [...todas, tarefa]
        setTodas(tarefasAnotadas)
        setTarefa("")
    }

    return(
        <>
            <h2>Componente 3</h2>
            <textarea onChange={anotarTarefa} value={tarefa}></textarea>
            <br/>
            <Button habilitado={tarefa} onClick={inserirTarefa}>Anotar</Button>

            <ul>
                {todas.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default Componente3