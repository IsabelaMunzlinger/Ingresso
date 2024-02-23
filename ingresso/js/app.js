function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let pistaElement = document.getElementById('qtd-pista');
    let cadeiraSuperiorElement = document.getElementById('qtd-superior');
    let cadeiraInferiorElement = document.getElementById('qtd-inferior');

    let pista = parseInt(pistaElement.textContent);
    let cadeiraSuperior = parseInt(cadeiraSuperiorElement.textContent);
    let cadeiraInferior = parseInt(cadeiraInferiorElement.textContent);

    if(quantidade <= 0 || isNaN(quantidade)){
        alert('Adicione a quantidade positiva e diferente de zero.');
        document.getElementById('qtd').value = '';
        return;
    }

    if(tipoDeIngresso == "pista" && quantidade <= pista && quantidade > 0){
        pista -= quantidade;
        pistaElement.textContent = pista;
        document.getElementById('qtd').value = '';

    }else if(tipoDeIngresso == "superior" && quantidade <=cadeiraSuperior && quantidade > 0){
        cadeiraSuperior -=quantidade;
        cadeiraSuperiorElement.textContent = cadeiraSuperior;
        document.getElementById('qtd').value = '';

    }else if (tipoDeIngresso == "inferior" && quantidade <=cadeiraInferior && quantidade > 0){
        cadeiraInferior -=quantidade;
        cadeiraInferiorElement.textContent = cadeiraInferior;
        document.getElementById('qtd').value = '';
    } else{
        alert('Quantidade de ingressos é superior ao limite! Reveja a quantidade.');
        document.getElementById('qtd').value = '';
        return;
    }
}
