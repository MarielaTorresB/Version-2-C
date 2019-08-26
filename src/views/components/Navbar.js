let Navbar = {
    render: async() => {
        let view = /*html*/ `
        <header>
            <image src="Images/hacker.png" width="7%"></image>
            <h1> MaskedPass </h1>
            <a href="/src/#/about"> Acerca de </a>
        </header>
        `
        return view
    },
    after_render :async() => { }
}

export default Navbar;

