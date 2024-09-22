export async function fetchRepositories(keyword) { // Funktio, joka tekee API-kutsun
    const apiURL = process.env.EXPO_PUBLIC_API_URL; // Haetaan API-URL ympäristömuuttujasta

    // Tulostetaan käytetty URL konsoliin
    console.log(`Fetching URL: ${apiURL}?i=${keyword}`);

    const response = await fetch(`${apiURL}?i=${keyword}`); // Tehdään fetch-kutsu API:in
    if (!response.ok) { // Tarkistetaan, että vastaus on ok
        throw new Error(`Error in fetch: ${response.status} ${response.statusText}`); // Heitetään virhe, jos vastaus ei ole ok
    }

    const data = await response.json(); // Odotetaan JSON-muotoon muuttamista
    return data.meals; // Palautetaan haettu data
}
