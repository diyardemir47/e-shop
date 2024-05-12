import React from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView } from 'react-native';

const Register = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Register Screen</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Register;
