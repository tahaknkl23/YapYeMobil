import { View, Image, Text, ScrollView,TouchableOpacity, StyleSheet,TextInput,Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import React from 'react'
import { useState } from 'react';

const BugdayUrunleriScreen = ({navigation}) =>{

  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const saveAndGoBack = () => {
    navigation.navigate('AnaEkran', { newItems: selectedItems });
  };
  const fruits = ['Makarna', 'Spagetti', 'Fettucine Makarna', 'Un', 'Mısır Unu','Buğday Nişastası', 'Maya', 'Galeta Un', 'İnce Bulgur ', 'Kalın Bulgur','Yarma Bulgur','Kara Bulgur', 'Yufka ', 'Erişte', 'Kuskus','İrmik ', 'Nişasta', 'Milföy Hamuru ', 'Ekmek', 'Lavaş','Maya', 'Noodle', 'Kabartma Tozu', 'Lazanya','Mısır Nişastası','Pudra Şekeri', 'Mantı ', 'Yulaf', 'Kepekli Un',];

  const handleCheckboxToggle = (fruit) => {
    const newSelectedItems = selectedItems.includes(fruit)
      ? selectedItems.filter((selectedItem) => selectedItem !== fruit)
      : [...selectedItems, fruit];
    setSelectedItems(newSelectedItems);
  };

  return (
<ScrollView style={styles.checkboxContainer}>
    <Image
        source={{ uri: 'https://cdn.dsmcdn.com/mrktng/seo/22agustos9/tam-tahil-nedir-3.jpg' }}
        style={styles.image}
      />
          <Text style={styles.sebzelerText}>Buğday Ürünleri</Text>
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
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sebzelerText: {
    position: 'absolute',
    left: 16,
    bottom: 1280,
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

  searchIcon: {
    position: 'absolute',
    left: 10,
    height: 20,
    width: 20,
  },
  checkboxContainer: {
    marginTop: 10,

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

export default BugdayUrunleriScreen;