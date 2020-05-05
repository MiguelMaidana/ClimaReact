import React from "react"
import {Text, StyleSheet, View, TextInput, Picker, TouchableWithoutFeedback} from "react-native"

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
                <View>
                        <Picker>
                            <Picker.Item label="--Seleccione un pais--" value=""/>
                            <Picker.Item label="Estados Unidos" value="US"/>
                            <Picker.Item label="Mexico" value="MX"/>
                            <Picker.Item label="Argentina" value="AR"/>
                            <Picker.Item label="Colombia" value="CO"/>
                            <Picker.Item label="Costa Rica" value="CR"/>
                            <Picker.Item label="España" value="ES"/>
                            <Picker.Item label="Peru" value="PE"/>
                        </Picker>
                </View>
                    <TouchableWithoutFeedback>
                        <View>
                            <Text>Buscar Clima</Text>
                        </View>
                    </TouchableWithoutFeedback>
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