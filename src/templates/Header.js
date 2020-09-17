const Header = () => {
    const view = `
    <div class="nav">
        <div class="logo">
            <h1 class="logo_name">MOVIES</h1>
        </div>
        <ul class="links">
            <li><a href="#/" class="link">Home</a></li>
            <li><a href="#/about" class="link">About</a></li>
        </ul>
    </div>
    `
    return view;
};

export default Header;