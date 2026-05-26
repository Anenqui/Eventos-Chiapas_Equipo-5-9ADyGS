const eventos = [
  {
    nombre: "Festival Cultural Chiapas",
    fecha: "15 Junio 2026",
    lugar: "Tuxtla Gutiérrez",
    descripcion: "Evento cultural con música y danza tradicional."
  },
  {
    nombre: "Concierto Nocturno",
    fecha: "22 Junio 2026",
    lugar: "San Cristóbal",
    descripcion: "Concierto con artistas invitados nacionales."
  },
  {
    nombre: "Feria Gastronómica",
    fecha: "10 Julio 2026",
    lugar: "Comitán",
    descripcion: "Exposición de comida típica chiapaneca."
  }
];

const eventosContainer = document.getElementById("eventos-container");

if (eventosContainer) {

  eventos.forEach(evento => {

    const card = document.createElement("div");
    card.classList.add("evento-card");

    card.innerHTML = `
      <h3>${evento.nombre}</h3>
      <p><strong>Fecha:</strong> ${evento.fecha}</p>
      <p><strong>Lugar:</strong> ${evento.lugar}</p>
      <p>${evento.descripcion}</p>
    `;

    eventosContainer.appendChild(card);
  });
}

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const respuesta = document.getElementById("respuesta");

    respuesta.textContent = `Gracias por contactarnos, ${nombre}.`;

    form.reset();
  });
}