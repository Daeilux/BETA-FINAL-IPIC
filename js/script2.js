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
        <p>CONTOLOGIA DEL LENJUAGE</p>
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


