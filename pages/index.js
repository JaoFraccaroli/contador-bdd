import { useState } from "react"

export default function Home() {
    return (
        <div>
            <h1>Contador</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [numero, setNumero] = useState(0);

    function adicionarContador() {
        setNumero(numero + 1);
    }

    return (
        <div>
            <div data-testid="valor-contador">
                {numero}
            </div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
