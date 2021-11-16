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


