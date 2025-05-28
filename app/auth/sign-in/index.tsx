import { useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { Text, View } from 'react-native'



 const SignIn = () => {

  const navigation = useNavigation()



       useEffect(() => {

         navigation.setOptions({
          headerShown: false,
          })
                
       }, [])
    // Check if the user is already authenticated 

  
    return (
      <View  
      
        style={{
          padding: 25,
          marginTop: 60,
       
          
        } }
      >


        <Text 
        style={{
          fontSize: 24, 
        }}
        
        > Let's Sign You In </Text>



         <Text 
        style={{
          fontSize: 20, 
          marginTop: 20,
        }}
        
        > Welcome Back </Text>

        

         <Text 
        style={{
          fontSize: 20, 
          marginTop: 20,
        }}
        
        >You have been missed!</Text>





      </View>
    )
  
}

export default SignIn