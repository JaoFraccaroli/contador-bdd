# language: pt
Funcionalidade: Contador
  Como usuário da página
  Quero clicar no botão "Adicionar"
  Para aumentar o valor do contador

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

    Exemplos:
      | cliques | resultado |
      | 2       | 2         |
      | 5       | 5         |
      | 10      | 10        |

  Cenário: O valor volta a zero ao recarregar a página
    Dado que cliquei em "Adicionar" 3 vezes
    Quando eu recarrego a página
    Então o contador deve mostrar 0
