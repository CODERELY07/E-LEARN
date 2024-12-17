import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av'; // Import Video from expo-av

export default function VideoPlayerScreen({ route }) {
  const { videoUri } = route.params; // Get the video URI passed from VideoListScreen

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUri }} // URI of the selected video
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: 300,
  },
});
