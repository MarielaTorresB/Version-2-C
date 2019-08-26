let Bottombar = {
    render: async () => {
        let view =  /*html*/ `
        <footer class="page-footer black">
          <div class="footer-copyright">
            <div class="container">
            © 2019 Mariela Inc.
            </div>
          </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;

//Este es el footer