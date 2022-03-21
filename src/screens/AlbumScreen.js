import React from "react";
import { Box } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <Box bg="white">
      <AlbumList 
        list={albumData.albumList}
        navigation={navigation}
      />
    </Box>
  );
};

export default AlbumScreen;
