import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Keyboard, ActivityIndicator } from 'react-native';
import RepoTable from './components/RepoTable';
import  {fetchRepositories} from './components/api';



export default function App() {
    // keyword pitää hakusanatiedon
    const [keyword, setKeyword] = useState('');
    
    // repositories tallentaa haetut GitHub-repositoriot
    const [repositories, setRepositories] = useState([]);
    
    // loading hallitsee ActivityIndicatorin näyttämistä latauksen aikana
    const [loading, setLoading] = useState(false);

    // handleFetch suorittaa API-haun ja päivittää repositoriolistauksen
    const handleFetch = () => {
        setLoading(true); // Näyttää latausindikaattorin haun aikana
        
        // Sulkee näppäimistön haun aloituksen yhteydessä
        Keyboard.dismiss();

        // Tehdään fetch-kutsu GitHubin repository-hakuun käyttäen hakusanaa
      fetchRepositories (keyword)
            .then(data => setRepositories(data.items)) // Päivitetään repositoriot
            .catch(err => console.error(err)) // Käsitellään mahdolliset virheet
            .finally(() => setLoading(false)); // Lopetetaan latausindikaattorin näyttö
    };

    return (
        <View style={styles.container}>
            {/* Tekstikenttä, johon käyttäjä voi syöttää hakusanan */}
            <TextInput
                style={styles.input}
                placeholder='keyword' // Paikkamerkki tekstikentässä
                value={keyword} // Sidotaan tekstikentän arvo hakusanaan
                onChangeText={text => setKeyword(text)} // Päivitetään hakusana käyttäjän syötteen perusteella
            />
            
            {/* Painike, joka käynnistää haun */}
            <Button title="Find" onPress={handleFetch} />

            {/* Näytetään latausindikaattori, jos loading on true */}
            {loading && <ActivityIndicator size="large" />}
            
            <RepoTable repositories={repositories}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Valkoinen tausta
        alignItems: 'center', // Kohdistetaan lapset keskelle vaakasuunnassa
        justifyContent: 'flex-start', // Kohdistetaan lapset pystysuunnassa alkuun
        paddingTop: 100, // Lisätään yläreunaan 100px tyhjää tilaa
    },
    input: {
        fontSize: 18, // Tekstikoko
        width: 200, // Tekstikentän leveys
        marginBottom: 20, // Väli tekstikentän ja painikkeen välillä
    },
    repoName: {
        fontSize: 18, // Repositorion nimen tekstikoko
        fontWeight: "bold", // Lihavoitu teksti
    },
    repoDescription: {
        fontSize: 16, // Repositorion kuvauksen tekstikoko
    },

});
