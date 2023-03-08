//Cambio de tema
const btn_tema = document.getElementById('check');

function cambiaTema(evento) {
  if (evento.target.checked) {
    document.documentElement.setAttribute('tema', 'oscuro');
  } else {
    document.documentElement.setAttribute('tema', 'claro');
  }
};

btn_tema.addEventListener('change', cambiaTema);


//Despliega el formulario de contacto
const boton_contacto = document.getElementById('boton_formulario');

boton_contacto.addEventListener('click', () => {
  const formulario = document.getElementById('formulario');

  if (formulario.style.display === 'none') {
    formulario.style.display = 'block';
  } else {
    formulario.style.display = 'none';
  }
});

