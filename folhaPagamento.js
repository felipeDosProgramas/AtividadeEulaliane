import {calculaSalarios} from "./funcionario.js";


function setDadosFuncionarioPesquisado(funcionario, inputsParaInserir){
  console.log(funcionario, inputsParaInserir);
  let ganhos = calculaSalarios(
    {trabalhadas: funcionario.horasTrabalhadas, extras: funcionario.horasExtras},
    {totais: funcionario.valorHora, horasExtras: funcionario.valorHora + (funcionario.valorHora * 0.5)}
  );
  inputsParaInserir.horasTrabalhadas.value = funcionario.horasTrabalhadas;
  inputsParaInserir.horasExtras.value = funcionario.horasExtras;
  inputsParaInserir.valorHora.value = funcionario.valorHora;
  inputsParaInserir.dependentes.value = funcionario.dependentes;
  inputsParaInserir.inputSalBruto.value = ganhos.bruto
  inputsParaInserir.inputGanhoHrExtra.value = ganhos.porHoraExtra
  inputsParaInserir.ganhoLiquido.value  = ganhos.liquido
}

export default setDadosFuncionarioPesquisado