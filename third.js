import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import{Avatar} from "@react-native-material/core";


const Third = () => {
  return (
    <View style={{flex:1}}>

      <Image style={{ height:"56%", width:500, }} source={{uri:'https://d24b2zgz3bcyj8.cloudfront.net/wp-content/uploads/2016/04/EU-88-1.jpg'}}>
      </Image>
   
  
      <View style={{flexDirection:'row' }}>
      <TouchableOpacity>
    <Text style={{fontSize:17 ,fontWeight:'bold',marginTop:5 ,color:'green'}}> Open Space
</Text></TouchableOpacity>
<Image style={{height:20,width:20 ,marginTop:9,marginLeft:120}} source={{uri:'https://th.bing.com/th/id/R.964268cfd99806b31a3f38904f7be238?rik=IH54Dx1NIzHB%2fg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fstar-icon.png&ehk=1nuTFvTOLZ1JxvxRy9Gr09rDbwRrkRKKPZSBjsjW5Hc%3d&risl=&pid=ImgRaw&r=0'}}>
      </Image> 
      <Text style={{fontSize:12 ,marginTop:5,marginTop:9}}> 4.8 (365 reviews)

</Text>
</View>
<View style={{flexDirection:'row' ,marginTop:10}}>
  <View>
  <Text style={{fontSize:17 ,fontWeight:'bold',marginTop:5 }}> WorkHub Connect

</Text>
<Text >1012 Ocean avanue, New yourk, USA

</Text>
  </View>

<TouchableOpacity  style={{marginLeft:40  }} >

  <  Avatar  image 

    ={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63O34p4kK2GR4j-4Y1lojkwL27qyGUsBt786F0Pzy71x2uiVFdGMplqcOhdUZjXH9Un0&usqp=CAU'}} />
 </TouchableOpacity> 
 </View>
 <View style={{flexDirection:'row' ,marginTop:10}}>
 <TouchableOpacity>
    <Text style={{fontSize:17 ,fontWeight:20 ,marginTop:5,marginLeft:10}}> 
About

</Text></TouchableOpacity>
<TouchableOpacity>
    <Text style={{fontSize:17 ,fontWeight:20,marginTop:5,marginLeft:90}}> 
    Gallery


</Text></TouchableOpacity>
<TouchableOpacity>
    <Text style={{fontSize:17 ,fontWeight:20,marginTop:5
    ,marginLeft:70}}> 
    Review

</Text></TouchableOpacity>
  </View>
  
  <ScrollView >
  <View style={{flexDirection:'row' ,marginTop:10}}>
  <Image style={{height:15,width:15 ,marginTop:5,marginLeft:5}} source={{uri:'https://tse2.mm.bing.net/th/id/OIP.z92mj1ySHYRyhNifDOCh4wHaFj?rs=1&pid=ImgDetMain'}}>
      </Image> 
      <Text style={{fontSize:10 ,fontWeight:20,marginTop:5
    ,marginLeft:8}}> 
    205 Mins


</Text>

  <Image  style={{height:15,width:15 ,marginTop:5,marginLeft:70}} source={{uri:'https://www.protechrestoration.com/wp-content/uploads/2017/03/green-map-localization-icon-7.png'}}>
      </Image> 
      <Text  style={{fontSize:10 ,fontWeight:20,marginTop:5
    ,marginLeft:8}}> 
    
2.3 Km


</Text>

  <Image  style={{height:15,width:15 ,marginTop:5,marginLeft:80}} source={{uri:'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5629588.jpg'}}>
      </Image> 
      <Text style={{fontSize:10 ,fontWeight:20,marginTop:5
    ,marginLeft:8}}> 
    
Open
</Text>
    </View>
    <Text style={{fontSize:17 ,fontWeight:'bold',marginTop:5 }}> Description


</Text>
<Text style={{fontSize:13 ,marginTop:15,marginLeft:70 }}>Lorem ipsum dolor sit amet, consectetur

</Text>
<Text style={{fontSize:13,marginLeft:10 }}> adipiscing elit, sed do eiusmod tempor incididunt 

</Text>
<Text style={{fontSize:13,marginLeft:10 }}> ut labore et dolore magna aliqua Read more

</Text>
<Text style={{fontSize:17 ,fontWeight:'bold',marginTop:5 }}> Operated by



</Text>
<View style={{flexDirection:'row' ,marginTop:10}}>
<  Avatar  image 

={{uri:'https://png.pngtree.com/png-vector/20191116/ourmid/pngtree-business-office-girl-avatar-icon-vector-download-png-image_1991055.jpg'}} />

<Text style={{fontSize:17 ,fontWeight:400,marginTop:10,marginLeft:10 }}> Jenny Doe




</Text>

<Image  style={{height:55,width:55 ,marginTop:3,marginLeft:65}} source={{uri:'https://tse4.mm.bing.net/th/id/OIP.I59Ap7XL-o4F5NTq5tHePAHaHk?rs=1&pid=ImgDetMain'}}>
      </Image> 
      <Image  style={{height:55,width:55 ,marginTop:3,marginLeft:10}} source={{uri:'https://tse1.mm.bing.net/th/id/OIP.SdeDDh131eeHowINBiIKTwHaER?rs=1&pid=ImgDetMain'}}>
      </Image> 
</View>
<View style={{flexDirection:'row' ,marginTop:10}}>
  <View>
  <Text style={{fontSize:17 ,fontWeight:400,marginTop:10,marginLeft:10 }}>Total Price

</Text>
<Text style={{fontSize:13 ,fontWeight:400,marginLeft:20 }}>$8.00/hr

</Text>


  </View>
  <TouchableOpacity style={{height:40,backgroundColor:'green' ,weight:200,borderRadius:20 ,width:140,marginTop:15,padding:9,paddingLeft:25 ,marginLeft:100}} 
  onPress={()=>navigation.navigate("Guess1")}>

  <Text style={{color:'white'}}>  Book Now
      
</Text>
</TouchableOpacity>

</View>
</ScrollView>
    </View>
  )
}

export default Third

const styles = StyleSheet.create({})