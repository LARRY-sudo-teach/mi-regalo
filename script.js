const imagenes = [
  "foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg",
  "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg", "foto10.jpg"
];

const mensajes = [
  "Eres mi primer pensamiento al despertar 💖",
  "Tu sonrisa ilumina mis días 🌞",
  "A tu lado, todo tiene sentido ✨",
  "Gracias por ser mi compañera de vida ❤️",
  "Tus abrazos son mi lugar favorito 🤗",
  "Cada momento contigo es un tesoro 💎",
  "Tú eres mi razón para sonreír 😊",
  "Amo cada detalle de ti 🌹",
  "Mi corazón late solo por ti 💘",
  "Contigo quiero un para siempre 💍, tu mera existrencia ya me hace faliz, me hace feliz tambien respirar tu mismo aire, mi amor por ti no puede expresarse solo con palabras"
];

// Mensajes secretos aleatorios
const secretos = [
  "Siempre serás mi único y verdadero amor ❤️",
  "Eres la mejor parte de mi vida 💕",
  "Sin ti, nada tendría sentido 🌹",
  "Te amo hoy, mañana y siempre 💘",
  "Mi corazón es solo tuyo 💝",
  "quisiera jugar moba contigo toda nuestra vida",
  "todo lo que tengo es para ti"
];

// Mostrar fotos
function mostrarFoto(indice) {
  const img = document.getElementById("imagen");
  const msg = document.getElementById("mensaje");
  img.src = imagenes[indice];
  msg.textContent = mensajes[indice];
  img.scrollIntoView({ behavior: "smooth", block: "center" });

  if (indice === 9) {
    lanzarAnimacion();
  }
}

// Botón secreto con efecto máquina
document.getElementById("btnSecreto").addEventListener("click", () => {
  const secreto = document.getElementById("mensajeSecreto");

  if (secreto.style.display === "none" || secreto.textContent === "") {
    secreto.style.display = "inline-block";
    secreto.textContent = "";

    const texto = secretos[Math.floor(Math.random() * secretos.length)];
    let i = 0;
    function escribir() {
      if (i < texto.length) {
        secreto.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 80);
      }
    }
    escribir();
  } else {
    secreto.style.display = "none";
  }
});

// Animación final foto 10
function lanzarAnimacion() {
  const animacion = document.getElementById("animacion");
  for (let i = 0; i < 30; i++) {
    const elem = document.createElement("div");
    elem.classList.add("explosion");
    elem.textContent = ["💖","💘","💝","🌹","🌷"][Math.floor(Math.random()*5)];
    elem.style.left = Math.random() * 100 + "vw";
    elem.style.top = Math.random() * 100 + "vh";
    animacion.appendChild(elem);
    setTimeout(() => elem.remove(), 2000);
  }
}

// Animación de flores
const flores = ["🌹", "🌷", "💖", "💘", "💝"];
const contenedorFlores = document.getElementById("flores");
function crearFlor() {
  const flor = document.createElement("div");
  flor.classList.add("flor");
  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = (Math.random() * 5 + 5) + "s";
  flor.textContent = flores[Math.floor(Math.random() * flores.length)];
  contenedorFlores.appendChild(flor);
  setTimeout(() => flor.remove(), 10000);
}
setInterval(crearFlor, 500);

// Crear botones de galería
window.onload = () => {
  const botones = document.getElementById("botones");
  for (let i = 0; i < imagenes.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = i + 1;
    btn.onclick = () => mostrarFoto(i);
    botones.appendChild(btn);
  }
};
