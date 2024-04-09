import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    button: {
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#E3E3E3",
        borderRadius:20,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        marginTop:40
    },
    imageButton: {
        objectFit:"scale-down",
        marginRight:10,
        width:'25%',
    },
    textButton: {
        fontWeight:"bold",
        fontSize:20,
        color:"#A78139"
    },
});

export default styles