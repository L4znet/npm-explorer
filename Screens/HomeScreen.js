import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {useEffect, useState} from "react";

export default function HomeScreen() {

    const [text, onChangeText] = useState("");
    const [packages, setPackages] = useState([]);


    // https://registry.npmjs.org/-/v1/search?text=computer

    async function searchRequest(searchParam) {

        const response = await fetch("https://registry.npmjs.org/-/v1/search?text=" + searchParam);
        const packages = await response.json();
        setPackages(packages)
    }

    useEffect( () => {

        searchRequest("Computer")

    }, [packages]);


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    function nextPage(){

    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.searchcontainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder={"Votre recherche"}
                    value={text}
                />
            </SafeAreaView>
            <Text style={styles.title}>Suggestions de packages</Text>
            <SafeAreaView style={styles.packagesList}>
                <FlatList
                    data={packages}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={nextPage}>
                            <View style={styles.itemPackage}>
                                <Text>Touch Here</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width:300,
    },
    searchcontainer:{
        backgroundColor:"#d23939",
        width:"100%",
        height:300,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        width:"80%",
        height:80,
        backgroundColor:"#FFF",
        fontSize:20,
        paddingLeft:20,
        borderRadius:10
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        marginTop:40
    },
    packagesList:{
        width:"80%",
        marginTop:30
    },
    itemPackage:{
        backgroundColor:"#d23939",
        width:"100%",
        height:100,
        marginBottom:20
    }
});
