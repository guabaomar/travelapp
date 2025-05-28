import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';




 const SignUp = () => {
  
  const navigation = useNavigation()
   const router = useRouter();



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
          marginTop: 160,
       
          
        } }
      >

<TouchableOpacity
          onPress={() => router.back()}
 >

<Ionicons name="arrow-back" size={24} color="black" />

</TouchableOpacity>

        <Text 
        style={{
          fontSize: 24, 
          fontWeight: 'bold',
          marginTop: 20,
        }}
        
        > Let's Sign You Up </Text>



         <Text 
        style={{
          fontSize: 20, 
          marginTop: 20,
        }}
        
        > Welcome! </Text>

        

         <Text 
        style={{
          fontSize: 20, 
          marginTop: 20,
        }}
        
        >Create Your Accout Now!</Text>



 <View style={{ marginTop: 30 }}>
            <Text>

              Full Name:
            </Text>
           
             <TextInput 
             placeholder='Enter your full name'
              style={{
                borderWidth: 1, 
                borderColor: '#ccc',
                padding: 10,
                borderRadius: 5,
              }}
             
             
             >

             </TextInput>


           </View>
           <View style={{ marginTop: 30 }}>
            <Text>

              Email:
            </Text>
           
             <TextInput 
             placeholder='Enter your email'
              style={{
                borderWidth: 1, 
                borderColor: '#ccc',
                padding: 10,
                borderRadius: 5,
              }}
             
             
             >

             </TextInput>


           </View>

              <View style={{ marginTop: 30 }}>
            <Text>

              Password:
            </Text>
           
             <TextInput 
             secureTextEntry={true}
             placeholder='Enter your password'
              style={{
                borderWidth: 1, 
                borderColor: '#ccc',
                padding: 10,
                borderRadius: 5,
              }}
             
             
             >

             </TextInput>

             
           </View>





     <TouchableOpacity
                 onPress={() => router.push('/auth/sign-up')}
                 
                 style={{
                   marginTop: 20,
                   paddingHorizontal: 20,
                   paddingVertical: 10,
                   backgroundColor: '#007BFF',
                   borderRadius: 5,
                   alignItems: 'center'
                 }}>
                   <Text style={{ color: '#fff', fontSize: 17 }}> Create a New Account </Text>
     
     
                 </TouchableOpacity>
             




      </View>
    )
  
  
}

export default SignUp