# Maria Clara Baby — Simulador de Compras

**Aluno:** Melquisedeque Santos dos Santos  
**Trilha:** Desenvolvimento Mobile — Trilhas, 3ª edição  
**Desafio:** Desafio 1 — Minha Loja: Simulador de Compras

## Sobre o projeto

A **Maria Clara Baby** é uma boutique infantil **fictícia**, criada como exercício de HTML, CSS e JavaScript. A página apresenta uma coleção de produtos e um botão que simula uma compra por meio de caixas de diálogo do navegador.

## Produtos

| Produto | Preço |
|---|---:|
| Kit Body Maria Clara | R$ 59,90 |
| Manta Soninho | R$ 79,90 |
| Kit Primeiros Cuidados | R$ 49,90 |
| Ursinho de Pelúcia | R$ 39,90 |

**Regra de desconto adotada:** 10% sobre o subtotal de compras a partir de R$ 150,00 (inclusive). A regra é uma escolha de implementação, pois o enunciado menciona desconto sem definir seu percentual ou limite.

## Tecnologias

- **HTML5:** estrutura semântica da página e apresentação dos produtos.
- **CSS3:** cores, tipografia, cartões e adaptação a telas menores.
- **JavaScript:** interação com `prompt()`, conversão com `Number()`, cálculos e exibição do resultado com `alert()`.

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Clique em **Simular compra**.
4. Digite a quantidade desejada para cada produto; use **0** para ignorá-lo.
5. Confira o resumo, os subtotais, o desconto e o valor final no alerta.

Não é necessário instalar dependências nem utilizar servidor. As ilustrações estão na pasta `assets`. A página usa fontes do Google Fonts quando há internet, com fontes alternativas locais.

## Captura de tela

![Página da Maria Clara Baby](assets/captura-tela.png)

## Testes

Cenários previstos para conferência manual no navegador:

| Cenário | Resultado esperado |
|---|---|
| Todas as quantidades iguais a 0 | Mensagem de nenhum produto selecionado |
| 1 unidade do Kit Body | Total R$ 59,90, sem desconto |
| 2 Mantas Soninho | Subtotal R$ 159,80; desconto R$ 15,98; total R$ 143,82 |
| 1 Kit Body + 1 Manta + 1 Kit Cuidados | Subtotal R$ 189,70; desconto R$ 18,97; total R$ 170,73 |
| Quantidade negativa, decimal, vazia ou texto | Mensagem de quantidade inválida |
| Cancelar um `prompt()` | Simulação cancelada |

A validação sintática e o teste automatizado básico do fluxo foram realizados durante a preparação. Recomenda-se repetir os testes manualmente após publicar.

## Dificuldade e aprendizado

Um desafio técnico do projeto foi garantir que o programa aceitasse apenas quantidades inteiras e não negativas, evitando resultados incorretos quando o usuário informa valores inválidos. A implementação demonstra como `Number()`, estruturas de repetição, condicionais e cálculos podem ser combinados em uma interação simples. A regra do desconto também exige atenção ao arredondamento de valores monetários.

## Uso de inteligência artificial

A IA foi utilizada como apoio na elaboração inicial da estrutura, na proposta de identidade visual, na escrita e revisão do código e na organização desta documentação. O projeto foi adaptado ao tema **Maria Clara Baby**, com produtos e preços próprios, e o funcionamento foi conferido por testes básicos. Antes da entrega, o aluno deve ler o código, executar os cenários acima e ajustar este relato para refletir exatamente o que compreendeu e verificou pessoalmente.

## Estrutura

```text
maria-clara-baby/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── body.svg
    ├── manta.svg
    ├── cuidados.svg
    ├── urso.svg
    └── captura-tela.png
```

> Projeto educacional fictício: não há vendas reais nem processamento de pagamentos.
