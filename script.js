const novoAno = "1 de Janeiro de 2023"

function timer(){
    const novoAnoData = new Date(novoAno);
    const dataAtual = new Date();

    const segundosTotais = (novoAnoData - dataAtual) / 1000;

    const dias = Math.floor(segundosTotais / 3600 / 24);
    const horas = Math.floor(segundosTotais / 3600) % 24;
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const segundos = Math.floor(segundosTotais) % 60;





    console.log()
}