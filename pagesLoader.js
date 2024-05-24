import { cadastraFuncionario, getFuncionarioPesquisado } from "./funcionario.js";
import setDadosFuncionarioPesquisado from "./folhaPagamento.js";

var inputs = {
  form: null,
  consulFolhaPagamento: null
};
const arquivos = {
  formularioCadastrar: await getArquivo("cadastrarFuncionario.html"),
  consultarFolhaPagamento: await getArquivo("folhaPagamento.html")
};

async function getArquivo(nomeArquivo) {
  let buffer = await fetch(nomeArquivo);
  return await buffer.text();
}
function setInputsFormulario() {
  inputs.form = {
    codigo: document.getElementById("codigoFunc"),
    horasTrabalhadas: document.getElementById("horasTrabalhadas"),
    horasExtras: document.getElementById("horasExtras"),
    valorHora: document.getElementById("valorHora"),
    dependentes: document.getElementById("dependentes"),
    btnEnviar: document.getElementById("cadastrar")
  };
  inputs.form.btnEnviar.onclick = (e) => {
    cadastraFuncionario(
      inputs.form.codigo.value,
      inputs.form.horasTrabalhadas.value,
      inputs.form.horasExtras.value,
      inputs.form.valorHora.value,
      inputs.form.dependentes.value
    );
    e.target.style.borderColor = "black";
  }
}
function setInputsFolhaPagamento() {
  inputs.consulFolhaPagamento = {
    horasTrabalhadas: document.getElementById("horasTrabalhadas"),
    horasExtras: document.getElementById("horasExtras"),
    valorHora: document.getElementById("valorHora"),
    dependentes: document.getElementById("dependentes"),
    inputBuscaFuncionario: document.getElementById("codBuscaFuncionario"),
    inputGanhoHrExtra: document.getElementById("ganhoHrExtra"),
    inputSalBruto: document.getElementById("salBruto"),
    ganhoLiquido: document.getElementById("ganhoLiquido"),
    btnBuscar: document.getElementById("btnBuscar")
  };
  inputs.consulFolhaPagamento.btnBuscar.onclick = (e) => {
    
    setDadosFuncionarioPesquisado(
      getFuncionarioPesquisado(inputs.consulFolhaPagamento.inputBuscaFuncionario.value),
      inputs.consulFolhaPagamento
    );
  }
}
function setPagina(containerPrincipal, pagina = "folhaPagamento") {
  if(pagina == "folhaPagamento"){
    containerPrincipal.innerHTML = arquivos.consultarFolhaPagamento;
    setInputsFolhaPagamento();    
    return;
  }
  containerPrincipal.innerHTML = arquivos.formularioCadastrar;
  setInputsFormulario();
}
export {inputs, setPagina};