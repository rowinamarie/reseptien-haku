import { FlatList, View, Text, StyleSheet, Image } from "react-native"; // Tarvittavat komponentit React Nativesta

export default function RepoTable({ repositories }) { // Komponentti, joka näyttää reseptit
    return (
        <FlatList
            data={repositories} // Lista, jota näytetään
            keyExtractor={(item) => item.idMeal.toString()} // Unikaalinen avain jokaiselle listan itemille
            renderItem={({ item }) => ( // Miten jokainen item näytetään
                <View style={styles.container}>
                    <Text style={styles.repoName}>{item.strMeal}</Text> // Näytetään reseptin nimi
                    <Image source={{ uri: item.strMealThumb }} style={styles.image} /> // Näytetään reseptin kuva
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20, // Lisää väliä eri itemien väliin
        alignItems: 'center', // Keskitetään sisältö
    },
    repoName: {
        fontSize: 18, // Reseptin nimen tekstikoko
        fontWeight: "bold", // Lihavoitu teksti
    },
    image: {
        width: 100, // Kuvan leveys
        height: 100, // Kuvan korkeus
        borderRadius: 8, // Pyöristetään kulmat
        marginTop: 10, // Lisätään väli nimeen ja kuvaan
    },
});
