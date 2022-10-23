import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView,TouchableHighlight,TextInput} from 'react-native';
import Display from './componets/display'
import Btn from './componets/buttons'


let estados={
  ponto:false,
  valorDisplay:'',
  result:0,
  operado:false
}

export default function App() {



  const [vDisplay,setVdisplay]=useState(estados.valorDisplay)
  const [vResult,setVresult]=useState(estados.result)

  const addDigito=(d)=>{
    if(d=='+' || d=='/' || d=='-' || d=='*' ){
      estados.ponto=false
    }if(d=='.' && !estados.ponto){
      estados.ponto=true
      estados.operado=false
    }else if(d=='.' && estados.ponto){
      return
    }
    
    //if((d=='+' || d=='/' || d=='-' || d=='*' )&& !estados.operado){
    //  estados.result=0
    //}else if((d=='+' || d=='/' || d=='-' || d=='*' )&& estados.operado){
   //   return
   // }

    if((d=='+' || d=='/' || d=='-' || d=='*' )&& estados.operado){
      estados.valorDisplay=estados.result
      estados.resultado=0
    }
    estados.valorDisplay=estados.valorDisplay+d
    setVdisplay(estados.valorDisplay)
    setVresult(estados.result)
    estados.operado=false

  }

  const lTela=()=>{
    estados={
      valorDisplay:'',
      result:0,
      operado:false,
      ponto:false
    }
    setVdisplay(estados.valorDisplay)
    setVresult(estados.result)
  }

  const opera=(d)=>{
    if(d=='C'){
      lTela()
      return
    }
    if(d=='BS'){
      estados.valorDisplay=vDisplay.substring(0,(vDisplay.length-1))
      setVdisplay(estados.valorDisplay)
      return
    }
    try{
      estados.result=eval(estados.valorDisplay)
      estados.operado=true
      setVresult(estados.result)
    }catch{
      estados.result='Erro'
      estados.operado=true
      setVresult(estados.result)
    }
  }
  

  return (
    <SafeAreaView style={styles.container}>
    <Display valor={vDisplay} res={vResult}/>
    <View style={styles.buttons}>
      <Btn label="C"  ac inClick={()=>{opera('C')}}></Btn>
      <Btn label="("  inClick={()=>{addDigito('(')}}></Btn>
      <Btn label=")"  inClick={()=>{addDigito(')')}}></Btn>
      <Btn label="/"  operacao inClick={()=>{addDigito('/')}}></Btn>
      <Btn label="7"  inClick={()=>{addDigito('7')}}></Btn>
      <Btn label="8"  inClick={()=>{addDigito('8')}}></Btn>
      <Btn label="9"  inClick={()=>{addDigito('9')}}></Btn>
      <Btn label="x"  operacao inClick={()=>{addDigito('*')}}></Btn>
      <Btn label="4"  inClick={()=>{addDigito('4')}}></Btn>
      <Btn label="5"  inClick={()=>{addDigito('5')}}></Btn>
      <Btn label="6"  inClick={()=>{addDigito('6')}}></Btn>
      <Btn label="-"  operacao inClick={()=>{addDigito('-')}}></Btn>
      <Btn label="1"  inClick={()=>{addDigito('1')}}></Btn>
      <Btn label="2"  inClick={()=>{addDigito('2')}}></Btn>
      <Btn label="3"  inClick={()=>{addDigito('3')}}></Btn>
      <Btn label="+"  operacao inClick={()=>{addDigito('+')}}></Btn>
      <Btn label="0"  inClick={()=>{addDigito('0')}}></Btn>
      <Btn label="."  inClick={()=>{addDigito('.')}}></Btn>
      <Btn label="➔" bs inClick={()=>{opera('BS')}}></Btn>
      <Btn label="="  igual inClick={()=>{opera('=')}}></Btn>





    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 

  }, 

  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#000',
    paddingTop: 20
  },
});





