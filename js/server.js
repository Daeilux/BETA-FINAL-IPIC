var form = document.getElementById('formulario');
    
async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    alert('datos enviados con exito');
    form.reset()
  }).catch(error => {
    alert('upps!, hubo un problema, intenta mas tarde')
  });
}
form.addEventListener("submit", handleSubmit)

