import React from 'react'
import Home from '../screens/Home'
import Task from '../screens/Task'
import About from '../screens/About'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const screenOptionStyle={
    headerStyle:{
        backgroundColor:'red'
    },
    hearderTintColor:'white',
    headerTitleStyle:{
        fontWeight:'bold'}
}

const AboutStack=()=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
              <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    )
}


const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>

            <Stack.Screen name="Home" component={Home} 
            />
            <Stack.Screen name="Task" component={Task} 
                options={({route})=>({title:route.params.task})}/>

            <Stack.Screen name="About" component={About} />   
        </Stack.Navigator>

    )
}

export { AboutStack, HomeStack}
