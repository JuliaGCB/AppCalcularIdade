
function calcularIdade() {
  const anoNascimento = document.getElementById('input-ano').value;
  const mesNascimento = document.getElementById('input-mes').value;
  const diaNascimento = document.getElementById('input-dia').value;

  if (anoNascimento < 1900 || anoNascimento > 2023 || mesNascimento < 1 || mesNascimento > 12 || diaNascimento < 1 || diaNascimento > 31) {
    alert("Por favor, preencha os campos de data de nascimento com valores válidos.");
    limparCamposExibicao();
    return;
  }

  const dataNascimento = new Date(anoNascimento, mesNascimento - 1, diaNascimento);
  const dataAtual = new Date();

  let idadeEmAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
  let mesesRestantes = dataAtual.getMonth() - dataNascimento.getMonth();
  let diasRestantes = dataAtual.getDate() - dataNascimento.getDate();

  if (diasRestantes < 0) {
    mesesRestantes--;
    diasRestantes += new Date(dataNascimento.getFullYear(), dataNascimento.getMonth() + 1, 0).getDate();
  }

  if (mesesRestantes < 0) {
    idadeEmAnos--;
    mesesRestantes += 12;
  }

  document.getElementById('ano').textContent = idadeEmAnos;
  document.getElementById('meses').textContent = mesesRestantes;
  document.getElementById('dias').textContent = diasRestantes;
}

function limparCamposExibicao() {
  document.getElementById('ano').textContent = '--';
  document.getElementById('meses').textContent = '--';
  document.getElementById('dias').textContent = '--';
}
