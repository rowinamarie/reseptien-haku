import { FlatList, View, Text, StyleSheet, Image } from "react-native";

export default function RepoTable({ repositories }) {
    return (
        <FlatList
            data={repositories}
            keyExtractor={(item) => item.idMeal.toString()}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <Text style={styles.repoName}>{item.strMeal}</Text>
                    <Image source={{ uri: item.strMealThumb }} style={styles.image} />
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
        fontSize: 18,
        fontWeight: "bold",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginTop: 10,
    },
});
