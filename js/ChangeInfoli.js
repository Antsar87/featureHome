const li = document.querySelectorAll('.box__li');
const content = document.getElementById('content');

const text = [
  [
    'Aprender a trabajar con HTML y CSS para desarrollar sitios web estáticos, responsivos',
    'Uso básico de Git y Github para generar portafolio y desplegar sitios web.',
    'Lógica de programación con JavaScript para manipular HTML y CSS mediante el DOM',
  ],
  [
    'Aprender a reconocer y utilizar estructuras de datos y algoritmos de búsqueda y ordenamiento con JavaScript para manejar datos eficientemente.',
  ],
  [
    `Obtener los conocimientos básicos sobre desarrollo de SPAs con React.js para crear aplicaciones robustas del lado del cliente.
    `,
  ],
  [
    `
    Aprender a desarrollar REST APls con Express.js y como funcionan las bases de datos y el lenguaje de consulta SQL para mejorar la persistencia de datos de una aplicación.
    `,
  ],
  [
    `
    Aprender técnicas avanzadas de desarrollo Backend como arquitectura mvc, manejo de errores y autenticación para desarrollar aplicaciones backend fáciles de escalar y mantener.
    `,
  ],
  [
    `
    Describir información relacionada con el desarrollo de software.
    `,
    `
    Intercambiar información acerca de la lógica, sus principios y métodos.  
    `,
    `
    Identificar información acerca de la historia del software y sus características.

    `,
    `
    Hacer sugerencias en el contexto de compartir ideas relacionadas con el desarrollo de software.
    `,
    `
    Identificar características relacionadas con el desarrollo de software.
    `,
  ],
  [
    `
    Entender información esencial acerca de conceptos, principios y metodologías. 
    `,
    `
    Hablar acerca de técnicas de programación, casos de uso, tipo y secuencias. 
    `,
    `
    Intercambiar información acerca de conceptos y principios en el desarrollo de software.
    `,
    `
    Intercambiar información relacionada con el desarrollo de software y los lenguajes de programación.
    `,
  ],
  [
    `
    Dar información detallada relacionada con la historia de los lenguajes de programación en diferentes periodos.
    `,
    `
    Explicar rasgos fundamentales relacionados con los lenguajes de programación en diferentes contextos.
    `,
    `
    Hablar de temas particulares y específicos relacionados con el desarrollo de software.
    `,
    `
    Explicar en detalle cómo funcionan diferentes lenguajes de programación.
    `,
  ],
  [
    `
    Acompañamiento en procesos de selección con nuestros aliados.
    `,
    `
    Creación de tu marca personal.
    `,
    `
    Activación en redes profesionales.
    `,
    `
    Dashboard de seguimiento a ofertas laborales.
    `,
    `
    Negociaciones laborales y salariales.
    `,
  ],
  [
    `
    Alineación de tus talentos, propósito y habilidades.
    `,
    `
    Aterrizar plan de carrera.
    `,
    `
    Construcción de redes de contacto.
    `,
    `
    Plan y proyecciones económicas de carrera.
    `,
    `
    Desarrollo de habilidades del siglo 21
    `,
  ],
  [
    `
    Aprender a aprender.
    `,
    `
    Cómo administrar nuestra energía y alcanzar nuestros sueños.
    `,
    `
    Mentalidad de crecimiento y determinación para retar el cerebro.
    `,
    `
    Uso del tiempo para tener equilibrio.
    `,
    `
    Decidir por prioridad e importancia para crecer.
    `,
  ],
];

li.forEach((item, idx) => {
  item.id = idx;

  item.addEventListener('click', () => {
    
    li.forEach((item) => item.classList.remove('bg-blueLight'));
    
    if (item.id === idx.toString()) item.classList.add('bg-blueLight');

    changeInfo(idx);
  });
});

changeInfo(0)

// change info
function changeInfo(id) {
  // limpia
  content.innerHTML = '';

  // Crear
  text[id].map((parrafo, idx) => {
    let p = document.createElement('p');

    let text = document.createTextNode(parrafo);

    p.appendChild(text);

    p.classList.add('line-height-md', 'medium-size');

    if (idx !== 0) {
      p.classList.add('mT-1');
    }

    content.appendChild(p);
  });
}
