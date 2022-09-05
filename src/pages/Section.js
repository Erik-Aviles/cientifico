import getData from "@utiles/getData";


const Section =  async() => {
    const characters = await getData('character');
    const locations = await getData('location');
    const episodes = await getData('episode');
    const view = `
    <section class="Section">
        <a href="#/characters/">
            <p>Characters: 
                <span>
                    ${characters.info.count}
                </span>
            </p>
        </a>
        <a href="#/locations/">
            <p>Locations:
                <span>
                    ${locations.info.count}
                </span>
            </p>
        </a>
        <a href="#/episodes/">
            <p>Episodios:
                <span>
                    ${episodes.info.count}
                </span>
            </p>
        </a>
    </section>
    `;
    return view;
};

export default Section;