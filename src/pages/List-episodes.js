import getData from "@utiles/getData";


const ListEpisodes = async() => {
    const listEpisodes = await getData('/episode');
    const view = `
    <div class="List-episodes List" id="listaEpisodes">
        <h1 class="Title-list-episodes">Todos los episodios</h1>
        <ul>
        ${listEpisodes.results.map(episode => `
            <li>
                ${episode.name}
            </li>
            `).join('')}
        </ul>
    </div>
    `;
    return view;
}

export default ListEpisodes;
