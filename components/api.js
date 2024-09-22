

export function fetchRepositories (keyword) {
  
    const apiURL = process.env.EXPO_PUBLIC_API_URL;

    return fetch(`${apiURL}?q=${keyword}`)
    .then(response => {
        if (!response.ok)
            throw new Error(`Error in fetch: ${response.status}  ${response.statusText}`); // Heitetään virhe, jos vastaus ei ole ok

        return response.json(); // Muutetaan vastaus JSON-muotoon
    })
    
}
