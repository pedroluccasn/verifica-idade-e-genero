function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.querySelector('div#res')
 if (fano.value == 0 || fano.value > ano) {
   window.alert('[ERRO] Verifique os dados e tente novamente.')
 } else {
   var fsex = document.getElementsByName('sexo')
   var idade = ano - Number(fano.value) 
   var gênero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')
   if (fsex[0].checked) {
     gênero = 'Masculino'
     if (idade >= 0 && idade < 13) {
       img.setAttribute('src', 'fotomenino.jpg')
     } else if (idade < 21) {
       img.setAttribute('src', 'fotorapaz.jpg')
     } else if (idade < 60 ){
       img.setAttribute('src', 'fotohomem.jpg')
     } else {
       img.setAttribute('src', 'fotoidoso.jpg')
     }
     } else if (fsex[1].checked) {
     gênero = 'Feminino'
     if (idade >= 0 && idade < 13) {
       img.setAttribute('src', 'fotomenina.jpg')
     } else if (idade < 21) {
       img.setAttribute('src', 'fotomoca.jpg')
     } else if (idade < 60 ){
       img.setAttribute('src', 'fotomulher.jpg')
     } else {
       img.setAttribute('src', 'fotoidosa.jpg')
     }
   }
   res.style.textAlign = 'center'
   res.innerHTML = `Seu gênero é ${gênero} e sua idade é ${idade} anos`
   res.appendChild(img)
 }
}