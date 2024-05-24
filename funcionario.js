function cadastraFuncionario (codigo, horasTrabalhadasMes, horasExtras, vlHora, dependentes)
{
  sessionStorage
    .setItem(codigo,JSON.stringify({    
      horasTrabalhadas: horasTrabalhadasMes,
      horasExtras: horasExtras,
      valorHora: vlHora,
      dependentes: dependentes    
    }));  
}
function calculaSalarios(horas, valores) {
  let bruto = horas.trabalhadas * valores.totais,
      ganhoPorHoraExtra = horas.extras * valores.horasExtras,
      liquido = bruto + ganhoPorHoraExtra;  
  return {
    bruto: bruto,
    porHoraExtra: ganhoPorHoraExtra,
    liquido: liquido
  }
}
function getFuncionarioPesquisado(codigo) {  
  return JSON.parse(sessionStorage.getItem(codigo));
}
export {calculaSalarios, cadastraFuncionario, getFuncionarioPesquisado};