// WelcomeScreen.js
import React, { useEffect } from 'react';
import { View, Text,ImageBackground,StyleSheet } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
useEffect(() => {
    const timer = setTimeout(() => {
      // Belirli bir süre sonra otomatik olarak LoginScreen'e geçiş yap
    navigation.navigate('Login', { screen: 'LoginScreen' });
    }, 3000); // 3000 milisaniye = 3 saniye

    // Komponentin unmount edildiğinde zamanlayıcıyı temizle
    return () => clearTimeout(timer);
}, [navigation]);

return (
    <ImageBackground
    source={require('../assets/yapye.png')}
    style={styles.backgroundImage}>
    <View style={styles.container}>
    <Text style={styles.text}>HOŞGELDİNİZ</Text>
    </View>
</ImageBackground>
);
};
const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
      resizeMode: 'cover', // veya 'stretch' veya 'contain' gibi seçenekleri kullanabilirsiniz
      justifyContent: 'flex-end', // veya 'flex-end' veya 'flex-start' gibi seçenekleri kullanabilirsiniz
    },
    container: {
    padding:20, 
    alignItems: 'center',
    },
    color: 'black',
    text: {
    fontSize: 24,
    fontWeight:'bold',
    
    },
});

  export default WelcomeScreen;