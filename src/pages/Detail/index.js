import react from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Detail() {

    return (
        <View style={styles.container}>
            <Text>Pagina Detalhes do post</Text>
        </View>

    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justfyContent: 'center'
    }

})

