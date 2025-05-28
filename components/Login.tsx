import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';



 const Login = () => {
  

   const router = useRouter();

   
    return (
      <View>
        
        <Image 
          source={require('../assets/images/travelguide.jpg')}
          style={{ width: '100%', height: 500, alignSelf: 'center'}}
        />

        <View>

          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            color: '#333'

          }}> AITravel App </Text>

         
          <Text style={{
            fontSize: 18,
            textAlign: 'center',
            marginTop: 10,
            color: '#666'
          }}> Discover the world with AI. This app is what you need to achieve your entertainment goals. So what are you waiting for? Join our community of happy travelers. </Text> 

            <TouchableOpacity
            onPress={() => router.push('/auth/sign-in')}
            
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: '#007BFF',
              borderRadius: 5,
              alignItems: 'center'
            }}>
              <Text style={{ color: '#fff', fontSize: 17 }}> Get Started </Text>


            </TouchableOpacity>

        </View>

      </View>
    )
  
}

export default Login