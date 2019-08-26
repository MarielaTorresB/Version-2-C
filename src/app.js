//ESTA ES UNA DE LAS PARTES PRINCIPALES DEL SPA: EL ENRUTADOR
"use strict"; //No entiendo (?)

//Importando vistas
import Home         from './src/views/pages/Home.js.js'
import About        from './src/views/pages/About.js.js'
import Error404     from './src/views/pages/Error404.js.js'
import PostShow     from './src/views/pages/PostShow.js.js'
import Register     from './src/views/pages/Register.js.js'


//Importando componentes
import Navbar       from './src/views/components/Navbar.js.js'
import Bottombar    from './src/views/components/Bottombar.js.js' 

//Importando utilidades (?)
import Utils        from './src/services/Utils.js.js'

// Lista de rutas soportadas. Cualquier ruta distinta dara como resultado Error 404.
const routes = {
    '/'             : Home
    , '/about'      : About
    , '/p/:id'      : PostShow
    , '/register'   : Register
};
//IMPORTANTE: Asegurarnos de que todos los enlaces en la aplicación también tengan el "#" en ellos


// El código del enrutador. Toma una URL, verifica la lista de rutas admitidas y luego muestra la página de contenido correspondiente.
const router = async () => {

    // Elementos de vista de carga diferida:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    // Muestra el header y el footer de la página 
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();

    //La función de enrutador primero toma la url de la barra de direcciones y, utilizando la función parseRequestURL, la divide en nuestro esquema de ruta de recurso, identificador y verbo. 
    // Obtiene el URL analizado de la barra de direcciones
    let request = Utils.parseRequestURL()

    // Analiza la URL y, si tiene una parte de id, la cambia por la cadena ": id"
    //Luego, esta url se reforma concatenando cada elemento del esquema de url. 
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // La cadena de URL final se compara con un mapa existente de rutas que admitimos.
    //  Si la URL analizada no está en nuestra lista de rutas compatibles, muestra error 404 en su lugar
    // Obtiene la página de nuestro hash de rutas compatibles.
    let page = routes[parsedURL] ? routes[parsedURL] : Error404 
    //Aquí cada ruta admitida se asigna a una página de contenido. 
    //verificamos si la cadena de URL analizada existe como una clave en nuestro mapa de rutas. 
    //Si lo hace, la variable page obtiene el valor correspondiente. 
    //De lo contrario, obtiene el valor de la página error404.
    content.innerHTML = await page.render(); //Mostramos dicha página
    await page.after_render();
  
}

// "Escucha" el cambio de hash:
window.addEventListener('hashchange', router);

// "Escucha" la carga de la página: se activa cuando se usa un evento de carga del navegador. 
// Luego llama a la función de enrutador. 
window.addEventListener('load', router);

