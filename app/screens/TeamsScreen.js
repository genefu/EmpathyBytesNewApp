import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { teamData } from "../../constants/teamsData";
import { useFonts } from 'expo-font';
import BigButton from '../../constants/BigButton';
import { COLORS, FONT, SIZES } from '../../constants/theme';

//appearance of each button + trying to push the new screen onto nav stack
const TeamItem = (props) => {
    const navigation = useNavigation();

    //font :(
    const [fontsLoaded] = useFonts({
        "DM-Sans": require('../../assets/fonts/DMSans-Regular.ttf'),
        "DM-Sans-I": require('../../assets/fonts/DMSans-Italic.ttf'),
        "DM-Sans-B": require('../../assets/fonts/DMSans-Bold.ttf'),
        "DM-Sans-BI": require('../../assets/fonts/DMSans-BoldItalic.ttf'),
        "DM-Sans-L": require('../../assets/fonts/DMSans-Light.ttf'),
        "DM-Sans-LI": require('../../assets/fonts/DMSans-LightItalic.ttf'),
        "DM-Sans-EL": require('../../assets/fonts/DMSans-ExtraLight.ttf'),
        "DM-Sans-ELI": require('../../assets/fonts/DMSans-ExtraLightItalic.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <BigButton
            onPress={() => {
                navigation.navigate("Individual Team", {name: props.name, description: props.description})
            }}
            name = {props.name}
            dir = {props.id % 2 == 1 ? true : false}
            >
        </BigButton>
        /*
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                navigation.navigate("Individual Team", {name: props.name, description: props.description})
            }}>
            <Text style={[styles.text, {fontFamily: "DM-Sans-B"}]}> { props.name } </Text>
        </TouchableOpacity>
        */
    );
};

//render the button idrk actually
const renderItem = ({ item }) => {
    return (
        <TeamItem name={item.name} description={item.description} id={item.id}/>
    )
};

//flatlist is like scrollview but better apparently
function Teams({}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Teams </Text>
            <FlatList
                data={teamData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={
                    <View style={styles.separator}/>
                }>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        paddingTop: 50
    },
    button: {
        backgroundColor: "#004B87",
        width: 150,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 23
    },
    text: {
        color: "#FFFFFF"
    },
    title: {
        fontSize: 30,
        paddingBottom: 20,
        paddingTop: 10,
        color: "#FFFFFF"
    },
    separator: {
        height: 10,   
    }
})

export default Teams;