# Contador com testes BDD

![Testes BDD](https://github.com/JaoFraccaroli/contador-bdd/actions/workflows/testes-bdd.yml/badge.svg)

Aplicação de contador em **Next.js/React** usada para praticar **BDD (Behavior-Driven Development)**: o comportamento esperado é descrito em **Gherkin, em português**, e automatizado com **Cucumber + Playwright**.

![Prévia no computador e no celular](docs/previa.png)

## Cenários testados

Arquivo [`features/contador.feature`](features/contador.feature):

```gherkin
Funcionalidade: Contador
  Contexto:
    Dado que estou na página inicial

  Cenário: O contador começa em zero
    Então o contador deve mostrar 0

  Cenário: Clicar uma vez soma 1
    Quando eu clico em "Adicionar"
    Então o contador deve mostrar 1

  Esquema do Cenário: Clicar várias vezes soma a quantidade de cliques
    Quando eu clico em "Adicionar" <cliques> vezes
    Então o contador deve mostrar <resultado>
    Exemplos: 2, 5 e 10 cliques

  Cenário: O valor volta a zero ao recarregar a página
```

## Visual

Tema escuro com o conteúdo centralizado na tela: um cartão com o número em destaque dentro de um visor circular e o botão "Adicionar". O número dá um pulinho a cada clique (desligado para quem configurou o sistema para reduzir movimento), e o layout se adapta ao celular.

## Tecnologias

- Next.js e React (aplicação)
- Cucumber.js (cenários em Gherkin)
- Playwright (automação do navegador)
- Page Object (`features/support/pagina-contador.js`) para separar seletores e ações dos passos
- GitHub Actions: os cenários rodam a cada push e o relatório HTML fica disponível nos artefatos da execução

## Estrutura

```
features/
├── contador.feature              # cenários em português
├── step_definitions/
│   └── contador.steps.js         # ligação entre as frases e o código
└── support/
    ├── hooks.js                  # abre e fecha o navegador
    └── pagina-contador.js        # Page Object
```

## Como rodar

```bash
npm install
npx playwright install chromium
npm test        # sobe a aplicação e roda os cenários
```

O relatório fica em `reports/relatorio-cucumber.html`.
