import option from 'readline-sync';

// coleção de salario, inflação e o ano
let array_salarioMinimo = [
    { salario: 510.0, ano: 2010, infla: 5.92 },
    { salario: 545.0, ano: 2011, infla: 6.5 },
    { salario: 622.0, ano: 2012, infla: 5.84 },
    { salario: 678.0, ano: 2013, infla: 5.91 },
    { salario: 724.0, ano: 2014, infla: 6.41 },
    { salario: 788.0, ano: 2015, infla: 10.67 },
    { salario: 880.0, ano: 2016, infla: 6.29 },
    { salario: 937.0, ano: 2017, infla: 2.95 },
    { salario: 954.0, ano: 2018, infla: 3.75 },
    { salario: 998.0, ano: 2019, infla: 4.31 },
    { salario: 1045.0, ano: 2020, infla: 4.52 },
];

// função do menu principal
const menu_principal = () => {
    let formatacao = '';

    console.log(`${formatacao.padStart(50, '*')}`);
    console.log(`Bem - Vindo (a)`);
    console.log(`1 - Lista historico salario mínimo`);
    console.log(`2 - Lista historico taxa IPCA`);
    console.log(`3 - lista de porcentagem de crecimento salario`);
    console.log(`${formatacao.padStart(50, '*')}`);
};

// função para percorrer a coleção de objetos na propriedade salario e ano
const lista_historico_salario_minimo = (arr) => {
    for (let lista of arr) {
        console.log(`${'Ano: '.padEnd(30, '.')} ${lista.ano}`);
        console.log(`${'Salarios:'.padEnd(30, '.')} ${lista.salario.toFixed(2).replace('.', ',')}\n`);
    }
};

// funçao para percorre a coleção de objetos na propriedade inflação e ano
const lista_historico_PCA = (arr) => {
    for (let lista of arr) {
        console.log(`${'Ano: '.padEnd(30, '.')} ${lista.ano}`);
        console.log(`${'Inflação PCA: '.padEnd(30, '.')} ${lista.infla.toFixed(2).replace('.', ',')}%\n`);
    }
};

// função para processamento dos dados indicando a diferença de salario a cada ano
const porcentagem_crecimento_salarial = (arr) => {
    let crecimentoSalarial;

    for (let i = 1; i < arr.length; i++) {
        //Exibe o salario de 2011 em diante com calculo
        const salariolAtual = arr[i].salario;
        const salarioAnterior = arr[i - 1].salario;
        const diferenca = salariolAtual - salarioAnterior;
        crecimentoSalarial = (diferenca / salarioAnterior) * 100;

        //Lista salario, inflação e crecimento salarial comparando com a inflação
        console.log(`${'Ano: '.padEnd(30, '.')} ${arr[i].ano}`);
        console.log(`${'Salario Mínimo'.padEnd(30, '.')} R$ ${arr[i].salario.toFixed(2).replace('.', ',')}`);
        console.log(`${'Crecimento Salarial: '.padEnd(30, '.')} ${crecimentoSalarial.toFixed(2).replace('.', ',')}%`);
        console.log(`${'Inflação IPCA: '.padEnd(30, '.')} ${arr[i].infla.toFixed(2).replace('.', ',')}%\n`);
    }
};

// função para escolha do usuario no menu
const escolha_opcao = () => {
    let options;
    menu_principal();
    options = option.question(`Escolha uma Opcao: `);
    options = parseInt(options);

    switch (options) {
        case 1:
            lista_historico_salario_minimo(array_salarioMinimo);
            break;
        case 2:
            lista_historico_PCA(array_salarioMinimo);
            break;
        case 3:
            porcentagem_crecimento_salarial(array_salarioMinimo);
            break;
        default:
            console.log('Opcao invalida');
    }
};

escolha_opcao();
