function simularCompra() {
  // 1. Preços dos produtos 
  const precoTeclado = 250; // Teclado 
  const precoMouse = 120; //Mouse 
  const precoSuporte = 180; //Suporte
  const precoHeadset = 200; // Headset

  // 2. Coleta das quantidades com prompt()
  let qtdTeclado = Number(prompt("[SISTEMA] Quantas unidades de 'Teclado Mecânico RGB' (R$ 250,00) deseja adicionar?"));
  let qtdMouse = Number(prompt("[SISTEMA] Quantas unidades de 'Mouse Ergonômico Sem Fio' (R$ 120,00) deseja adicionar?"));
  let qtdSuporte = Number(prompt("[SISTEMA] Quantas unidades de 'Suporte Articulado' (R$ 180,00) deseja adicionar?"));
  let qtdHeadset = Number(prompt("[SISTEMA] Quantas unidades de 'Headset Gamer 7.1' (R$ 200,00) deseja adicionar?")); // <-- NOVO PROMPT

  // Tratamento de inputs inválidos
  if (isNaN(qtdTeclado) || qtdTeclado < 0) qtdTeclado = 0;
  if (isNaN(qtdMouse) || qtdMouse < 0) qtdMouse = 0;
  if (isNaN(qtdSuporte) || qtdSuporte < 0) qtdSuporte = 0;
  if (isNaN(qtdHeadset) || qtdHeadset < 0) qtdHeadset = 0; 

  // Verificação se NENHUM item foi escolhido
  if (qtdTeclado === 0 && qtdMouse === 0 && qtdSuporte === 0 && qtdHeadset === 0) {
    alert("[ALERTA] Nenhum produto foi selecionado. Simulação cancelada.");
    return;
  }

  // 3. Cálculo dos valores parciais e do total
  const valorTeclado = qtdTeclado * precoTeclado;
  const valorMouse = qtdMouse * precoMouse;
  const valorSuporte = qtdSuporte * precoSuporte;
  const valorHeadset = qtdHeadset * precoHeadset; //

  let totalCompra = valorTeclado + valorMouse + valorSuporte + valorHeadset; // <-- SOMADO AO TOTAL

  // Regra de Desconto
  let mensagemDesconto = "";
  if (totalCompra >= 300) {
    const desconto = totalCompra * 0.10;
    totalCompra -= desconto;
    mensagemDesconto = `\n DESCONTO DE AMIGO APLICADO (10%): -R$ ${desconto.toFixed(2)}`;
  }

  // 4. Montagem do Resumo
  let resumo = "=== RESUMO DA TRANSAÇÃO ===\n\n";

  if (qtdTeclado > 0) {
    resumo += `> Teclado Mecânico RGB: ${qtdTeclado}x = R$ ${valorTeclado.toFixed(2)}\n`;
  }
  if (qtdMouse > 0) {
    resumo += `> Mouse Ergonômico Sem Fio: ${qtdMouse}x = R$ ${valorMouse.toFixed(2)}\n`;
  }
  if (qtdSuporte > 0) {
    resumo += `> Suporte Articulado Monitor: ${qtdSuporte}x = R$ ${valorSuporte.toFixed(2)}\n`;
  }
  if (qtdHeadset > 0) { 
    resumo += `> Headset Gamer 7.1: ${qtdHeadset}x = R$ ${valorHeadset.toFixed(2)}\n`;
  }

  resumo += `${mensagemDesconto}\n\nTOTAL FINAL: R$ ${totalCompra.toFixed(2)}`;

  alert(resumo);
}
// Funções para o Popup (Lightbox) de Imagens
function abrirModal(elementoImagem) {
  const modal = document.getElementById("modal-imagem");
  const imgExpandida = document.getElementById("imagem-expandida");
  const captionText = document.getElementById("caption-modal");

  modal.style.display = "block";
  imgExpandida.src = elementoImagem.src;
  captionText.innerText = "// " + elementoImagem.alt.toUpperCase();
}

function fecharModal() {
  const modal = document.getElementById("modal-imagem");
  modal.style.display = "none";
}