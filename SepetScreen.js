import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const SepetScreen = ({ route }) => {
  const { yemek } = route.params;
  const defaultResim = 'https://example.com/default-resim.jpg';

  const [randomYemek, setRandomYemek] = useState([]);

  useEffect(() => {
    if (yemek && yemek.length > 0) {
      // Firebase'den çekilen içeriği rastgele sırala
      const shuffledYemek = yemek.sort(() => Math.random() - 0.5);
      setRandomYemek(shuffledYemek);
    } else {
      // Sepet boşsa uyarı ver
      setRandomYemek([]);
    }
  }, [yemek]);

  return (
    <ScrollView style={styles.container}>
      {randomYemek.length > 0 ? (
        randomYemek.map((item, index) => (
          <View key={index} style={styles.yemekContainer}>
            <Text style={styles.yemekAdi}>{item.yemekAdi || 'Yemek Adı Yok'}</Text>
            <Image
              source={{ uri: item.resim || defaultResim }}
              style={styles.resim}
            />
            {item.içerikler ? (
              <>
                <Text style={styles.bilgiBaslik}>İçerikler:</Text>
                <View style={styles.icerikContainer}>
                  {item.içerikler.map((malzeme, i) => (
                    <Text key={i} style={styles.icerik}>{malzeme}</Text>
                  ))}
                </View>
              </>
            ) : (
              <Text style={styles.icerik}>Malzeme bilgisi bulunamadı.</Text>
            )}
            <Text style={styles.bilgiBaslik}>Nasıl Yapılır:</Text>
            <Text style={styles.tarif}>{item.nasilYapilir || 'Tarif Yok'}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.uyari}>Sepet boş veya malzemeler yeterli değil.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  yemekContainer: {
    marginBottom: 20,
  },
  yemekAdi: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resim: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
  bilgiBaslik: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  icerikContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  icerik: {
    marginRight: 8,
    marginBottom: 8,
  },
  tarif: {
    fontStyle: 'italic',
  },
  uyari: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SepetScreen;
