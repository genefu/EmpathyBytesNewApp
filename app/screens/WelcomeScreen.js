import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native"
import { Button } from 'react-native-paper'

function WelcomeScreen({navigation}) {

    return (
        <View style={styles.container}> 
            <Text style={styles.text}>
              Welcome to the Welcome screen!!
            </Text>
            <View style={styles.imagecontainer}>
                <Image
                    style={styles.logo}
                    source={{
                    uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.nbutton} onPress={() => navigation.navigate('Home')}>
                <Text>Press Here</Text>
            </TouchableOpacity>
            <Button icon="camera" mode="bo" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
            <Button style={styles.sbutton}icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
    
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imagecontainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
    },
    text: {
        color: "#700000",
        // position: "absolute",
        textAlign: "center"
    },
    logo: {
        width: 80,
        height: 80,
        padding: 80,
    },
    button: {
        width: 100,
        height: 80,
    },
    dbutton: {
        alignItems: 'center',
        backgroundColor: '#823451',
        padding: 10,
        elevation: 10,
        borderRadius: 4,
    },
    nbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 10,
        backgroundColor: 'pink',
        shadowColor: 'grey',
        shadowOpacity: 2,
        shadowRadius: 1 ,
        shadowOffset : { width: 0.2, height: 0.2},
        margin: 10
      },
      sbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
      },
})

export default WelcomeScreen;