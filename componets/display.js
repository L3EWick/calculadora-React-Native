import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,TextInput, ColorPropType} from 'react-native';

export default props=>{
    return(
    <View style={styles.display}>
        <Text
        style={styles.txtDspOper}
        numberOfLines={1}
        >{props.valor}
        </Text>    
       
        <Text
        style={styles.txtDspRes}
        numberOfLines={1}
        >{props.res}
        </Text>    

    </View>

)}

const styles = StyleSheet.create({
display:{
  flex: 1,
  padding: 20,
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor: '#1C1C1C',
  width: '100%'
},
txtDspRes:{
    fontSize: 50,
    color: '#fff' 
},
txtDspOper:{
    fontSize: 25,
    color: '#fff' 
},

})