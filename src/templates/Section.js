import getData from "../utiles/getData";


const Section =  async() => {
    const characters = await getData('character');
    const locations = await getData('location');
    const episodes = await getData('episode');
    const view = `
    <section class="Section">
        <p>Characters: <span>${characters.info.count}</span></p>
        <p>Locations: <span>${locations.info.count}</span></p>
        <p>Episodios: <span>${episodes.info.count}</span></p>
    </section>
    `;
    return view;
};

export default Section;