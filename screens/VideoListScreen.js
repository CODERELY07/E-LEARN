import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite'; // Import SQLite
import { useNavigation } from '@react-navigation/native'; // For navigation

export default function VideoListScreen() {
  const [videoList, setVideoList] = useState([]);
  const navigation = useNavigation(); // Hook to navigate to the video player screen

  // Fetch videos from the database
  const fetchVideos = async () => {
    try {
      const db = await SQLite.openDatabaseAsync('mediaDB.db');
      const result = await db.getAllAsync('SELECT * FROM media WHERE type = "video"');
      setVideoList(result); // Store video URIs and types
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchVideos(); // Fetch videos when the component mounts
  }, []);

  // Navigate to the VideoPlayerScreen when a video is clicked
  const handleVideoClick = (uri) => {
    navigation.navigate('VideoPlayer', { videoUri: uri });
  };

  // Render each video item
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.videoItem} onPress={() => handleVideoClick(item.uri)}>
      <Text style={styles.videoTitle}>Video {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video List</Text>

      {videoList.length === 0 ? (
        <Text style={styles.noVideoText}>No videos available</Text>
      ) : (
        <FlatList
          data={videoList}
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
  videoItem: {
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    padding: 15,
    width: '80%',
    borderRadius: 5,
  },
  videoTitle: {
    fontSize: 18,
  },
  noVideoText: {
    fontSize: 18,
    color: 'gray',
  },
});
