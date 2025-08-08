import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../firebaseConfig";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("user registered successfully!");
        setEmail("");
        setPassword("");
        setErrorMessage(""); // Clear error on success
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
      });
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-50 px-6">
      <Text className="mb-4 text-3xl font-bold text-gray-800">Sign Up</Text>

      {errorMessage ? (
        <Text className="mb-4 text-center text-red-500">{errorMessage}</Text>
      ) : null}

      <View className="mb-4 w-full">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
        />
      </View>

      <View className="mb-4 w-full">
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
        />
      </View>

      <TouchableOpacity
        onPress={handleSignup}
        className="w-full rounded-lg bg-blue-500 px-10 py-3"
      >
        <Text className="text-center text-lg font-semibold text-white">
          Sign Up
        </Text>
      </TouchableOpacity>

      <View className="mt-4 flex-row">
        <Text className="text-gray-600">Already have an account? </Text>
        <TouchableOpacity>
          <Text className="font-semibold text-blue-500">Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
