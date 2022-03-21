import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import Navigation from '../navigation';

import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="WList" 
        component={HStack} 
        options={{
          headerShown: false,
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="MBooks" 
        component={HStack} 
        options={{
          headerShown: false,
          title: "My books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const H2Stack = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AlbumScreen}
          options={{
            title: "",
            headerShadowVisible:false,
            headerStyle:{
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              backgroundColor:"#fff",
              shadowOffset:0,
            
            },
            headerLeft: () => (
              <MaterialCommunityIcons
                name={'menu'}
                size={24}
                onPress={() => alert("Drawer!")}
                style={{ marginLeft: 0 }}
              />
            ),
            headerRight: () => (
              <MaterialCommunityIcons
                name={'magnify'}
                size={24}
                onPress={() => alert("Search?")}
                style={{ marginRight: 12 }}
              />
            ),
            
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: "",
            headerShadowVisible:false,
            headerStyle: {
              backgroundColor: '#fff',
  
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            headerLeft: () => (
              <MaterialCommunityIcons
                name={'chevron-left'}
                size={30}
                onPress={() =>navigation.goBack(null)}
                style={{ marginLeft: 8 }}
              />
            ),
            headerRight: () => (
           <MaterialCommunityIcons
              name={'bookmark'}
              color={'#6200EE'}
              size={30}
              onPress={() =>alert("bookmark!")}
              style={{ marginLeft: 8 }}
            />
              
            ),
            backgroundColor:'#fff',
          })}
        />
      </Stack.Navigator>
    );
  }