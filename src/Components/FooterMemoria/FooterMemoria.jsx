const FooterMemoria = () => {
  return (
    <footer className="mainFooter text-center mt-5 w-100 m-auto row">
      <article className="col-12 col-md-6 row mx-auto">
        <h2 className="fs-2 mb-2 titulo col-12">
          Corporación casa de los sueños: gestión del buen vivir para la
          apropiación del territorio.
        </h2>

        <p className="fs-5 text-danger">
          Propuesta ganadora del Portafolio Departamental de Estímulos
          <span className="fs-5 titulo"> 2023</span> en la categoría de Otras
          historias, área de Patrimonio del Instituto de Cultura y Patrimonio
          de Antioquia
        </p>
      </article>

      <article className="col-12 col-md-6 row mx-auto">
        <div
          className="footerLogo rounded-circle bg-white col-12 col-md-4 mx-auto"
        >
          <img src="./images/logo.png" alt="" />
        </div>

        <div className="footerLogo col-12 col-md-4 mx-auto">
          <img src="./images/icpa.png" alt="" />
        </div>

        <div className="logoAntioquia mx-auto">
          <img src="./images/logoGobernacion.png" alt="" />
        </div>

        <div className="footerLogo col-12 col-md-4 mx-auto">
          <img src="./images/unidos.png" alt="" />
        </div>
      </article>
    </footer>

  )
}

export default FooterMemoria
