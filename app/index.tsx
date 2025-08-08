import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { useRouter } from 'expo-router';
export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 px-6">
      <Text className="mb-4 text-4xl font-bold text-gray-800">Welcome</Text>
      <Text className="mb-8 text-center text-lg text-gray-600">
        Welcome to our app! Sign Up and explore amazing features
      </Text>
      <TouchableOpacity
        onPress={() => router.push('/signUp')}
        className="rounded-lg bg-blue-500 px-10 py-3 shadow-md">
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
