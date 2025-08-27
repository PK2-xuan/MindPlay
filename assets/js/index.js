// consumo de apis 7u7 testimonio
fetch("testimonios.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("testimonios-container");

    data.forEach((testimonio) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";

      // Generar estrellas
      const estrellas =
        "★".repeat(testimonio.calificacion) +
        "☆".repeat(5 - testimonio.calificacion);

      col.innerHTML = `
  <div class="card h-100 testimonial-card shadow-sm">
    <div class="card-body d-flex flex-column justify-content-between">

      <p class="card-text fst-italic mb-1">"${testimonio.mensaje}"</p>
            <p class="fs-5 text-warning ">${estrellas}</p>
      <div class="d-flex align-items-center mt-1">
        <img src="${testimonio.imagen}" alt="Avatar de ${testimonio.nombre}" class="rounded-circle me-3" width="50" height="50">
        <div>
          <h6 class="mb-0 fw-semibold">${testimonio.nombre} ${testimonio.apellido}</h6>
          <small class="text-muted">Curso: ${testimonio.curso}</small>
        </div>
      </div>
    </div>
  </div>
`;

      container.appendChild(col);
    });
  })
  .catch((error) => {
    console.error("Error al cargar los testimonios:", error);
  });



