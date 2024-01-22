// LoginScreen.js dosyası
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Do something after successful login, e.g., navigate to the home screen
      navigation.navigate('AnaEkran', { screen: 'AnaEkranScreen' });

      console.log('Giriş Başarılı!');
    } catch (error) {
      console.error('Giriş Başarısız', error.message);
      Alert.alert('Giriş Başarısız', error.message);
    }
  };

  return (
    <ImageBackground source={require('../assets/login.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.label} placeholderTextColor="#fff">Kullanıcı Adı:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="email"
          placeholderTextColor='white'
          color="white"
        />
        <Text style={styles.label} placeholderTextColor="#fff">Şifre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Şifre"
          secureTextEntry
          placeholderTextColor='white'
          color="white"
        />
        <Button
          style={styles.loginButton}
          title="Giriş Yap"
          onPress={handleLogin}
          disabled={!email || !password} // Boş alanları kontrol et
        />
        <Button style={styles.loginButton} title="Signup" onPress={() => navigation.navigate('Signup', { screen: 'SignupScreen' })} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  label: {
    marginBottom: 8,
    color: 'white'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: 'black'
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#3498db',
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
