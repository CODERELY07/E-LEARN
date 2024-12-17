import React from 'react';
import { View, Text, TouchableOpacity,TextInput, Image, ScrollView, StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from '../styles/styles';

  
  function VideoScreen() {
    return (
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <View style={styles.iconsContainer}>
          <Image source={require('./../assets/logo1.png')} style={styles.logoStyle} />
          <AntDesign name="questioncircle" size={32} color="black" />
          <StatusBar style="auto" />
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.search} placeholder="Search..." />
          <TouchableOpacity style={styles.searchIcon}>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={{uri: 'https://thumbs.dreamstime.com/z/print-182411869.jpg'}} style={{width:'100%',height:300,marginTop:10,borderColor:'#000'}}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-around',}}>
          <View>
            <Text>
              Number Song from 1 to 10 for Children
            </Text>
            <View style={{flexDirection:'row',gap:10}}>
              <View style={{borderColor:'#000',borderWidth:1,paddingVertical:2,paddingHorizontal:6,borderRadius:6,marginVertical:4}}>
                <AntDesign name="like2" size={18} color="black" />
              </View>
              <View style={{borderColor:'#000',borderWidth:1,paddingVertical:2,paddingHorizontal:6,borderRadius:6,marginVertical:4}}>
                <AntDesign name="dislike2" size={18} color="black" />
              </View>
            </View>
          </View>
          <View>
            <AntDesign name="download" size={18} color="black" style={{borderColor:'#000',borderWidth:1,paddingVertical:2,paddingHorizontal:18,borderRadius:6,}}/>
          </View>
        </View>
        <ScrollView>
          <View style={{ padding: 20,gap:20}}>
            <TouchableOpacity style={{flexDirection:'row',gap:10,}}>
              <View>
                <Image source={require('./../assets/11.webp')} style={{width:150,height:100}} resizeMode='cover'/>
              </View>
              <View style={{width:'50%'}}>
               <Text style={{paddingTop:5,fontWeight:'bold'}}>Adding Numbers from 1 to 20, Grade 1 Lesson.
               </Text>
               <Text style={{marginTop:10,fontSize:12}}>Teacher Dobert</Text>
               <Text style={{fontSize:12}}>43 views</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',gap:10,}}>
              <View>
                <Image source={{uri: 'https://thumbs.dreamstime.com/z/print-182411869.jpg'}} style={{width:150,height:100}} resizeMode='cover'/>
              </View>
              <View style={{width:'50%'}}>
               <Text style={{paddingTop:5,fontWeight:'bold'}}>Subtracting Numbers from 1 to 20, Grade 1 Lesson.
               </Text>
               <Text style={{marginTop:10,fontSize:12}}>Teacher Dobert</Text>
               <Text style={{fontSize:12}}>413 views</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',gap:10,}}>
              <View>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXA6gs9nr_vcXY3ITAcXxO2zk6Vhi6RDGcvw&s'}} style={{width:150,height:100}} resizeMode='cover'/>
              </View>
              <View style={{width:'50%'}}>
               <Text style={{paddingTop:5,fontWeight:'bold'}}>Multiplying Numbers from 1 to 20, Grade 1 Lesson.
  
               </Text>
               <Text style={{marginTop:10,fontSize:12}}>Teacher Dobert</Text>
               <Text style={{fontSize:12}}>421 views</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',gap:10,}}>
              <View>
                <Image source={{uri:'https://thumbs.dreamstime.com/b/kids-numbers-funny-isolated-white-background-31099687.jpg'}} style={{width:150,height:100}} resizeMode='cover'/>
              </View>
              <View style={{width:'50%'}}>
               <Text style={{paddingTop:5,fontWeight:'bold'}}>Count numbers one to ten
               </Text>
               <Text style={{marginTop:10,fontSize:12}}>Let's Learn Colors</Text>
               <Text style={{fontSize:12}}>23 views</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',gap:10,}}>
              <View>
                <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/013/549/621/non_2x/nature-landscape-illustration-with-a-cute-and-colorful-design-suitable-for-kids-background-free-vector.jpg'}} style={{width:150,height:100}} resizeMode='cover'/>
              </View>
              <View style={{width:'50%'}}>
               <Text style={{paddingTop:5,fontWeight:'bold'}}>Adding Numbers from 1 to 20, Grade 1 Lesson.
               </Text>
               <Text style={{marginTop:10,fontSize:12}}>Teacher Dobert</Text>
               <Text style={{fontSize:12}}>41 views</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  


export default VideoScreen;
