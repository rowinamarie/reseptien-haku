

export async function fetchRepositories(keyword) {
    const apiURL = process.env.EXPO_PUBLIC_API_URL;

    console.log(`Fetching URL: ${apiURL}?i=${keyword}`);

    const response = await fetch(`${apiURL}?i=${keyword}`); 
    if (!response.ok) {
        throw new Error(`Error in fetch: ${response.status} ${response.statusText}`);
    }

    const data = await response.json(); // Odotetaan JSON-muotoon muuttamista
    return data.meals; // Palautetaan oikea data
}
