import options from 'readline-sync';


const dataFormat = {
    hour: 'numeric',
    minute: 'numeric',
}

const dataAtual = new Date();
const hora = dataAtual.getHours();

let msg = "";

if (hora == 5 || hora < 12) {
    msg += "Bom Dia!!"
} else if (hora > 12 && hora < 18) {
    msg += "Boa Tarde!!"
}else{
    msg += "Boa Noite!!"
}

const menuFormat = "";


//coleção que junta salaro/ano com inflação referente a cada ano
let array_salarioMinimo = [
    { salario: 510.00, ano: 2010, infla: 5.92 },
    { salario: 545.00, ano: 2011, infla: 6.50 },
    { salario: 622.00, ano: 2012, infla: 5.84 },
    { salario: 678.00, ano: 2013, infla: 5.91 },
    { salario: 724.00, ano: 2014, infla: 6.41 },
    { salario: 788.00, ano: 2015, infla: 10.67 },
    { salario: 880.00, ano: 2016, infla: 6.29 },
    { salario: 937.00, ano: 2017, infla: 2.95 },
    { salario: 954.00, ano: 2018, infla: 3.75 },
    { salario: 998.00, ano: 2019, infla: 4.31 },
    { salario: 1045.00, ano: 2020, infla: 4.52 }
];
//Menu que recebe interação do usuario
console.log(`${menuFormat.padStart(40,"*")}`);
console.log(`Bem Vindo, São ${dataAtual.toLocaleTimeString('pt-br',dataFormat)} ${msg}\n`);
console.log("1 - Lista historico salario mínimo ");
console.log("2 - Lista historico taxa IPCA ");
console.log("3 - Lista de porcentagem de crecimento salario\n");
console.log(`${menuFormat.padStart(40,"*")}`);
let option = options.question("Digite sua opcao: ");

switch (option) {
    case "1":
        //Lista o salario mínimo de cada ano
        for (let lista of array_salarioMinimo) {
            //Passando metodo padEnd dentro da templet literal 
            console.log(`${"Ano: ".padEnd(30, ".")} ${lista.ano}`);
            console.log(`${"Salario Minimo: ".padEnd(30, ".")} R$${lista.salario.toFixed(2).replace(".", ",")}\n`);
        }
        break;
    case "2":
        //Lista o ano e a porcentagem da inflação
        for (let lista of array_salarioMinimo) {
            console.log(`${"Ano: ".padEnd(30, ".")} ${lista.ano}`);
            console.log(`${"Inflacao IPCA: ".padEnd(30, ".")} ${lista.infla.toFixed(2).replace(".", ",")}%\n`);
        }
        break;
    case "3":

        let crecimentoSalarial;
        //Exibe o salario a de 2010 sem o calculo incial
        console.log(`${"Ano: ".padEnd(30, ".")} ${array_salarioMinimo[0].ano}`);
        console.log(`${"Salario Mínimo".padEnd(30, ".")} R$${array_salarioMinimo[0].salario.toFixed(2).replace(".", ",")}`);
        console.log(`${"Crecimento Salarial: ".padEnd(30, ".")} - `);
        console.log(`${"Inflação IPCA: ".padEnd(30, ".")} ${array_salarioMinimo[0].infla.toFixed(2).replace(".", ",")}%\n`);

        for (let i = 1; i < array_salarioMinimo.length; i++) {
            //Exibe o salario de 2011 em diante com calculo
            const salariolAtual = array_salarioMinimo[i].salario;
            const salarioAnterior = array_salarioMinimo[i - 1].salario;
            const diferenca = salariolAtual - salarioAnterior;
            crecimentoSalarial = (diferenca / salarioAnterior) * 100;

            //Lista salario, inflação e crecimento salarial comparando com a inflação
            console.log(`${"Ano: ".padEnd(30, ".")} ${array_salarioMinimo[i].ano}`);
            console.log(`${"Salario Mínimo".padEnd(30, ".")} R$ ${array_salarioMinimo[i].salario.toFixed(2).replace(".", ",")}`);
            console.log(`${"Crecimento Salarial: ".padEnd(30, ".")} ${crecimentoSalarial.toFixed(2).replace(".", ",")}%`);
            console.log(`${"Inflação IPCA: ".padEnd(30, ".")} ${array_salarioMinimo[i].infla.toFixed(2).replace(".", ",")}%\n`);
        }
        break;
    default:
        //verificação de input
        console.log("Opção Invalida!");
        break;
}
