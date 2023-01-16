import {React, useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import axios from 'axios';
function App() {
  const [datas, setData] = useState([]);
  const fetchApi = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        console.warn(response.data);
        setData(response.data);
      })
      .catch(err => {
        console.warn(err);
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <SafeAreaView>
        <View style={{paddingVertical: 50}}>
          <FlatList
            data={datas}
            scrollEnabled
            renderItem={({item}) => (
              <>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={{
                      uri: `${item.image}`,
                    }}
                    style={styles.tinyLogo}
                  />
                  <Text>{item.title}</Text>
                </View>
              </>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 90,
  },
});

export default App;
