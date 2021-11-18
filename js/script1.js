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
      <i class="fas fa-terminal"></i>
      <p>MANTENIMIENTO</p>
    </div>

    <ul class="info">
    <li>Mantenimiento de Hardware</li>
    <li>Mantenimiento de Software</li>
    </ul>

    <div class="titulosInfo">
      <i class="fas fa-terminal"></i>
      <p>PROGRAMACIÓN</p>
    </div>

    <ul class="info">
    <li>Programación en lenjuage c++</li>
    <li>Programación en lenjuage Vb</li>
    </ul>

    <div class="titulosInfo">
      <i class="fas fa-terminal"></i>
      <p>PROGRAMACIÓN MOVIL</p>
    </div>

    <ul class="info">
    <li>Aprende a crear aplicaciones moviles para android</li>
    </ul>

    <div class="titulosInfo">
      <i class="fas fa-terminal"></i>
      <p>PORGRAMACIÓN WEB</p>
    </div>

    <ul class="info">
    <li>Frontend</li>
    <li>Backend</li>
    </ul>    

    <div class="titulosInfo">
      <i class="fas fa-terminal"></i>
      <p>BASE DE DATOS</p>
    </div>

    <ul class="info">
    <li>Sql</li>
    <li>Mysql</li>
    </ul>

    <div class="titulosInfo">
      <i class="fas fa-terminal"></i>
      <p>PAQUETERIA</p>
    </div>

    <ul class="info">
    <li>Word</li>
    <li>Powerpoint</li>
    <li>Excel</li>
    </ul>

    <div class="titulosInfo">
      <i class="fas fa-terminal"></i>
      <p>ROBOTICA</p>
    </div>

    <ul class="info">
    <li>R+ Motion</li>
    <li>R+ Task</li>
    <li>R+ Design</li>
    </ul>

    <div class="titulosInfo">
      <i class="fas fa-terminal"></i>
      <p>DISEÑO GRAFICO</p>
    </div>

    <ul class="info">
    <li>Solidworks</li>
    <li>Corel draw</li>
    <li>Ilustrator</li>
    <li>Sketchup</li>
    </ul>
    
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