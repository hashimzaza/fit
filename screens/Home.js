import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { CustomSafeAreaView } from "../components.js/CustomAreaView";

export function Home() {
    return (
        <CustomSafeAreaView>
            <ScrollView>
                <View style={styles.tem}>
                    <Image source={require('../assets/black.jpg')} style={styles.black} />
                    <Text style={styles.mus}>WORKOUTS FOR GAINING MUSCLES</Text>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    )
}


const styles = StyleSheet.create({
    tem: {
        flex: 1,
        alignItems: 'center',
        
    },
    mus: {
        color:'#3C4646',
        fontWeight:'bold',
        fontSize:20
    },
    black:{
        width:350,
        height:200,
        borderRadius:100
    }
})