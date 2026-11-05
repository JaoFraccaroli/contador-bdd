import { Given, Then, When } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { PaginaContador } from "../support/pagina-contador.js"

Given("que estou na página inicial", async function () {
    this.pagina = new PaginaContador(this.page, this.baseUrl)
    await this.pagina.abrir()
})

Given("que cliquei em {string} {int} vezes", async function (botao, vezes) {
    await this.pagina.clicar(botao, vezes)
})

When("eu clico em {string}", async function (botao) {
    await this.pagina.clicar(botao)
})

When("eu clico em {string} {int} vezes", async function (botao, vezes) {
    await this.pagina.clicar(botao, vezes)
})

When("eu recarrego a página", async function () {
    await this.pagina.recarregar()
})

Then("o contador deve mostrar {int}", async function (valorEsperado) {
    await expect(this.pagina.valor()).toHaveText(String(valorEsperado))
})
