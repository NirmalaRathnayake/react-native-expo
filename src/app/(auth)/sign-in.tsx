import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signin = () => {
  return (
    <View>
      <Text>signin</Text>
      <Link href="/(auth)/sign-up" className="mt-4 bg-primary text-white p-4 rounded">
        create account
      </Link>
    </View>
  )
}

export default signin 