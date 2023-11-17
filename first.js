import { StyleSheet, View ,Image,Text,TouchableOpacity} from 'react-native';

export default function App1({navigation}) {
  return (
    <View style={styles.container}>

<Image style={{ marginTop:-60,height:120, width:100, borderTopLeftRadius:950,borderBottomLeftRadius:550,borderBottomRightRadius:40,borderTopRightRadius:100,marginLeft:"90%" }} source={{uri:'https://d24b2zgz3bcyj8.cloudfront.net/wp-content/uploads/2016/04/EU-88-1.jpg'}}>
      </Image>  
 
      <Image style={{    alignItems: 'center',
    justifyContent: 'center',marginLeft:"2%", height:250, width:190, borderTopLeftRadius:690,borderBottomLeftRadius:690,borderBottomRightRadius:690,borderTopRightRadius:690 }} source={{uri:'https://tse4.mm.bing.net/th/id/OIP.V41W1SrGAjzTstbY8A8p3wHaE8?w=618&h=412&rs=1&pid=ImgDetMain'}}>
      </Image>  
    
      <Image style={{marginRight:"170%", height:120, width:100, borderTopLeftRadius:500,borderBottomLeftRadius:200,borderBottomRightRadius:950,borderTopRightRadius:550,marginLeft:"90%" }} source={{uri:'https://d24b2zgz3bcyj8.cloudfront.net/wp-content/uploads/2015/10/1EA-87.jpg'}}>
      </Image>  
<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:900,fontSize:20 , alignItems: 'center',marginLeft:40,
    justifyContent: 'center', }} >
    The 
  </Text >
  <Text style={{fontWeight:900,fontSize:20,marginLeft:10 ,color:'green'  }}>Co- Working</Text>
</View>
<Text style={{fontWeight:900,fontSize:20 , alignItems: 'center',marginLeft:40,
    justifyContent: 'center', }} > Experience Starts Here</Text>
<Text style={{fontSize:12 ,fontWeight:100,marginLeft:10 ,marginTop:10 }}>It is very important for the customer to follow the</Text>
<Text style={{fontSize:11.5 ,fontWeight:100,marginLeft:10  }}>customer's training, but this is what happens at the same time

</Text>
<TouchableOpacity style={{height:40,backgroundColor:'green' ,weight:400,borderRadius:20 ,width:180,marginTop:10,padding:9,paddingLeft:25}} 
  onPress={()=>navigation.navigate("Guess1")}>

  <Text style={{color:'white'}}>  Let's Get Started              
</Text>
</TouchableOpacity>

<View style={{flexDirection:'row' ,marginTop:10}}>
<Text  style={{fontSize:15 ,fontWeight:120,marginLeft:10 ,marginTop:5 }}>
Already have an account?

  </Text >
  <Text  style={{fontSize:15 ,fontWeight:120,marginLeft:10 ,marginTop:5 ,color:'green'}}>
  Sign In

  </Text >


</View>

        
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item1:{
    height:100
  }

});