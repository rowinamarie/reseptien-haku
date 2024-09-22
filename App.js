import { useState } from 'react'; // Tuodaan useState-hook, joka hallitsee komponentin tilaa
import { StyleSheet, TextInput, View, Button, Keyboard, ActivityIndicator } from 'react-native'; // Tuodaan tarvittavat komponentit React Nativesta
import RepoTable from './components/RepoTable'; // Tuodaan RepoTable-komponentti, joka näyttää reseptit
import { fetchRepositories } from './components/api'; // Tuodaan fetchRepositories-funktio API-kutsujen tekemiseen

export default function App() {
    // Tila keywordille, repositoriesille ja loading-tilalle
    const [keyword, setKeyword] = useState(''); // Hakusana, jota käyttäjä syöttää
    const [repositories, setRepositories] = useState([]); // Haetut reseptit tallennetaan tähän
    const [loading, setLoading] = useState(false); // Lataustila, joka näyttää latausindikaattorin

    const handleFetch = () => {
        setLoading(true); // Asetetaan loading-tila true ennen haun aloittamista
        Keyboard.dismiss(); // Suljetaan näppäimistö

        // Tehdään API-kutsu ja päivitetään repositoriot tai käsitellään virheet
        fetchRepositories(keyword)
            .then(data => setRepositories(data)) // Päivitetään repositoriot haetulla datalla
            .catch(err => console.error(err)) // Kirjataan virhe konsoliin, jos kutsu epäonnistuu
            .finally(() => setLoading(false)); // Asetetaan loading-tila false haun päätyttyä
    };

    return (
        <View style={styles.container}> // Pääkontaineri, joka sisältää kaikki komponentit
            <TextInput
                style={styles.input} // Tekstikenttätyylit
                placeholder='keyword' // Paikkamerkki tekstikentässä
                value={keyword} // Sidotaan tekstikentän arvo hakusanaan
                onChangeText={text => setKeyword(text)} // Päivitetään hakusana käyttäjän syötteen perusteella
            />
            <Button title="Find" onPress={handleFetch} /> // Painike haun aloittamiseen
            {loading && <ActivityIndicator size="large" />} // Näytetään latausindikaattori, jos loading on true
            <RepoTable repositories={repositories} /> // Näytetään haetut reseptit RepoTable-komponentissa
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ota koko käytettävissä oleva tila
        backgroundColor: '#fff', // Valkoinen tausta
        alignItems: 'center', // Keskitetään sisältö vaakasuunnassa
        justifyContent: 'flex-start', // Kohdistetaan sisältö pystysuunnassa alkuun
        paddingTop: 100, // Lisätään yläreunaan tilaa
    },
    input: {
        fontSize: 18, // Tekstin koko
        width: 200, // Tekstikentän leveys
        marginBottom: 20, // Väli tekstikentän ja painikkeen välillä
    },
});
