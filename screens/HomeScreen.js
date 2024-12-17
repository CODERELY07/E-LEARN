import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, Dimensions, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/styles';

function HomeScreen({ navigation }) {
    return (
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <View style={[styles.iconsContainer,{height:60}]}>
          <Image source={require('./../assets/logo1.png')} style={styles.logoStyle} />
            <Ionicons name="exit" size={32} color="black"  onPress={() => navigation.goBack()} />
          <StatusBar style="auto" />
        </View>
        <View>
          <Text style={styles.ceterText}>
            Hello Kids, I’m Teacher Dobert. What Kind of Learning Mode you want?
          </Text>
        </View>
        <View style={{ gap:0}}>
          <TouchableOpacity onPress={()=>navigation.navigate('ReadingScreen')} style={styles.ImageParentContainer}>
            <View style={styles.imageContainer}>
              <Image source={require('./../assets/reading-removebg-preview.png')} style={styles.homeImage} resizeMode='contain' />
            </View>
            <Text style={[styles.imageLabel, { fontWeight: 900}]}>
              READING
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>navigation.navigate('VideoScreen')} style={styles.ImageParentContainer}>
            <View style={styles.imageContainer}>
              <Image source={require('./../assets/watching-removebg-preview.png')} style={styles.homeImage} resizeMode='contain' />
            </View>
            <Text style={[styles.imageLabel, { fontWeight: 900, bottom: 95 }]}>WATCHING</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


export default HomeScreen;
