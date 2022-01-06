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
    swal({
      title: "Exito",
      text: "Datos de formulario enviados, se te contestara en breve",
      icon: "success"
    })
    form.reset()
  }).catch(error => {
    swal({
      title: "Error",
      text: "Datos de formulario no enviados, intentalo mas tarde",
      icon: "warning"
    })
  });
}
form.addEventListener("submit", handleSubmit)

