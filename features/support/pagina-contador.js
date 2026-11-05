// Page Object: concentra os seletores e ações da página do contador
export class PaginaContador {
    constructor(page, baseUrl) {
        this.page = page
        this.baseUrl = baseUrl
    }

    async abrir() {
        await this.page.goto(this.baseUrl)
        await this.valor().waitFor()
    }

    valor() {
        return this.page.getByTestId("valor-contador")
    }

    async clicar(nomeDoBotao, vezes = 1) {
        const botao = this.page.getByRole("button", { name: nomeDoBotao })
        for (let i = 0; i < vezes; i++) {
            await botao.click()
        }
    }

    async recarregar() {
        await this.page.reload()
        await this.valor().waitFor()
    }
}
