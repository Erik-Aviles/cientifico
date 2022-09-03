import getData from "../utiles/getData";


const ListCharacters = async() => {
    const listCharacters = await getData('/character');
    const view = `
    <div class="List-characters List" id="listaCharacters">
        <h1 class="Title-list-characters">Todos los personajes</h1>
        <ul>
        ${listCharacters.results.map(character => `
            <li>
                ${character.name}
            </li>
            `).join('')}
        </ul>
    </div>
    `;
    return view;
}

export default ListCharacters;