import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function Oppage() {
    return (
        <>
            <View style={styles.body}>
                <View style={styles.view}>
                    <Image source={require('../assets/getfit.jpg')} style={styles.Open} />
                    <Text style={styles.logo}>GET FIT</Text>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 6,
        alignItems: 'center',
        backgroundColor: '#49D6D6',

    },
    view: {
        height:150,
        width:150,
        borderRadius:200,
        flex:1,
        marginTop:250
        
        
    },
    Open: {
        width: 150,
        height: 150,
        borderRadius:200
    },
    logo: {
        color:'#3C4646',
        fontSize:20,
        fontWeight:'900',
        fontStyle:'italic',
        marginLeft:40
    }
    

});