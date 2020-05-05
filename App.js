import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard} from 'react-native';
import Formulario from "./commponents/Formulario"

const  App = () => {

  const [busqueda, guardarBusqueda] = useState({
    ciudad :"",
    pais :""

  }) 

  const ocultarTeclado=()=>{
    Keyboard.dismiss()
  }

  return (
    <>
         <TouchableWithoutFeedback onPress={()=> ocultarTeclado()}>
            <View style={styles.app}>
                <View style={styles.contenido}>
                    <Formulario 
                      busqueda={busqueda}
                      guardarBusqueda={guardarBusqueda}
                    />
                </View>
            </View>
          </TouchableWithoutFeedback>
    </>
  );
}

export default App

const styles = StyleSheet.create({
  app :{
    flex :1,
    backgroundColor : "rgb(71, 149, 212)",
    justifyContent : "center"
  },
  contenido:{
    marginHorizontal :"2.5%"
  }
});
