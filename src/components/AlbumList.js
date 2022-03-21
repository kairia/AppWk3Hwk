import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import {NativeBaseProvider,Heading} from 'native-base';
import BooksDetail from "./BooksDetail";
import sections from "../json/album_section.json";



const Albumlist = (navigation) => {
  const renderSectionHeader = ({section}) => (
    <>
      <Heading style={styles.sectionHeader}>{section.title}</Heading>
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <BooksDetail album={item} navigation={navigation}/>}
          showsHorizontalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          keyExtractor={ item => item.title }
        />
   
    </>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
  };

  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    // fontWeight: '600',
    // fontSize: 18,
    paddingTop: 16,
    paddingBottom: 16,
    // paddingLeft: 20,
    // textTransform: 'uppercase',
  },
})

export default Albumlist;
