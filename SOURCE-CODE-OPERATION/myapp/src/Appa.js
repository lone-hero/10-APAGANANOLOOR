

import React from 'react';
import './App.css';


const APPA = ({isRed,temp}) => {  
    var b = main();
    var printout, printre;
    var a=toCharArray();
    function main() {
        var table = [[1,5,5,5,5], [5,2,5,5,5], [5,5,3,3,5], [5,5,5,5,4], [5,5,5,5,5]];
        var statement = isRed;
        var h = 0, state = 0, flag = 0, input ;
        var equall = '=';
        var semicol = ';';
        h = splitting(statement);
        
        try{
            for (var i =0;i<h.length;i++){
                
                if (h[i] === equall){
                    input = 1;
                }
                else if (check_expression(h[i]) === 1){
                    input = 2;
                }
                else if (check_iden(h[i]) === 1) {
                    input = 0;
                    printout = h[i] + "=" ;
                }
                else if (h[i] === semicol){
                    input = 4; 
                }
                else if (twodigit(h[i])===1) {
                    input = 3;
                    printout = printout + h[i];
                }
                else {
                    input = 5;
                }
                
                state = table[state][input];
                if (state === 4){
                    flag = 1;
                } else if (state === 5){
                    break;
                }
             }
        
        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            return 0;
        }
    }

    function splitting(state_ment){
        var str =toCharArray(state_ment);
        var split = varsplit(state_ment);
        var l=split.length - 1;
        try{
            var str1 = [];
            var from = 0;
            var testme = 0;
            for (var i=0;i<l;i++){
                str1.push(split[i]);
                from = split[i].length + from;
                str1.push(str[from + testme]);
                testme++;
            }
            var cap = str1.length;
            var save2 = [];
            for (i=0;i<cap;i++){
                save2.push(str1[i]);
            }
            
        }
        catch(err){
        }
        return save2;

    }
    
    function check_expression(hop){
        var table = [[1,1,4,4], [4,4,2,2], [3,3,4,4], [4,4,4,4]];
        var state = 0, flag = 0, input ,g, temp, add1 = 0, sub1 = 0;
        g = splitexp(hop);
        try{
            for (var i =0;i<g.length;i++){
                if (check_iden(g[i]) === 1) {
                    input = 0;
                    temp = 0;
                }
                else if (twodigit(g[i]) === 1){
                    input = 1;
                    if(add1===1) printre = Number(temp) + Number(g[i]);
                    if(sub1===1) printre = Number(temp) - Number(g[i]);
                    temp = g[i];
                }
                else if (g[i] === '+'){
                    input = 2;
                    add1 = 1;
                }
                else if (g[i] === '-'){
                    input = 3
                    sub1 = 1;
                }
                else {
                    input = 4;
                }
                
                state = table[state][input];
                if (state === 3){
                    flag = 1;
                } else if (state === 4){
                    break;
                }
             }
        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            return 0;
        }
    }

    function splitexp(clen){
        var str =toCharArray(clen);
        var split = varsplit2(clen);
        var l=split.length;
        try{
            var str1 = [];
            var from = 0;
            var testme = 0;
            for (var i=0;i<l;i++){
                str1.push(split[i]);
                from = split[i].length + from;
                str1.push(str[from + testme]);
                testme++;
            }
            var cap = str1.length;
            var save3 = [];
            for (i=0;i<cap;i++){
                save3.push(str1[i]);
            }
        }
        catch(err){
        }
        return save3;
    }

    function varsplit2(state_ment){
        var spl = state_ment.split(/[+-]/);
        return spl;
    }

    function toCharArray(str){
        var charArray =[];
        try{
        for(var i=0;i<str.length;i++){
             charArray.push(str[i]);
        }}catch(err){}
        return charArray;
    }

    function varsplit(state_ment){
        var spl=state_ment.split(/[=;]/);
        return spl;
    }

    function check_iden(var1){
        var table = [ [1,2,2], [1,1,2], [2,2,2] ];
        var state = 0, flag = 0, input;
        try{
            for (var i =0;i<var1.length;i++){
                if (lettercheck(var1[i]) === true) {
                    input = 0;
                }
                else if (numcheck(var1[i]) === true){
                    input = 1;
                }
                else {
                    input = 2;
                }
                
                state = table[state][input];
                if (state === 1){
                    flag = 1;
                } else if (state === 2){
                    break;
                }
             }

        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            return 0;
        }
        
    } 

    function twodigit(var2){
        var table = [ [1,3], [2,3], [3,3] ];
        var state = 0, flag = 0, input;
        try{
            for (var i =0;i<var2.length;i++){
                if (numcheck(var2[i]) === true){
                    input = 0;
                }
                else {
                    input = 1;
                }
                
                state = table[state][input];
                if (state === 2 || state === 1){
                    flag = 1;
                } else if (state === 3){
                    flag = 0;
                    break;
                }
             }

        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            return 0;
        }
    }
    function lettercheck(value){
        try{
        value = value.toUpperCase();
//        var p=0;
        for (let i=0; i<value.length; i++){
            if(!(value[i] >= "A" && value[i] <= "Z")){
                return false;
            }
        }}catch(err){}
        return true;
    }
    function numcheck(value){
        return value >= '0' && value <='9';
    }

    function printerror(){
        if(b !== 1){
            return "\nINVALID STATEMENT";
        }
    }
    function printvalue(){
        if(typeof printre !== 'undefined'){
        return printout + printre;}
        else return printout;
        

    }
    
    return(
        <div className="App">
            
            <header className="inline-div1">
               <textarea cols="75" 
                    value={temp===1 ? b===1 ? "VALID STATEMENT \nValue: \n" + printvalue() 
                        : "ERROR: \n" + printerror() : ""} 
                    placeholder="Result:" 
                    className={temp===1 ? b===1 ? "green" 
                    : "red" : "inline-txtarea"} readOnly>
                </textarea>
            </header>
            <h3>hello</h3>
            <h4>{a+"hello"}</h4>
        </div>
    );
}

export default APPA;
