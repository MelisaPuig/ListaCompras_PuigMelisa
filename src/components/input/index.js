import React from "react";
import  {View, TextInput,Button} from "react-native";
import {styles} from`./style`

const CustomInput =({item, onChangeText, placeholder,onPressButton,inputvalue}) =>{ 
    return  ( 
<View style={styles.inputContainer}>
 <TextInput 
   style={styles.input}
   placeholderTextColor='#cccccc'
   placeholder={placeholder}
   value={item}
   onChangeText={onChangeText}
 />
 <Button title='Add' color='#7D8CC4' onPress={onPressButton} disabled={inputvalue === ''}/>
    </View>
    )
}
export default CustomInput;