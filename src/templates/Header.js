
const Header = () => {
    const  view = `
    <div class="Header-main">
        <div class="Header-logo">
            <h2>
                <a href="#/">
                    <img src="https://the-rick-and-morty-api.herokuapp.com/static/media/logo.1c95a02a.png" alt="Rick and Morty" />
                </a>
            </h2>
        </div> 
        <div class="Header-nav">
            <h2>
               
                <a href="#/about/"> About
                </a>
            </h2>
        </div>
    </div>
    `;
    return view;
};

export default Header;