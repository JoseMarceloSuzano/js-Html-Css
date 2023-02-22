function verificar() {
   var data = new Date() //data atual
   var ano = data.getFullYear() //ano atual
   var fano = document.getElementById('txtano') // ano digitado pelo usuario
   var res = document.querySelector('div#res') // transformar res em variavel
   if (fano.value.length == 0 || Number(fano.value) > ano ) { //Para uma string vazia, length é 0. Se o valor digitado pelo usuario(fano)transformado em number(Number) for maior que o ano atual.
       window.alert('Errou')
   } else {
       var fsex = document.getElementsByName('radsex') //existe a opção [0] e [1].
       var idade = ano - Number(fano.value) //ano atual menos ano digitado pelo usuario.
       var genero = '' // string vazia
       var img = document.createElement('img')
       img.setAttribute('id', 'foto') //igual criar no html  a tag <img id = "foto">.
       if (fsex[0].checked ) {
           genero = 'homem'
           if (idade >=0 && idade <15){
               // a criançinha
               img.setAttribute('src','bebe-homem.png')
           } else if (idade < 19 ) {
               // o jovem 
               img.setAttribute('src','homem-jovem.png')
           } else if (idade < 50) {
               //o adulto
               img.setAttribute('src','homem-adulto.png') 
           }else{
               //idoso
               img.setAttribute('src','homem-idoso.png')
           }
       } else if (fsex[1].checked) {
           genero = 'mulher'
           if (idade >=0 && idade <15){
               // a  criança 
               img.setAttribute('src','mulher-bebe.png')
           } else if (idade < 19) {
               // a jovem
               img.setAttribute('src','mulher-jovem.png')
           } else if (idade <50) {
               // a adulta
               img.setAttribute('src','mulher-adulto.png')
           }else {
               //idosozinha
               img.setAttribute('src','mulher-idoso.png')
           }

       }
       res.style.textAlign = 'center' // colocado estilo diretamente.
       res.innerHTML = `Detectamos gênero ${genero} com idade: <strong>${idade}</strong> anos.`
       res.appendChild(img)
   }
}
