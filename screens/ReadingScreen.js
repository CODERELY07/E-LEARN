import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/styles';
function ReadingScreen({navigation}) {
    const [selectedSubject, setSelectedSubject] = useState(null);
  
    const subjects = [
      {
        name: 'Mathematics',
        topics: [
          { title: 'Algebra', description: 'Algebra content goes here.' },
          { title: 'Geometry', description: 'Geometry content goes here.' },
          { title: 'Calculus', description: 'Calculus content goes here.' },
        ],
      },
      {
        name: 'M.A.PE',
        topics: [
          { title: 'Sports', description: 'Sports content goes here.' },
          { title: 'Fitness', description: 'Fitness content goes here.' },
          { title: 'Health', description: 'Health content goes here.' },
        ],
      },
      {
        name: 'English',
        topics: [
          { title: 'International English', description: 'explores the many variations of the English language; this includes accent, dialect and vernacular.' },
          { title: 'Pronoun', description: 'In linguistics and grammar, a pronoun is a word or a group of words that one may substitute for a noun or noun phrase.' },
          { title: 'Sentence Classification', description: 'Conjunction, prepositions, determiners, punctuation. Tenses, subject, object.' },
          { title: 'English Grammar', description: 'the set of structural rules of the English language. This includes the structure of words, phrases, clauses, sentences, and whole texts.' },
          { title: 'Pragmatics', description: 'the branch of linguistics dealing with language in use and the contexts in which it is used, including such matters as deixis, the taking of turns in conversation, text organization, presupposition, and implicature.' },
          { title: 'Homonyms', description: 'each of two or more words having the same spelling or pronunciation but different meanings and origins.' },
        ],
      },
      {
        name: 'Science',
        topics: [
          { title: 'Biology', description: 'Biology content goes here.' },
          { title: 'Chemistry', description: 'Chemistry content goes here.' },
          { title: 'Physics', description: 'Physics content goes here.' },
        ],
      },
      {
        name: 'Val.Ed',
        topics: [
          { title: 'Values', description: 'Values content goes here.' },
          { title: 'Ethics', description: 'Ethics content goes here.' },
          { title: 'Society', description: 'Society content goes here.' },
        ],
      },
    ];
  
    const handleSubjectPress = (subject) => {
      setSelectedSubject(subject);
    };
  
    return (
      <View style={{ backgroundColor: '#fff', paddingTop: 70, flex: 1,}}>
         <View style={[styles.iconsContainer,{marginTop:-80}]}>
          <Image source={require('./../assets/logo1.png')} style={styles.logoStyle} />
            <Ionicons name="exit" size={32} color="black" onPress={()=> navigation.goBack()}/>
          <StatusBar style="auto" />
        </View>
        <ScrollView style={{ marginTop:-40 ,height:40}} horizontal showsHorizontalScrollIndicator={false}>
          {subjects.map((subject, index) => (
            <TouchableOpacity key={index} onPress={() => handleSubjectPress(subject)}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: selectedSubject?.name === subject.name ? 18 : 16,
                  fontWeight: 'normal',
                }}
              >
                {subject.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView>
          <View style={{ alignItems: 'center', width:'90%', marginRight:'auto', marginLeft:'auto',marginTop: 20 }}>
            {selectedSubject ? (
              selectedSubject.topics.map((topic, index) => (
                <View key={index} style={{ marginBottom: 20, alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{topic.title}</Text>
                  <Text style={{ marginTop: 5 ,textAlign:'center'}}>{topic.description}</Text>
                  <TouchableOpacity
                    style={{
                      marginTop: 10,
                      backgroundColor: '#007BFF',
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 20,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                      width:80,
  
                      elevation: 5,
                    }}
                  >
                    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign:'center'}}>Read</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text>Select a subject to see details.</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
  
  

  


export default ReadingScreen;
