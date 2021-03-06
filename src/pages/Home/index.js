import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'
import api from '../../Services/api'

export default function Home() {
    const navigation = useNavigation();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadData() {
            const category = api.get('/api/categories?populate=icon')
            setCategories(category.data.data)
        }
        loadData();
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>Dev Blog</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Feather name="search" size={24} color='#fff' />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232630'

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 18,
        marginBottom: 24
    },
    name: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
    }
})

