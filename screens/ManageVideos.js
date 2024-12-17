import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av'; // Importing Video from expo-av to play videos
import * as SQLite from 'expo-sqlite'; // Import SQLite

// Open the SQLite database


export default function ImagePickerExample() {
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null); // Track media type (image or video)
  const [mediaList, setMediaList] = useState([]); // To store fetched media from SQLite

  // Initialize the database and create the table if it doesn't exist
  useEffect(() => {
    const initDB = async () => {
      try {
        const db = await SQLite.openDatabaseAsync('mediaDB.db');

        await db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS media (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uri TEXT NOT NULL,
            type TEXT NOT NULL
          );
        `);
      } catch (e) {
        console.log(e);
      }
    };

    initDB();
    fetchMedia(); // Fetch media on initial load
  }, []);

  // Fetch saved media from SQLite
  const fetchMedia = async () => {
    try {
      const db = await SQLite.openDatabaseAsync('mediaDB.db');
      const result = await db.getAllAsync('SELECT * FROM media');
      setMediaList(result); // Store fetched media URIs and types
    } catch (e) {
      console.log(e);
    }
  };

  // Pick an image or video
  const pickImage = async () => {
    // Requesting image/video picker
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: [ 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setMedia(result.assets[0].uri);
      setMediaType(result.assets[0].type);
      saveMedia(result.assets[0].uri, result.assets[0].type);
    }
  };

  // Save picked media to SQLite
  const saveMedia = async (uri, type) => {
    try {
      const db = await SQLite.openDatabaseAsync('mediaDB.db');
      await db.runAsync('INSERT INTO media (uri, type) VALUES (?, ?)', uri, type);
      fetchMedia(); // Refresh the media list after saving
    } catch (e) {
      console.log(e);
    }
  };

  // Delete media from SQLite
  const deleteMedia = async (id) => {
    try {
      const db = await SQLite.openDatabaseAsync('mediaDB.db');
      await db.runAsync('DELETE FROM media WHERE id = ?', id);
      fetchMedia(); // Refresh the media list after deleting
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image or video from camera roll" onPress={pickImage} />

      {media && mediaType === 'image' && (
        <Image source={{ uri: media }} style={styles.media} />
      )}

      {media && mediaType === 'video' && (
        <Video
          source={{ uri: media }}
          style={styles.media}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      )}

      <Text style={styles.mediaListTitle}>Saved Media:</Text>
      {mediaList.map((item) => (
        <View key={item.id} style={styles.mediaItem}>
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
          <Button
            title="Delete"
            onPress={() => deleteMedia(item.id)} // Call delete function
          />
        </View>
      ))}
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
  media: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  mediaListTitle: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  mediaItem: {
    marginTop: 10,
    alignItems: 'center',
  },
});
