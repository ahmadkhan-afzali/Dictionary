import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

// ScrollView and FlatList.
// for more data we have to use FlatList because:
// FlatList renders that much data which are visible on the screen but the hide data cannot 
// render and this future helps for better and speed work of application.But
// ScrollView makes slow for long data rendering because invisible data also are rendering behind the screen.but
// it's for small data not for large data.

const dummy=[

  {id:1, name:"Ahmad", email:"123@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:2, name:"Mohmmad", email:"133@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:3, name:"Azeem", email:"132@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:4, name:"Haroon", email:"312@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:5, name:"Naseeb", email:"112@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:6, name:"Abdul", email:"113@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:7, name:"Khairo", email:"13@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:8, name:"Farhad", email:"23@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:9, name:"Kazeem", email:"12@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:10, name:"Rahim", email:"103@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:11, name:"toti", email:"102@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:12, name:"arune", email:"143@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:13, name:"ashish", email:"153@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:14, name:"visah", email:"163@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:15, name:"jatin", email:"183@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:16, name:"jabar", email:"180@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:17, name:"hashmat", email:"100@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
  {id:18, name:"bahram", email:"101@gmail.com",image:'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'},
]
const Flatlist = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>

        <FlatList
          data={dummy}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image
                   style={styles.imgStyle}
                   source={{
                   uri: 'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png'
                }}
              />
              <Text>Name</Text>
              <Text>Address</Text>
            </View>
          )}
              keyExtractor={item => item.id}
                ItemSeparatorComponent={<View style={{height:10}} />}
                //gives space to views from top
                numColumns={3}
                columnWrapperStyle={{gap:10}}
                // columnWrapperStyle={{justifyContent:'space-between'}}
                // columnWrapperStyle attribute gives space horizontaly.

                // to show data horizontaly just write horizontal instead of numCoulumn and columnWapperStyle
                // horizontal
        />
        {/* <View style={styles.card}>
          <Image
              style={styles.imgStyle}
              source={{
              uri: 'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
            }}
          />
          {/* source={require("./src/Images/bird.jpg")} // from local file */}
        // ❌ "src" is for web, not React Native
        {/* <Text>Name</Text>
          <Text>Address</Text>
        </View>  */}
      </View>
    </SafeAreaView>
  );
};

export default Flatlist;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 130,
    backgroundColor: 'white',
  },
  imgStyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
});