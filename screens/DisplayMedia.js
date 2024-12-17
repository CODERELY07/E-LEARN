import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Image } from 'react-native';
import { Video } from 'expo-av';
import * as SQLite from 'expo-sqlite'; // Import SQLite

export default function DisplayMedia() {
  const [mediaList, setMediaList] = useState([]); 

  // Fetch media from the database
  const fetchMedia = async () => {
    try {
      const db = await SQLite.openDatabaseAsync('mediaDB.db');
      const result = await db.getAllAsync('SELECT * FROM media');
      setMediaList(result); // Store fetched media URIs and types
    } catch (e) {
      console.log(e);
    }
  };

  // Update media list every time the component mounts or when media is changed
  useEffect(() => {
    fetchMedia(); // Fetch media on component mount

    // Optional: Automatically refresh media every 3 seconds
    const interval = setInterval(() => {
      fetchMedia();
    }, 3000); // Adjust time as needed for your refresh rate

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Render each item (image or video)
  const renderItem = ({ item }) => (
    <View style={styles.mediaItem}>
      {item.type === 'image' ? (
        <Image source={{ uri: item.uri }} style={styles.media} />
      ) : (
        <Video
          source={{ uri: item.uri }}
          style={styles.media}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Media</Text>

      {mediaList.length === 0 ? (
        <Text style={styles.noMediaText}>No media available</Text>
      ) : (
        <FlatList
          data={mediaList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  media: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  mediaItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  noMediaText: {
    fontSize: 18,
    color: 'gray',
  },
});
