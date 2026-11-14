import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signup = () => {
  return (
    <View>
      <Text>signup</Text>
      <Link href="/(auth)/sign-in" className="mt-4 bg-primary text-white p-4 rounded">
        sign in
      </Link>
      
    </View>
  )
}
     
export default signup 