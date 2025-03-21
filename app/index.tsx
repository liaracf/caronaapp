import { View, Text, Image } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style ={{flex: 1, justifyContent:"center", alignItems: "center", paddingHorizontal: 89}}>
      <Text style= {{fontSize: 36, fontWeight: "600", color: "blue", marginBottom:32}}>COMO VOCÊ QUER USAR O APP?</Text>
      <Image style={{width:150, height:150}} source ={require("../assets/driver.png")}/>
      <Text>MOTORISTA</Text>
      <Text>Ofereça carona e ganhe dinheiro</Text>
      <Image style={{width:150, height:150}} source ={require("../assets/Passager.png")}/>
      <Text>CARONA</Text>
      <Text>eswufhaiuwehfiuaqromorreiasjiuasd</Text>
   </View>
  )
}

export default index