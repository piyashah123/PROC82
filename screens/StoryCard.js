import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";


import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
              <Image source={require{"../assets/story_image_1.png"}} style={styles.storyImage}></Image>
              <View style={styles.title.container}><Text style={styles.storyTitleText}> 
              {this.props.story.title}
              </Text>
              <Text>{this.props.story.author}</Text>
              <Text>{this.props.story.description}</Text>

              </View>
              <View tsyle={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <Ionicons>name={"heart"} size={RFValue(30)} color={"white"}</Ionicons>
                  <Text style={style.likeText}>12k</Text>
                  </View>
                </View>

            </View>


          <Text style={{ color: "white" }}>Story Card!</Text>
        </View >
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
