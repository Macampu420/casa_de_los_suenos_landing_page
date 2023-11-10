import { useState, useRef, useEffect } from 'react'
import { BotonPendon, FooterMemoria, Navbar } from '../../Components'
import { Modal } from 'bootstrap'

const MemoriaPage = () => {
  const [sourceImgModalSeleccionado, setSourceImgMetmodalSeleccionado] = useState('')
  const refModalPendon = useRef(null)
  const [totalPendones, setTotalPendones] = useState([
    'ALIMENTOS.png',
    'CAPIRO.png',
    'LIMPIEZA_SOCIAL.png',
    'VIAJE_EN_CHIVA.png',
    'RESISTENCIA.png',
    'PERRILLO.png',
    'PINERA.png',
    'QUIEBRA.png'
  ])

  useEffect(() => {
    setTotalPendones(shuffleArray(totalPendones))

    if (window.innerWidth < 768) {
      window.addEventListener('scroll', function () {
        console.log('scrolling')
        const buttons = document.querySelectorAll('.botonPendon')

        console.log(buttons)
        buttons.forEach(function (button) {
          button.classList.remove('.botonPendon.hover')
        })

        buttons.forEach(function (button) {
          const buttonPosition = button.getBoundingClientRect().top
          const startActiveZone = window.innerHeight * 0.4
          const endActiveZone = window.innerHeight * 0.6

          if (buttonPosition >= startActiveZone && buttonPosition <= endActiveZone) {
            button.classList.add('hover')
          } else {
            button.classList.remove('hover')
          }
        })
      })
    }
  }, [])

  // funcion que desordena un array
  const shuffleArray = array => {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return [...array]
  }

  const handleClickBotonPendon = rutaImagen => {
    const modalContent = refModalPendon.current
    const modal = new Modal(modalContent)
    setSourceImgMetmodalSeleccionado(rutaImagen)
    modal.show()
  }

  return (
    <>
      <Navbar />
      <br />
      <main className="container col-sm-12 px-4">
        <article className="col-11 pt-4">
          <h1>Conflicto armado y patrimonio cultural en Sonsón (1995-2005)</h1>

          <h2>Haciendo memoria para una toma de conciencia colectiva</h2>
        </article>

        <p className="abstract">
          El objetivo de esta propuesta fue comprender la incidencia del conflicto armado en
          el patrimonio cultural sonsoneño en el período de mayor violencia
          <span className="fs-4 titulo"> (1995-2005)</span> y
          contribuir a la toma de conciencia colectiva de este pasado reciente con el fin de
          aportar a los procesos de reparación simbólica y de no repetición. A través del siguiente
          contenido ofrecemos algunas herramientas investigativas y artísticas asociadas al proceso
          que llevamos a cabo bajo la modalidad de investigación-creación. Esperamos seguir contribuyendo
          con esta temática y nutrir esta página con más contenidos en el futuro cercano.
        </p>

        <a href='./files/CONFLICTO_ARMADO_Y_PATRIMONIO_CULTURAL_EN_SONSÓN.pdf' download className="row col-12 com-md-6 row-cols-1 mx-auto" style={{
          marginBottom: '1rem',
          justifyContent: 'center'
        }}>
          <BotonPendon key={'botonPDF'} imageSource={'PDF_DESCARGAR.png'} onClick={() => {}} />
        </a>
        <article className="col-12 row row-cols-1 row-cols-md-2 mx-auto g-3"
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {
            totalPendones.map((pendon, index) => (
              <BotonPendon key={index} imageSource={pendon} onClick={() => handleClickBotonPendon(pendon)} />
            ))
          }
        </article>

        <div ref={refModalPendon} id="modalPendon" className="modal fade" tabIndex="-1">
          <div className="modal-dialog modal-xl modalContainerImage">
            <img src={`./images/${sourceImgModalSeleccionado}`} alt="" className="modalImage" />
          </div>
        </div>
      </main>
      <FooterMemoria />
    </>
  )
}

export default MemoriaPage
