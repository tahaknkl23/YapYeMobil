import { View, Image,Text,  StyleSheet,ScrollView,TouchableOpacity, } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore'; // Firestore importları
import { firestore } from '../firebaseConfig';



const AnaEkranScreen = ({ navigation,route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // index'teki elemanı silmek için splice kullanılmalıdır
    setCartItems(updatedCart);
};



  useEffect(() => {
    if (route.params?.newItems) {
      addItemsToCart(route.params.newItems);
      // Parametreleri temizlemek için bir yol
      navigation.setParams({ newItems: undefined });
    }
  }, [route.params?.newItems]);

  // cartItems listesi her güncellendiğinde çalışacak useEffect
  useEffect(() => {
    console.log("Güncellenmiş cartItems listesi:", cartItems);
  }, [cartItems]); // Bu useEffect, cartItems değiştiğinde çalışır



    const fetchData = async () => {
      try {
        const q = query(collection(firestore, 'yemekler'), where('içerikler', '==', cartItems));
        const querySnapshot = await getDocs(q);

        const yemek = querySnapshot.docs.map(doc => doc.data());
        return yemek;
      } catch (error) {
        console.error('Firestore Veri Çekme Hatası:', error);
      }
    };


  const addItemsToCart = (newItems) => {
    let lowercaseList = newItems.map(item => item.toLowerCase());

    console.log(lowercaseList);
    setCartItems(prevItems => [...prevItems, ...lowercaseList]);
  };
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    
    console.log(cartItems);
  };

  const veriyiCekVeYonlendir = async () => {
    const yemekler = await fetchData();

      console.log(" yemekler bunlar:", yemekler);
      navigation.navigate('Sepet' ,{ screen: 'SepetScreen',yemek: yemekler });
  
  };


return (
<ScrollView  contentContainerStyle={styles.container}>
    
        <Image
        source={require('../assets/anaekran.png')}
        style={{ width: '100%', height: 200 }}
    />
    <Text style={styles.titleText}>Malzemeleri Seç</Text>
    <Text style={styles.subtitleText}>Yapabileceğimiz en iyi yemekleri bulalım</Text>

    
    {/* {buttonData.map((button) => (
        <TouchableOpacity key={button.id} style={styles.button}>
        <Image source={{ uri: button.imageUrl }} style={styles.buttonImage} />
        <Text style={styles.buttonText}>{button.title}</Text>
        </TouchableOpacity>
    ))} */}
  <TouchableOpacity onPress={() => navigation.navigate('Sebzeler', { 
    screen: 'SebzelerScreen', 
    params: { cartItems, setCartItems } 
  })}>        
<Image
        
          source={{ uri: 'https://i.lezzet.com.tr/images-xxlarge-secondary/dunyadaki-en-saglikli-14-sebze-e0d2cb87-f048-4473-bb33-a0f65e215b1c.jpg' }}
          style={styles.buttonImage}
          
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Sebzeler</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SutUrunleri' ,{ screen: 'SutUrunleriScreen' })}>
        <Image
        
          source={{ uri: 'https://media.istockphoto.com/id/910881428/tr/foto%C4%9Fraf/s%C3%BCt-ve-s%C3%BCt-%C3%BCr%C3%BCnleri-rustik-ah%C5%9Fap-masaya-vurdu.jpg?s=612x612&w=0&k=20&c=xZBvGf1xUw7nr-6gvI2nrE-IKIi2mZ3VWkwe3E-qNR8=' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Süt Ürünleri</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Baklagiller' ,{ screen: 'BaklagillerScreen' })}>
        <Image
        
          source={{ uri: 'https://cdn.yemek.com/uploads/2022/06/kuru-baklagiller-nelerdir-shutter-2.jpg' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Baklagiller</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BugdayUrunleri' ,{ screen: 'BugdayUrunleriScreen' })}>
        <Image
        
          source={{ uri: 'https://cdn.dsmcdn.com/mrktng/seo/22agustos9/tam-tahil-nedir-3.jpg' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Buğday Ürünleri</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HayvansalGıdalar' ,{ screen: 'HayvansalGıdalarScreen' })}>
        <Image
        
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVora5rN82qoMkZQ_rJxBlwsPd9NB-wuduNQ&usqp=CAU' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Hayvansal Gıdalar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DenizUrunleri' ,{ screen: 'DenizUrunleriScreen' })}>
        <Image
        
          source={{ uri: 'https://i.lezzet.com.tr/images-xxlarge-secondary/kabuklu-deniz-urunleri-nelerdir-c08848fc-46ab-48fb-b697-d73c34d7ac88' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Deniz Ürünleri</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Yaglar' ,{ screen: 'YaglarScreen' })}>
        <Image
        
          source={{ uri: 'https://dryerebakan.com/wp-content/uploads/2017/11/Sa%C4%9Fl%C4%B1kl%C4%B1-Ya%C4%9F.jpg' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Yağlar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('KonserveTursuSos' ,{ screen: 'KonserveTursuSosScreen' })}>
        <Image
        
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Pickled_Preserves_for_Sale_-_Beyoglu_District_-_Istanbul_-_Turkey_%285719101647%29.jpg' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Konserve,Turşu,Sos</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Baharatlar' ,{ screen: 'BaharatlarScreen' })}>
        <Image
        
          source={{ uri: 'https://kadioglubaharat.com/wp-content/uploads/2019/02/Baharatlar-Tarladan-Sofraya.jpg' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Baharatlar</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Meyveler' ,{ screen: 'MeyvelerScreen' })}>
        <Image
        
          source={{ uri: 'https://image.milimaj.com/i/milliyet/75/0x0/5f77083c55427e11589dc339.jpg' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Meyveler</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Kuruyemis' ,{ screen: 'KuruyemisScreen' })}>
        <Image
        
          source={{ uri: 'https://sogutsofrasi.com/cdn/shop/products/netflix-kuruyemis-paketi-set--e2c53.jpg?v=1637468602' }}
          style={styles.buttonImage}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.buttonText}>Kuruyemiş</Text>
        </View>
      </TouchableOpacity>
           {/* Sepet ikonu */}
          <TouchableOpacity onPress={toggleModal} style={styles.cartIconContainer}>
        <Icon name="shopping-cart" size={40} color="white" />
      </TouchableOpacity>

      {/* Sepet diyalog kutusu */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
      <View style={styles.modalContainer}>
  {cartItems.map((item, index) => (
    <View key={index} style={styles.cartItemContainer}>
      <Text>{item}</Text>
      <View style={styles.cartItemActions}>
        <TouchableOpacity onPress={() => removeItemFromCart(index)}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  ))}
  <View style={styles.buttonContainer}>
    <Button title="Kaydet" onPress={veriyiCekVeYonlendir} />
  </View>
</View>

      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    
    container: {
        flexGrow: 1,
        alignItems: 'center',
      },
      titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
      },
      subtitleText: {
        fontSize: 18,
        marginBottom: 10,
      },
      button: {
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonImage: {
        width: 300,
        height: 60,
        borderRadius: 10,
        marginBottom: 10,
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'white',

      },
      cartIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
      },
      modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      },
      cartItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      cartItemActions: {
        flexDirection: 'row',
        alignItems: 'center',
      },
});

export default AnaEkranScreen;