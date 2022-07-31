const afiliados = {
  stefanini: {
    title: 'Stefanini Group',
    content:
      'Es una multinacional brasileña que actúa en el sector de servicios en tecnologías de la información. Tienen presencia en más de 40 países y se posicionan entre las 100 mayores empresas de TI del mundo (BBC News). Ofrecen procesos de transformación digital, servicios en Consultoría, Integración, Desarrollo de Soluciones, BPO, Outsourcing para Aplicaciones e Infraestructura, entre otras soluciones.',
      url: "https://res.cloudinary.com/protalento/image/upload/v1658798648/Website/Convocatorias/logo_color_1_mm3ipm.svg"
  },
  dev: {
    title: 'DEV.F',
    content:
      'Es la escuela de tecnología más grande y premiada en Latinoamérica. Con más de 8 años, +12,000 capacitaciones y 32 ubicaciones en 12 países de LATAM, hemos sido reconocidos por organizaciones como el Banco Interamericano de Desarrollo (BID), Google, Forbes y otras gracias a los resultados que nuestra comunidad ha logrado.',
      url: "https://res.cloudinary.com/protalento/image/upload/v1658798640/Website/Convocatorias/Copia_de_Copia_de_logo-devf_1_qnz7da.svg"
  },
  sufi: {
    title: 'SUFI',
    content:
      'Es una marca creada por el grupo de trabajo de Bancolombia donde siempre podrás encontrar lo que desees ajustando siempre a tus necesidades y sin complicaciones. El ideal de Sufi de Bancolombia es estar presente para cualquier momento de tu vida, donde te acercará a lo que tanto anheles donde y cuando lo quieras.',
      url: "https://res.cloudinary.com/protalento/image/upload/v1658798632/Website/Convocatorias/Copia_de_logo-horizontal-sinSlogan_1_pjskfs.svg"
  },
  primera: {
    title: 'Primera HFC',
    content:
      'Es una organización de alto impacto social que enseña idiomas a los jóvenes y los apoya para mejorar sus oportunidades. Su misión es abrir oportunidades laborales para los jóvenes a través del poder de los idiomas.',
      url: "https://res.cloudinary.com/protalento/image/upload/v1658798623/Website/Convocatorias/Logos_y_Vigilado_Sufi_LOGOS_Logo-rojo_1_zoqebd.svg"
  },
  flevo: {
    title: 'Flevo',
    content: '????????????????????',
    url: "https://res.cloudinary.com/protalento/image/upload/v1658798615/Website/Convocatorias/Isologo-Flevo-secundario-transparente-01-1-e1644858311932_1_ea6psp.svg"
  },
};

const container = document.querySelector('.afiliados__container');

const afiliadosBox = document.querySelectorAll('.afiliados__box');

afiliadosBox.forEach((item) => {
  item.addEventListener('click', () => {
    const {url, title, content} = afiliados[item.id]
    container.innerHTML = `
    <div>
    <img
      src="${url}"
      alt=""
    />
  </div>

  <div>
    <h3
      class="title title--begin medium-bigger-size c-yellow medium-size"
    >
      ${title}
    </h3>

    <p class="medium-size line-height-md mT-5">
      ${content}
    </p>
  </div>
        `;
  });
});
