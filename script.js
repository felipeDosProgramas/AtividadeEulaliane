import {setPagina} from "./pagesLoader.js";

let container = document.getElementById("container"),
    btnCadastrarFunc = document.getElementById("btnCadastrar"),
    btnConsultarFP = document.getElementById("btnConsultarFP");

btnCadastrarFunc.onclick = (e) => {
  e.target.style.borderColor = "brown";  
  btnConsultarFP.style.borderColor = "black";
  setPagina(container, "sdsdsdsd");
};

btnConsultarFP.onclick = (e) => {
  e.target.style.borderColor = "brown";  
  btnCadastrarFunc.style.borderColor = "black";
  setPagina(container);
};

btnCadastrarFunc.click();