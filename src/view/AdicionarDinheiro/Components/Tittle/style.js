import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    boxTitle: {
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#E3E3E3",
        borderRadius:20,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        borderWidth:1,
        borderColor:"#000000", 
        transform: [
            { translateY: -50 }, ], 
    },
    imageTitle: {
        objectFit:"scale-down",
        marginRight:10,
        width:'25%',
    },
    textTitle: {
        fontWeight:"bold",
        fontSize:20,
        color:"#A78139"
    },
    x: {
        alignItems:"center",
        justifyContent:"center",
        position: "absolute",
        transform: [
            { translateY: -20 }, ], 
    },
    z: {
        color:"#000000",
        fontSize:24,
        fontWeight:"900",
        fontStyle:"italic",
    },
});

export default styles