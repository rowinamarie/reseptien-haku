import { FlatList, View, Text, StyleSheet } from "react-native"


export default function RepoTable({repositories}) {

    return (
    /* Lista näytettävistä repositorioista */ 
    <FlatList
        data={repositories} // Repositoriot, joita näytetään listassa
        keyExtractor={(item) => item.id.toString()} // Unikaalinen avain jokaiselle listan itemille
        renderItem={({ item }) =>
            <View>
                {/* Repositorion nimi */}
                <Text style={styles.repoName}>
                    {item.full_name}
                </Text>
                {/* Repositorion kuvaus */}
                <Text style={styles.repoDescription}>
                    {item.description}
                </Text>
            </View>}
    />
    
)
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
})