const cursos = [
  // Primaria
  {
    id: 1,
    titulo: "Matemáticas Básicas 1",
    categoria: "Primaria",
    especialidad: "Matemáticas",
    certificado: true,
    idioma: "Español",
    descripcion:
      "Introducción a las operaciones básicas para niños de primaria.",
    imagen: "assets/img/primaria/img-primaria.png",
    duracion: 10,
  },
  {
    id: 2,
    titulo: "Lenguaje y Comunicación",
    categoria: "Primaria",
    especialidad: "Comunicación",
    certificado: false,
    idioma: "Inglés",
    descripcion: "Desarrollo de la lectura y escritura desde edad temprana.",
    imagen: "assets/img/primaria/img-primaria.png",
    duracion: 8,
  },
  {
    id: 3,
    titulo: "Ciencias Naturales para Niños",
    categoria: "Primaria",
    especialidad: "Ciencias",
    certificado: true,
    idioma: "Español",
    descripcion: "Conoce el mundo natural a través de experimentos divertidos.",
    imagen: "assets/img/primaria/img-primaria.png",
    duracion: 12,
  },
  {
    id: 4,
    titulo: "Historia del Perú para Escolares",
    categoria: "Primaria",
    especialidad: "Historia",
    certificado: false,
    idioma: "Español",
    descripcion: "Descubre los hechos históricos más importantes del país.",
    imagen: "assets/img/primaria/img-primaria.png",
    duracion: 9,
  },
  {
    id: 5,
    titulo: "Inglés para Niños",
    categoria: "Primaria",
    especialidad: "Idiomas",
    certificado: true,
    idioma: "Inglés",
    descripcion: "Aprende inglés con canciones y juegos divertidos, fáciles y entretenidos para todos.",
    imagen: "assets/img/primaria/img-primaria.png",
    duracion: 15,
  },

  // Secundaria
  {
    id: 6,
    titulo: "Álgebra Intermedia",
    categoria: "Secundaria",
    especialidad: "Matemáticas",
    certificado: true,
    idioma: "Español",
    descripcion: "Resuelve ecuaciones, desigualdades y sistemas.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 20,
  },
  {
    id: 7,
    titulo: "Física con Experimentos",
    categoria: "Secundaria",
    especialidad: "Ciencias",
    certificado: true,
    idioma: "Portugués",
    descripcion: "Explicación práctica de leyes físicas con actividades.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 18,
  },
  {
    id: 8,
    titulo: "Literatura Universal",
    categoria: "Secundaria",
    especialidad: "Literatura",
    certificado: false,
    idioma: "Español",
    descripcion: "Lee y analiza obras clásicas de la literatura.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 25,
  },
  {
    id: 11,
    titulo: "Química Orgánica Básica",
    categoria: "Secundaria",
    especialidad: "Ciencias",
    certificado: true,
    idioma: "Español",
    descripcion:
      "Introducción a la química orgánica y sus compuestos principales.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 22,
  },
  {
    id: 12,
    titulo: "Historia Universal Moderna",
    categoria: "Secundaria",
    especialidad: "Historia",
    certificado: false,
    idioma: "Español",
    descripcion:
      "Análisis de eventos históricos desde el siglo XVIII en adelante.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 20,
  },
  {
    id: 16,
    titulo: "Matemáticas - Secundaria I",
    categoria: "Secundaria",
    especialidad: "Matemáticas",
    certificado: false,
    idioma: "Español",
    descripcion:
      "Funciones, gráficos y álgebra básica para estudiantes de secundaria.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 15,
  },
  {
    id: 19,
    titulo: "Biología para Secundaria",
    categoria: "Secundaria",
    especialidad: "Ciencias",
    certificado: true,
    idioma: "Español",
    descripcion: "Estudio de la biología humana y ecosistemas.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 20,
  },
  {
    id: 20,
    titulo: "Redacción y Gramática Avanzada",
    categoria: "Secundaria",
    especialidad: "Comunicación",
    certificado: false,
    idioma: "Español",
    descripcion: "Mejora tus habilidades de escritura y gramática en español.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 12,
  },
  {
    id: 23,
    titulo: "Inglés Intermedio",
    categoria: "Secundaria",
    especialidad: "Idiomas",
    certificado: true,
    idioma: "Inglés",
    descripcion:
      "Consolida tus conocimientos y habilidades comunicativas en inglés, de manera efectiva.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 18,
  },
  {
    id: 25,
    titulo: "Matemáticas para Secundaria II",
    categoria: "Secundaria",
    especialidad: "Matemáticas",
    certificado: true,
    idioma: "Español",
    descripcion: "Álgebra avanzada y trigonometría para estudiantes.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 20,
  },
  {
    id: 28,
    titulo: "Dibujo Técnico para Secundaria",
    categoria: "Secundaria",
    especialidad: "Diseño",
    certificado: false,
    idioma: "Español",
    descripcion: "Conceptos y técnicas básicas del dibujo técnico.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 14,
  },
  {
    id: 29,
    titulo: "Taller de Oratoria",
    categoria: "Secundaria",
    especialidad: "Comunicación",
    certificado: true,
    idioma: "Español",
    descripcion:
      "Mejora tus habilidades para hablar en público y comunicarte eficazmente, con confianza y claridad.",
    imagen: "assets/img/secundaria/imagen-secundaria.jpeg",
    duracion: 10,
  },

  // Técnico
  {
    id: 9,
    titulo: "Microsoft Excel Intermedio",
    categoria: "Técnico",
    especialidad: "Ofimática",
    certificado: true,
    idioma: "Español",
    descripcion: "Aprende funciones, fórmulas y tablas dinámicas.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 15,
  },
  {
    id: 10,
    titulo: "Diseño y Modelación UX/UI con Figma",
    categoria: "Técnico",
    especialidad: "Diseño",
    certificado: true,
    idioma: "Inglés",
    descripcion: "Aprende prototipado moderno con Figma paso a paso.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 18,
  },
  {
    id: 13,
    titulo: "Inglés Avanzado para Negocios",
    categoria: "Técnico",
    especialidad: "Idiomas",
    certificado: true,
    idioma: "Inglés",
    descripcion:
      "Mejora tu inglés para reuniones y presentaciones empresariales.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 20,
  },
  {
    id: 14,
    titulo: "Introducción a la Programación",
    categoria: "Técnico",
    especialidad: "Tecnología",
    certificado: true,
    idioma: "Español",
    descripcion: "Conceptos básicos de programación usando Python.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 25,
  },
  {
    id: 15,
    titulo: "Diseño Gráfico - Photoshop",
    categoria: "Técnico",
    especialidad: "Diseño",
    certificado: true,
    idioma: "Español",
    descripcion: "Aprende herramientas básicas y avanzadas de Photoshop.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 20,
  },
  {
    id: 17,
    titulo: "Office 365 Completo",
    categoria: "Técnico",
    especialidad: "Ofimática",
    certificado: true,
    idioma: "Español",
    descripcion: "Aprende Word, Excel, PowerPoint y Outlook en un solo curso.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 22,
  },
  {
    id: 18,
    titulo: "Figma Avanzado",
    categoria: "Técnico",
    especialidad: "Diseño",
    certificado: true,
    idioma: "Inglés",
    descripcion: "Diseña prototipos complejos y colaborativos con Figma.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 20,
  },
  {
    id: 21,
    titulo: "Francés Básico",
    categoria: "Técnico",
    especialidad: "Idiomas",
    certificado: true,
    idioma: "Francés",
    descripcion: "Aprende francés desde cero con ejercicios prácticos.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 15,
  },
  {
    id: 22,
    titulo: "Electrónica Básica",
    categoria: "Técnico",
    especialidad: "Tecnología",
    certificado: true,
    idioma: "Español",
    descripcion:
      "Fundamentos de electricidad y electrónica para principiantes.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 18,
  },
  {
    id: 24,
    titulo: "Autocad para Principiantes",
    categoria: "Técnico",
    especialidad: "Diseño",
    certificado: true,
    idioma: "Español",
    descripcion: "Aprende a crear planos y dibujos técnicos con Autocad.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 20,
  },
  {
    id: 26,
    titulo: "Ofimática Básica",
    categoria: "Técnico",
    especialidad: "Ofimática",
    certificado: false,
    idioma: "Español",
    descripcion: "Conoce las herramientas básicas de Word y Excel.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 10,
  },
  {
    id: 27,
    titulo: "Desarrollo Web",
    categoria: "Técnico",
    especialidad: "Tecnología",
    certificado: true,
    idioma: "Español",
    descripcion:
      "Introducción a HTML, CSS y JavaScript para crear páginas web.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 25,
  },
  {
    id: 30,
    titulo: "Photoshop",
    categoria: "Técnico",
    especialidad: "Diseño",
    certificado: false,
    idioma: "Español",
    descripcion: "Aprende a crear imágenes atractivas para redes sociales.",
    imagen: "assets/img/tecnico/imagen-tecnico.png",
    duracion: 12,
  },
];

