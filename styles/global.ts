import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16
    },
    link: {
        color: 'blue',
        paddingVertical: 12
    },
    tabLabel1: {
        paddingHorizontal: 8,
        color: '#676767',
        fontWeight: '500'
    },
    tabbarContainer: {
        borderRadius: 100
    },
    fileUp: {
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 65,
        marginLeft: 15,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#99CCFF",
        borderRadius: 20,
        flexDirection: 'row'
        
    },
    iconstyle: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
    },
    textstyle: {
        width: 150,
        height: 50,
        backgroundColor: "#2ccce4",
        borderRadius: 70,
        textAlign: 'center',
        fontSize: 20,
        top: 5
    },
    textShare:{
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 30,
        marginEnd: 80
    },

})