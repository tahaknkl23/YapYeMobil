// SignupScreen.js dosyası
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Kayıt Başarılı!');
      // Kayıt başarılı olduğunda otomatik olarak login ekranına yönlendirin
      navigation.navigate('Login', { screen: 'LoginScreen' });
    } catch (error) {
      console.error('Kayıt Başarısız', error.message);
    }
  };

  return (
    <ImageBackground source={require('../assets/login.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.label}>E-posta:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="E-posta"
          placeholderTextColor='white'
          keyboardType="email-address"
          color="white"
        />
        <Text style={styles.label}>Şifre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Şifre"
          placeholderTextColor='white'
          secureTextEntry
          color="white"
        />

        <Button
          title="Kayıt Ol"
          onPress={handleSignup}
          disabled={!email || !password}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // 'cover' veya 'stretch' olarak ayarlayabilirsiniz
    justifyContent: 'center',
  },
  label: {
    marginBottom: 8,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'black',
    borderRadius: 8,
  },
});

export default SignupScreen;
