function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  // todo o script acima, que faz a mudança de darkmode pra light mode, pode ser executado pela linha de código abaixo:

  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if(html.classList.contains('light')) {
      img.setAttribute('src', './assets/imagens/avatar-light.png')
      img.setAttribute('alt', 'Selfie de Vilson Riegel Filho, de boné, usando óculos escuros, dentro de um carro.')
    } else {
      img.setAttribute('src', './assets/imagens/avatar.png' )
      
   }
}