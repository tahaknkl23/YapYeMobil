import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';

const YaglarScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const saveAndGoBack = () => {
    navigation.navigate('AnaEkran', { newItems: selectedItems });
  };
  const fruits = ['Sıvı Yağ', 'Tereyağ', 'Margarin', 'Kızartma Yağı', 'Susam Yağı', 'Zeytin Yağı', 'Tuzsuz Tereyağ', 'Kuyruk Yağı', 'Hindistan Cevizi Yağı', 'Fındık Yağı', 'Bitkisel Yağ',];

  const handleCheckboxToggle = (fruit) => {
    const newSelectedItems = selectedItems.includes(fruit)
      ? selectedItems.filter((selectedItem) => selectedItem !== fruit)
      : [...selectedItems, fruit];
    setSelectedItems(newSelectedItems);
  };
  
  return (
    <ScrollView style={styles.checkboxContainer}>
      <Image
        source={{ uri: 'https://dryerebakan.com/wp-content/uploads/2017/11/Sa%C4%9Fl%C4%B1kl%C4%B1-Ya%C4%9F.jpg' }}
        style={styles.image}
      />
      <Text style={styles.sebzelerText}>Yağlar</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Malzeme Ara"
          placeholderTextColor="#555"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
          <Image
          source={require('../../assets/search.png')}
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.checkboxContainer}>
        {fruits
          .filter((fruit) => fruit.toLowerCase().includes(searchText.toLowerCase()))
          .map((fruit, index) => (
            <TouchableOpacity
              key={index}
              style={styles.checkboxItem}
              onPress={() => handleCheckboxToggle(fruit)}
            >
              <View style={styles.checkbox}>
                {selectedItems.includes(fruit) && <Text style={styles.checkmark}>&#10003;</Text>}
              </View>
              <Text>{fruit}</Text>
            </TouchableOpacity>
          ))}
      </View>
      {/* Kaydet butonu */}
      <Button title="Kaydet" onPress={saveAndGoBack} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '120%',
    height: 200,
    resizeMode: 'cover',
  },
  sebzelerText: {
    position: 'absolute',
    left: 16,
    bottom: 560,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 40,
  },
  checkboxContainer: {
    marginTop: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    height: 20,
    width: 20,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default YaglarScreen;