//  contenido de los cursos
const contenedorCursos = document.getElementById("contenedorCursos");

cursos.forEach((curso) => {
  const card = document.createElement("div");
  card.className = "col-md-6 col-lg-4 mb-4";

  card.innerHTML = `
  <div class="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
    <div class="position-relative overflow-hidden" style="height: 180px;">
      <img src="${curso.imagen}" alt="Curso: ${curso.titulo}" class="card-img-top object-fit-cover w-100 h-100" style="transition: transform 0.3s ease;">
      <div class="position-absolute top-0 end-0 m-2 bg-primary text-white px-2 py-1 rounded small">
        ${curso.categoria}
      </div>
    </div>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-semibold mb-2">${curso.titulo}</h5>
      <p class="card-text text-secondary flex-grow-1">${curso.descripcion}</p>
      <div class="d-flex justify-content-between align-items-center mt-3">
        <small class="text-muted">
          <i class="bi bi-clock"></i> ${curso.duracion}h
        </small>
        <a href="#" class="btn btn-sm btn-primary">Ver curso</a>
      </div>
    </div>
  </div>
`;

  contenedorCursos.appendChild(card);
});

//  filter

function mostrarCursos(lista) {
  const contenedor = document.getElementById("contenedorCursos");
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No hay cursos que coincidan con el filtro.</p>";
    return;
  }

  lista.forEach((curso) => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 mb-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${curso.imagen}" class="card-img-top" alt="${curso.titulo}" />
        <div class="card-body">
          <h5 class="card-title">${curso.titulo}</h5>
          <p class="card-text text-muted">
            Categoría: ${curso.categoria} | Especialidad: ${curso.especialidad} | Duración: ${curso.duracion}h
          </p>
          <p class="card-text">${curso.descripcion}</p>
          <a href="#" class="btn btn-primary w-100">Ver curso</a>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

function aplicarFiltros() {
  const categoria = document.getElementById("filtroCategoria").value;
  const especialidad = document.getElementById("filtroEspecialidad").value;
  const certificado = document.getElementById("filtroCertificado").value;
  const idioma = document.getElementById("filtroIdioma").value;
  const duracion = document.getElementById("filtroDuracion").value;

  const filtrados = cursos.filter((curso) => {
    if (categoria !== "todos" && curso.categoria !== categoria) return false;

    if (especialidad !== "todas" && curso.especialidad !== especialidad)
      return false;

    if (certificado !== "todos") {
      if (certificado === "con" && curso.certificado !== true) return false;
      if (certificado === "sin" && curso.certificado !== false) return false;
    }

    if (idioma !== "todos" && curso.idioma !== idioma) return false;

    if (duracion !== "todas") {
      if (duracion === "menos5" && curso.duracion >= 5) return false;
      if (duracion === "5a10" && (curso.duracion < 5 || curso.duracion > 10))
        return false;
      if (duracion === "mas10" && curso.duracion <= 10) return false;
    }

    return true;
  });

  mostrarCursos(filtrados);
}

// Agregar listeners a todos los selects
document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", aplicarFiltros);
});

// Mostrar todos los cursos inicialmente
mostrarCursos(cursos);
