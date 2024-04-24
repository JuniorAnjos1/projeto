function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // PEGAR A TAG IMG
  const img = document.querySelector("#profile img")
  // SUBSTITUIR A IMAGEM
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assents/avataar.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assents/avataar.png")
  }

  // SUBSTITUIR A IMAGEM
  // se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, manter a imagem normal
}
