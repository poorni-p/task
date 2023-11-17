import React from 'react';
import { FlatList, View, Image, TouchableOpacity, Text, StyleSheet,ScrollView } from 'react-native';
import{Avatar} from "@react-native-material/core";


const HorizontalScroll = () => {
  const data = [
    { key: '1', imageUrl: 'https://th.bing.com/th/id/OIP.G1EBXvfuhbt3qVC3Vxc_qAHaFj?rs=1&pid=ImgDetMain' },
    { key: '2', imageUrl: 'https://th.bing.com/th/id/OIP.G1EBXvfuhbt3qVC3Vxc_qAHaFj?rs=1&pid=ImgDetMain' },
    { key: '3', imageUrl: 'https://th.bing.com/th/id/OIP.G1EBXvfuhbt3qVC3Vxc_qAHaFj?rs=1&pid=ImgDetMain' },
    // Add more items as needed
  ];
  const data1 = [
    { imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.l6qK47i7h9DuhFL2IYOnUAHaE8?rs=1&pid=ImgDetMain' }, 
    { imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.l6qK47i7h9DuhFL2IYOnUAHaE8?rs=1&pid=ImgDetMain' },
    { imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.l6qK47i7h9DuhFL2IYOnUAHaE8?rs=1&pid=ImgDetMain' },

    // Add more items as needed
  ];

  const renderButton = () => (
    <TouchableOpacity style={styles.button}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>CLAIM</Text>
      </View>
    </TouchableOpacity>
  );

  const renderImage = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      <Text style={styles.centerText}>Get special offer {"\n"} upto 40%</Text>
      <Text style={styles.bottomLeftText}>All service {"\n"} avaialable </Text>
       <Text style={styles.bottomLeftText2}>T & C apply </Text>
      {renderButton()}
    </View>
  );

  return (
    <View>
    <FlatList
      data={data}
      horizontal
      renderItem={renderImage}
      keyExtractor={(item) => item.key}
    />
    <View style={{flexDirection:'row' ,marginTop:10}}>
    <Text style={{fontSize:20 ,fontWeight:'bold',marginLeft:10 ,marginTop:5 }}>Category</Text>
    <TouchableOpacity><Text style={{fontSize:17 ,fontWeight:'bold',marginLeft:180 ,marginTop:5 ,color:'green'}}>    See All</Text></TouchableOpacity>
    </View>

<View style={{flexDirection:'row' ,marginTop:10}}>
<TouchableOpacity  style={{marginLeft:20  }} >

  <  Avatar  image 

    ={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWYAfvPRNgdWE_DSFrkMQUOWyjecl4xWSlsKqF66DI85sSPv81hfw29hCV_TLkIKSnZc&usqp=CAU'}} />
      <Text  style={{fontSize:12 ,marginLeft:1 }}>Dedicated</Text>
  </TouchableOpacity>
  <TouchableOpacity  style={{marginLeft:20  }} >

  <  Avatar  image 

    ={{uri:'https://cdn-icons-png.flaticon.com/512/8993/8993089.png'}} />
      <Text   style={{fontSize:12 ,marginLeft:5 }}>conference</Text>
  </TouchableOpacity>
  <TouchableOpacity  style={{marginLeft:15  }} >

  <  Avatar  image 

    ={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqE-DWF82VJIQVfaSofU4pgO0_hjOp2CjzRgMkzJpC83GhIGsk4QTt_L9cck2IKLFNHE&usqp=CAU'}} />
      <Text  style={{fontSize:12 ,marginLeft:5 }}>Private</Text>
  </TouchableOpacity>
  <TouchableOpacity  style={{marginLeft:25  }} >

  <  Avatar  image 

    ={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTW03edJNFQghGFaG32LUH16d6DE7_xZgnKJomGE8nss09paBOb9OwetpJLrrMRLq&usqp=CAU'}} />
      <Text style={{fontSize:12 ,marginLeft:-5 }}>Open Spac</Text>
  </TouchableOpacity>


</View>
<View style={{flexDirection:'row' ,marginTop:10}}>
<Text style={{fontSize:20 ,fontWeight:'bold',marginLeft:10 ,marginTop:5 }}>Popular Space</Text><TouchableOpacity>
    <Text style={{fontSize:17 ,fontWeight:'bold',marginLeft:120 ,marginTop:5 ,color:'green'}}>    See All</Text></TouchableOpacity>
</View>
<ScrollView>
      
<FlatList 
      data={ data1 }
      renderItem={({item})=><View style={{flexDirection:'row',marginLeft:'2%',marginTop:20}} > 
       <Image source={{uri:item.imageUrl}}style={{height:250,width:335,marginTop:10}}/> 
  
          </View>}/>

</ScrollView>


</View>


  );
};

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width:344,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 255, 0.3)', // Light blue color with opacity
  },
  centerText: {
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    zIndex: 1,
  },
  bottomLeftText: {
    position: 'absolute',
    bottom: 14,
    left: 2,
    color: 'white',
    fontSize: 10,
    zIndex: 1,
  },
   bottomLeftText2: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: 'white',
    fontSize: 10,
    zIndex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonContainer: {
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
  },
});

export default HorizontalScroll;