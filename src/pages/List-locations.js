import getData from "@utiles/getData";


const ListLocations = async() => {
    const listlocations = await getData('/location');
    const view = `
    <div class="List-locations List" id="listLocationS">
        <h1 class="Title-list-locations">Todas las localizaciones</h1>
        <ul>
        ${listlocations.results.map(location => `
            <li>
                ${location.name}
            </li>
            `).join('')}
        </ul>
    </div>
    `;
    return view;
}

export default ListLocations;
