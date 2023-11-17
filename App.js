import { createStackNavigator } from '@react-navigation/stack'; 
import{NavigationContainer} from '@react-navigation/native';
import HorizontalScroll from './second';
import Third from './third';

import App1 from './first';
import { Text, SafeAreaView, StyleSheet,ScrollView ,View,Image} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
const b = createMaterialBottomTabNavigator();





import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const a=createStackNavigator();
function Scroll(){
  return(

      <b.Navigator>
   

        <b.Screen name="Local"component={HorizontalScroll}options={{
            tabBarLabel: 'First',
            tabBarIcon: ({ color }) => (
              <Ionicons name="car" color={color} size={25
            } /> 
            ),
          }}/>
        <b.Screen name="National"component={Third} options={{
            tabBarLabel: 'Second',
            tabBarIcon: ({ color }) => (
              <Ionicons name="train" color={color} size={25} /> 
            ),
          }}/>
          
          <b.Screen name="Local1"component={HorizontalScroll}options={{
            tabBarLabel: 'Third',
            tabBarIcon: ({ color }) => (
              <Ionicons name="car" color={color} size={25
            } /> 
            ),
          }}/>
                <b.Screen name="National2"component={Third} options={{
            tabBarLabel: 'fourth',
            tabBarIcon: ({ color }) => (
              <Ionicons name="train" color={color} size={25} /> 
            ),
          }}/>
          
              
      </b.Navigator>
)
}
// You can import supported modules from npm
function App(){



  
  return(
    <NavigationContainer>
      <a.Navigator
      screenOptions={{headerShown:false}}>

        <a.Screen name="Guess"component={App1}/>
        <a.Screen name="Guess1"component={Scroll}/>
        <a.Screen name="Guess2"component={Third}/>


      </a.Navigator>
    </NavigationContainer>)
}
export default App;