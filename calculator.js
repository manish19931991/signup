import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react';

const calculator = (Props) => {
    const[resultText,setResultText] = useState("");
    const[calcText,setcalcText] = useState("");
    const onBottonClick = (text) =>{
        console.log(text);
        if(text == "="){
            return calculation()
        }
        setResultText(resultText + text);
    };
    const calculation = () =>{
        setcalcText(eval(resultText))
    };
    const onOperationClick = (text) =>{

        const operations = ["DEL", "C", "+", "-", "*","/", "." ]
        if (text == 'C'){
            setResultText("");
            setcalcText('');
            return;
        }
         
            if (resultText.slice(-1) == "+" || 
            resultText.slice(-1) == '-' ||
            resultText.slice(-1) == "*" ||
            resultText.slice(-1) == "/" ||
            resultText.slice(-1) == "."
            ){
                setResultText(resultText.slice(0,-1) + text)
            }
            else{
                setResultText(resultText+text)
            }
         
         if (text == 'DEL'){
           return setResultText(resultText.toString().substring(0,resultText.length-1))
        }
        // if (operations.includes(resultText.toString().split("").pop()));rrrrrr
        // setResultText(resultText + text);
    
}
  return (
    <View style={styles.container}>
        <View style={styles.result}>
            <Text style={styles.resultText}>{resultText}</Text>
        </View>
        <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calcText}</Text>
        </View>
        <View style={styles.numbers}>
            <View style={styles.row}>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}}onPress={()=>{onBottonClick(1)}}>
                    <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick(2)}}>
                    <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick(3)}}>
                    <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"orange", borderRadius:20, width:70, alignItems:"center",}} onPress={() => {onOperationClick("DEL");}}> 
                <Text style={styles.operationButton}>DEL</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick(4)}}>
                    <Text style={styles.number}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick(5)}}>
                    <Text style={styles.number}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick(6)}}>
                    <Text style={styles.number}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"orange", borderRadius:20, width:50, alignItems:"center",}} onPress={() => {onOperationClick("C");}}>     
                <Text style={styles.operationButton}>C</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick(7)}}>
                    <Text style={styles.number}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick(8)}}>
                    <Text style={styles.number}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick(9)}}>
                    <Text style={styles.number}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"orange", borderRadius:20, width:50, alignItems:"center",}} onPress={() => {onOperationClick("+");}}>            
                <Text style={styles.operationButton}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center", }} onPress={()=>{onOperationClick('.')}}>
                    <Text style={styles.number}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick(0)}}>
                    <Text style={styles.number}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"black", borderRadius:20, width:50, alignItems:"center",}} onPress={()=>{onBottonClick('=')}}>
                    <Text style={styles.number}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"orange", borderRadius:20, width:50, alignItems:"center",}} onPress={() => {onOperationClick("-");}}>              
                <Text style={styles.operationButton}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={{backgroundColor:"orange", borderRadius:20, width:50, alignItems:"center",}} onPress={() => {onOperationClick("/");}}> 
                   <Text style={styles.operationButton}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"orange", borderRadius:20, width:50, alignItems:"center",}} onPress={() => {onOperationClick("*");}}>
                <Text style={styles.operationButton}>*</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
)}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    result:{
        backgroundColor:"white",
        height:90,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    calculation:{
         height:90,
        backgroundColor:"white",
        alignItems:"flex-end",
        justifyContent:"center"
    },
    
    resultText:{
           fontSize:30,
           fontWeight:"bold",
           color:"black",
           right:10,
    },
    calculationText:{
          fontSize:25,
          fontWeight:"bold",
          color:"black",
          right:15,

    },
    row:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    number:{
        color:"white",
        fontSize:30,
     },
     numbers:{
        backgroundColor:"white",
        justifyContent:"space-around",
        width:430,
        height:600,
     },
    operationButton:{
        color:"blue",
        fontSize:30,
        
     },
    });

export default calculator