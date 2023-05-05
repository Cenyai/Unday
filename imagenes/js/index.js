function saludar(unday) {
  return "Hola, mi nombre es Carlos, pero uso el nick UNDAy en Twitch. " + Unday + "!";
}

document.getElementById("imagenes").addEventListener("click", mostrarImagenes);

function mostrarImagenes() {
  let imagen1 = document.createElement("img1");
  imagen1.src = "index.html/img/IMG-20230418-WA0001.jpeg";

  let imagen2 = document.createElement("img2");
  imagen2.src = "index.html/img/IMG_20230118_235752.jpg";

  document.body.appendChild(imagen1);
  document.body.appendChild(imagen2);
}
