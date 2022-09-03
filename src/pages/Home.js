import getData from "../utiles/getData";

const Home = async () => {
    const characters = await getData('character/');
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="Characters-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.id} - ${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>  
    `;
    return view;
};


export default Home;
