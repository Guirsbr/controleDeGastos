import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#524938',
        paddingTop:50,
      },
    boxComponents: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#FDA403",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:85,
    },
    button: {
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#E3E3E3",
        borderRadius:20,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:40,
        width:325,
        height:80,
    },
    textButton: {
        fontWeight:"bold",
        fontSize:20,
        color:"#A78139",
    },
});

export default styles