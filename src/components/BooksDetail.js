import React from "react";
import { StyleSheet,  View} from "react-native";
import {NativeBaseProvider,Box, Text,Heading,HStack,Pressable, Image} from "native-base";

var ad=[
  require('../images/img_book_fashinopolis.png'),
  require('../images/img_book_chanel.png'),
  require('../images/img_book_calligraphy.png'),
  require('../images/img_book_ysl.png'),
  require('../images/img_book_tbos.png'),
  require('../images/img_book_stitchedup.png'),
];
var st=[
  require('../images/icon_star_empty.png'),
  require('../images/icon_star_filled.png'),
];
const BooksDetail =({ album, navigation}) => {
  //  let { album } = props;
  
   return (
    // <NativeBaseProvider>
      <Box bg="white">
           <Pressable
              onPress={() => {console.log(album);navigation.navigation.navigate('Detail',album)}}
            >
              <Box>
                <Box>
                 <Image
                  style={styles.imageStyle}
                  source={ad[album.image]}
                  alt="123"
                />   
              </Box>
              </Box>  
              <Box>
                {album.star!="null"? <HStack mt="16px">
                  <Image
                    source={st[album.star[0]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[1]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[2]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[3]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[4]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[5]]} alt="123"
                    mr="4px"
                  />
                </HStack>:null}        
                <Heading style={styles.headerTitleStyle}>{album.title}</Heading>
                <Text style={styles.headerContentStyle} color="black:alpha.50" >{album.artist}</Text>
              </Box>    
            </Pressable> 
      </Box>
    // </NativeBaseProvider>
  )};

const styles = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 16,
    // fontWeight: 'bold',
  },
  headerContentStyle: {
    fontSize: 12,
    // fontWeight: '300',
    // color:"#000",
  },
  imageStyle: {
    height: 200,
    width: 140,
    marginRight:16,
  }
});

export default BooksDetail;
