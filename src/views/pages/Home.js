let Home = {
    render: async() => {
        let view = /*html*/ `
        <div class="" id="contenido">
        <div class="seccion1">
              <section id="inicio" class="">
                <h2> Introduce tu <br> contraseña / contraseña cifrada </h2>
                <input id="texto" type="text" size="30" placeholder="Contraseña / Contraseña Cifrada" name="password">
                <h2>Clave de seguridad</h2>
                <input id="offset" type="number" size="30" placeholder="Clave de seguridad" name="offset">
                <br>
                <button id="encode-button" type="button" name="encode-Button">CIFRAR</button>
                <button id="decode-button" type="button" name="decode-Button"> RECUPERAR CONTRASEÑA </button>
              </section>
        </div>
        `
        return view
    },
    after_render: async() =>{

    }
}

export default Home;