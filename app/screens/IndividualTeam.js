import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"

function IndividualTeam({navigation}) {
    return (
        <View style={styles.container}> 
            <View style={styles.imagecontainer}>
                <Image
                    style={styles.teamImage}
                    source={{
                    uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
                />
            </View>
            <Text style={styles.titleText}>
                App Team!!
            </Text>
            <Text style={styles.text}>
                This team is lead by the all powerful supreme leader, Genesis Fu!
            </Text>
            <Text style={styles.text}>
                Press this button to return back to Welcome Screen.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')} >
                <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    imagecontainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    text: {
        color: "#000000",
    },
    button: {
        width: 100,
        height: 80,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#000000",
    },
    teamImage: {
        width: 80,
        height: 80,
        padding: 80,
    },
})

export default IndividualTeam;