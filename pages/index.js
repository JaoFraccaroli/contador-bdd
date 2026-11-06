import { useState } from "react"
import estilos from "../styles/Contador.module.css"

export default function Home() {
    return (
        <main className={estilos.pagina}>
            <div className={estilos.cartao}>
                <h1 className={estilos.titulo}>Contador</h1>
                <Contador />
            </div>
        </main>
    )
}

function Contador() {
    const [numero, setNumero] = useState(0)

    function adicionarContador() {
        setNumero(numero + 1)
    }

    return (
        <>
            <div className={estilos.visor}>
                {/* key muda a cada clique para repetir a animação do número */}
                <span key={numero} className={estilos.numero} data-testid="valor-contador">
                    {numero}
                </span>
            </div>
            <button className={estilos.botao} onClick={adicionarContador}>Adicionar</button>
        </>
    )
}
