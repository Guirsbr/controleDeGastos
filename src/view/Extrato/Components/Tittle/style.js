import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    boxTitle: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#E3E3E3",
        borderRadius:20,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        borderWidth:1,
        borderColor:"#000000", 
        width:325,
        transform: [
            { translateY: -50 }, ], 
    },
    imageTitle: {
        objectFit:"scale-down",
        marginRight:"auto",
        width:'25%',
    },
    textTitle: {
        fontWeight:"bold",
        fontSize:20,
        color:"#A78139",
        marginRight:"auto",
    },
});

export default styles