const createInfo = () => {
    let container = document.getElementById('infoC')
    let element = document.createElement('article');
    element.id = 'Temario'

    element.innerHTML = `
  
      <div id="controlInfo">
      <i class="far fa-times-circle" id="close"></i>
      </div>
  
      <div id="infoTemario">
  
      <div class="titulosInfo">
        <i class="fas fa-bookmark"></i>
        <p>INGLES</p>
      </div>
  
      <div class="titulosInfo">
        <i class="fas fa-bookmark"></i>
        <p>DERECHO</p>
      </div>
  
      <div class="titulosInfo">
        <i class="fas fa-bookmark"></i>
        <p>TAQUIGRAFIA</p>
      </div>
  
      <div class="titulosInfo">
        <i class="fas fa-bookmark"></i>
        <p>MECANOGRAFIA</p>
      </div>
  
      <div class="titulosInfo">
        <i class="fas fa-bookmark"></i>
        <p>CORRESPONDENCIA ETRANJERA</p>
      </div>
  
      <div class="titulosInfo">
        <i class="fas fa-bookmark"></i>
        <p>CORRESPONDENCIA</p>
      </div>

      <div class="titulosInfo">
        <i class="fas fa-bookmark"></i>
        <p>PAQUETERIA</p>
      </div>
  
      <div class="titulosInfo">
        <i class="fas fa-bookmark"></i>
        <p>ONTOLOGÍA DEL LENJUAGE</p>
      </div>
  
      <div class="titulosInfo">
        <i class="fas fa-bookmark"></i>
        <p>CONTABILIDAD</p>
      </div>
      
      </div>
          
      `;

    container.appendChild(element);

    const delet = () => {
        let element = document.getElementById('Temario')
        element.remove()
    }

    const deletInfo = () => {
        let container = document.getElementById('close')
        container.addEventListener('click', delet)
    }
    deletInfo()

}

const Create = () => {
    let element = document.getElementById('button')
    element.addEventListener('click', createInfo)
}
Create()


const createRegistro = () =>{
  let container = document.getElementById('infoC')
  let element = document.createElement('article');
  element.id = 'Register'

  element.innerHTML = `
  <div id="controlRegistro">
    <i class="far fa-times-circle" id="close2"></i>
  </div>

  <div id="infoRegistro">
  <h2>Requisitos</h2>
  <ul>
    <li>Certificado de secundaria original y 2 copias</li> 
    <li>Acta de nacimiento original y 2 copias</li>
    <li>5 fotografías tamaño infantil</li>
    <li>Clave única de registro de población (CURP)</li>
  </ul>

  <p>Gracias por estar en contacto con nosotros, por favor ingresa tus datos en la siguiente forma, para tener contacto contigo:</p>
  <a href="https://ipic.aulaescolar.net//app/inicio" target="_blank">Ficha de inscripcion</a>  
  
  </div>
  `
  container.appendChild(element)

  const removeRegister = () => {
    let element = document.getElementById('Register')
    element.remove()
  }
  
  const deletInfoRegister = () => {
    let container = document.getElementById('close2')
    container.addEventListener('click', removeRegister)
  }
  deletInfoRegister()
}

const CreateInfo = () => {
  let element = document.getElementById('btnRegister')
  element.addEventListener('click', createRegistro)
}
CreateInfo()