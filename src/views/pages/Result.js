let Result = {
    render : async() => {
        let view = /*html*/ `
        </section>
            <section id="resultado" class="disappear">
                <h1> Tu contraseña </h1>
                <h1 id="change">  cifrada es </h1>
                <input type="text" size="30" id="encoded">
                <br>
                <h1 id="change-2"> Tu clave secreta es </h1>
                <input type="text" size="30" id="key" class="">
                <br>
            <button id="home2-button" type="button" name="home2"> INICIO </button>
        </section>
        `
    return view
    }
    
}

export default Result;