fetch('dados.json')
    .then(response => response.json())
    .then(dj => {


        console.log(dj)

        document.getElementById("imagem1").innerHTML=dj.alok.imagem
        document.getElementById("nome1").innerHTML=  "Nome: " +  dj.alok.nome
        document.getElementById("idade1").innerHTML=  "Idade: " +  dj.alok.idade
        document.getElementById("valor1").innerHTML=  "Valor: R$" +  dj.alok.valor

        document.getElementById("imagem2").innerHTML=dj.Liu.imagem
        document.getElementById("nome2").innerHTML=  "Nome: " +  dj.Liu.nome
        document.getElementById("idade2").innerHTML=  "Idade: " +  dj.Liu.idade
        document.getElementById("valor2").innerHTML=  "Valor: R$" +  dj.Liu.valor

        document.getElementById("imagem3").innerHTML=dj.DavidGuetta.imagem
        document.getElementById("nome3").innerHTML=  "Nome: " +  dj.DavidGuetta.nome
        document.getElementById("idade3").innerHTML=  "Idade: " +  dj.DavidGuetta.idade
        document.getElementById("valor3").innerHTML=  "Valor: R$" +  dj.DavidGuetta.valor



})