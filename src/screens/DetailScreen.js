import React from 'react';
import { Linking,StyleSheet } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack } from "native-base";

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

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    star,
    url,
    image,
    descriptions
  } = route.params;
  var a=Number(star[0])+Number(star[1])+Number(star[2])+Number(star[3])+Number(star[4]);
  var b="Buy Now for $"+price;
  return (
    <Box bg="white" height={640} > 
        <Box width={210} height={300} mx="auto" mt="8px">
          <Image
            source={ad[image]}
            alt='bookImage'
          />
        </Box>
        <Box bg="#fff" width={320} mx="auto" mt="28px">
          <Center>
            <Heading fontSize="24px" color='#000000'>{title}</Heading>
            <Heading my="8px" fontSize="14px" color='#666666'> {artist}</Heading>
            {star!="null"? <HStack mb="16px" alignItems="center">
                  <Image
                    source={st[star[0]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[star[1]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[star[2]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[star[3]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[star[4]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[star[5]]} alt="123"
                    mr="4px"
                  />
                 
                  <Text>{a}.0/5.0 </Text>
              </HStack>:null}
            <Text textAlign="center">{descriptions}</Text>
            <Button 
              mt="28px"
              width="190px"
              onPress={() => Linking.openURL(url)}
              fontSize="14px"
              bg="#6200EE"
            >
           {b}
            </Button>  
          </Center>
        </Box>
       
            
           
       
      
    </Box>

  );
}

export default DetailScreen;
