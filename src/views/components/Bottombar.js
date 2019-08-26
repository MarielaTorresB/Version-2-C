let Bottombar = {
    render: async () => {
        let view =  /*html*/ `
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    Elaborado por: Mariela Torres Inc.
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;

//Este es el footer