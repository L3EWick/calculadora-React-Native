import React from 'react';
import { Dimensions, StyleSheet, Text,TouchableHighlight} from 'react-native';

export default props=>{
   //const do estilo dos botoes
    const styleButtons=[styles.btn]
    
    if(props.duplo){
        styleButtons.push(styles.btnDuplo)
    }
    if(props.igual){
        styleButtons.push(styles.btnIgual)
    }
    if(props.operacao){
        styleButtons.push(styles.btnOper)
    }
    if(props.ac){
        styleButtons.push(styles.btnAc)
    }
    if(props.bs){
        styleButtons.push(styles.btnBs)
    }
    
    return(
        <TouchableHighlight
            onPress={props.inClick}
        >
            <Text style={styleButtons}>{props.label}</Text>
        </TouchableHighlight>

)}

const styles = StyleSheet.create({
btn:{
    fontSize: 30,
    width: Dimensions.get('window').width/4.4,
    height: Dimensions.get('window').width/4.4,
    padding: 20,
    margin: 4,
    borderRadius: 50,
    backgroundColor: '#363636',
    color: '#fff',
    borderColor: '#777',
    textAlign: 'center',
},
btnIgual:{
    color:'#fff',
    backgroundColor: '#F4A460',
    borderRadius: 50,
    width: Dimensions.get('window').width/4.4,
    height: Dimensions.get('window').width/4.4,
},
btnOper:{
    color:'#fff',
    backgroundColor: '#F4A460',
    borderRadius: 50,
    width: Dimensions.get('window').width/4.4,
    height: Dimensions.get('window').width/4.4,
},
btnAc:{
    color:'#fff',
    backgroundColor: '#F4A460',
    borderRadius: 50,
    width: Dimensions.get('window').width/4.4,
    height: Dimensions.get('window').width/4.4,
    
},
btnBs:{
    color:'#fff',
    backgroundColor: '#F4A460',
    borderRadius: 50,
    width: Dimensions.get('window').width/4.4,
    height: Dimensions.get('window').width/4.4,
},
btnDuplo:{
    width:(Dimensions.get('window').width/4)*2,
    borderRadius: 50
}
})