import { FolderOpen, GalleryExport, DocumentForward } from 'iconsax-react-native';
import React, { useState, useEffect } from 'react'
import { Button, Text, TouchableOpacity, View, Image, } from 'react-native'
import DocumentPicker from 'react-native-document-picker'
import { styles } from '../styles/global';
import ReceiveSharingIntent  from 'react-native-receive-sharing-intent';
import  Share  from 'react-native-share';

const Home = ({ navigation }: any) => {

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles]
      });
      console.log(doc)
    } catch (error) {
      if (DocumentPicker.isCancel(error))
        console.log("User cancelled the upload", error);
      else
        console.log(error)
    }
  }

  const shareOnSocialMedia = async () => {
    try {
      const options = {
        message: 'Check out this amazing content!', // The message to share
        url: 'https://example.com', // The URL or content to share
      };
  
      await Share.open(options);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <View>
      <View style={[styles.fileUp]}>
        <Image source={require('../assets/CardAdd.png')} style={[styles.iconstyle]} />
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={[styles.textstyle]}
            onPress={selectDoc}>
            Select Document
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={[styles.button]} onPress={shareOnSocialMedia}>
          <FolderOpen size="35" color="#f47373" />
          <Text style={[styles.textShare]}>
            Share a File
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={shareOnSocialMedia}>
          <GalleryExport size="35" color="#f47373" />
          <Text style={[styles.textShare]}>
            Share a Image
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={shareOnSocialMedia}>
          <DocumentForward size="35" color="#f47373" />
          <Text style={[styles.textShare]}>
            Share a Mail
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Home;
