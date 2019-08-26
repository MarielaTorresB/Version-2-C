let Navbar = {
    render: async() => {
        let view = /*html*/ `
        <nav>
            <div class="nav-wrapper black">
            <image src="Images/hacker.png" width="7%"></image>
            <a class="brand-logo">Masked Pass </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/#/about">Acerca de</a></li>
                <li><a href="badges.html"> Mis contraseñas</a></li>
                <li><a href="collapsible.html">Mi perfil</a></li>
            </ul>
            </div>
        </nav>S
        `
        return view
    },
    after_render :async() => { }
}

export default Navbar;