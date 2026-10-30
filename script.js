// Os preços abaixo correspondem aos preços exibidos em index.html.
const produtos = [
  { nome: "Kit Body Maria Clara", preco: 59.90 },
  { nome: "Manta Soninho", preco: 79.90 },
  { nome: "Kit Primeiros Cuidados", preco: 49.90 },
  { nome: "Ursinho de Pelúcia", preco: 39.90 }
];
const formatarMoeda = valor => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function simularCompra() {
  let total = 0;
  let quantidadeTotal = 0;
  const linhas = [];

  for (const produto of produtos) {
    const resposta = prompt(`Quantas unidades de ${produto.nome} deseja comprar?\nPreço: ${formatarMoeda(produto.preco)}\nDigite 0 para não comprar.`);
    if (resposta === null) {
      alert("Simulação cancelada. Nenhuma compra foi realizada.");
      return;
    }
    // Não permite resposta vazia, letras, decimais nem números negativos.
    const texto = resposta.trim();
    const quantidade = Number(texto);
    if (texto === "" || !/^\d+$/.test(texto) || !Number.isSafeInteger(quantidade)) {
      alert(`Quantidade inválida para ${produto.nome}.\nDigite um número inteiro igual ou maior que zero.\nReinicie a simulação para tentar novamente.`);
      return;
    }
    const subtotal = produto.preco * quantidade;
    total += subtotal;
    quantidadeTotal += quantidade;
    linhas.push(`${produto.nome}: ${quantidade} un. — ${formatarMoeda(subtotal)}`);
  }

  if (quantidadeTotal === 0) {
    alert("Nenhum produto foi selecionado. Volte quando quiser! ♡");
    return;
  }

  // Cálculo em centavos evita inconsistências na regra de desconto.
  const totalCentavos = Math.round(total * 100);
  const descontoCentavos = totalCentavos >= 15000 ? Math.round(totalCentavos * 0.10) : 0;
  const totalFinal = (totalCentavos - descontoCentavos) / 100;
  alert(`MARIA CLARA BABY — RESUMO DA COMPRA\n\n${linhas.join("\n")}\n\nTotal de itens: ${quantidadeTotal}\nSubtotal: ${formatarMoeda(totalCentavos / 100)}\nDesconto: ${formatarMoeda(descontoCentavos / 100)}\nTOTAL A PAGAR: ${formatarMoeda(totalFinal)}\n\nObrigada pela visita! ♡`);
}
