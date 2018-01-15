import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import Voice from 'react-native-voice';


export default class App extends React.Component {
    constructor(props){
        super(props);
        //Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        // Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
        this.state = {
            text:'Hello',
            recognisedText:'',
            eve: 'none'
        };
    }

    onSpeechResultsHandler(event){
        this.setState({ 'recognisedText': event.value[0] });
        this.setState({ 'eve': 'result' });
    }

    onPressStart() {
        Voice.start('en');
        this.setState({ 'text': 'Starting' });
    }
    onPressStop(){
        Voice.stop();
        this.setState({ 'text': 'Stopped' });
    }

    render() {
        let { text, recognisedText, eve } = this.state;
        return (
          <View style={styles.container}>
              <Button onPress={ this.onPressStart.bind(this) }
                      title="Start"
                      color="#841584" />
              <Button onPress={ this.onPressStop.bind(this) }
                      title="Stop"
                      color="#841584"></Button>
            <Text>Speech: { recognisedText }</Text>
            <Text>Listing: { text }</Text>
            <Text>Event: { eve }</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
