import PropTypes from 'prop-types'

const BotonPendon = ({ imageSource, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className='
          col-12
          col-md-5
          mx-md-2
          rounded-5
          '
      >
        <img className='botonPendon w-100 rounded-3 shadow-lg' src={`./images/botones_memoria/${imageSource}`} alt=""/>
        </div>

    </>

  )
}

export default BotonPendon

BotonPendon.propTypes = {
  imageSource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
