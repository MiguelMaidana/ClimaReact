import React from "react"
import {Text, StyleSheet, View, TextInput} from "react-native"

const Formulario =() =>{
return (

       <>
        <View style={styles.formulario}>
                <View>
                    <TextInput
                        placeholder="Ciudad"
                        placeholderTextColor="#666"
                    />
                </View>
        </View>
       </>
    )
}

export default Formulario

const styles = StyleSheet.create({
    formulario :{
        marginTop :100
    }
})