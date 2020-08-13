import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,      // for button
  Environment,
  asset,
} from 'react-360';

export default class summer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scene: 1,
      clickStill: 'Draw star name !',
    };
  }

  onClickStill = ()=>{
  if (this.state.scene === 1) {
    this.setState({ scene: 2 })
    this.setState({ clickStill: 'Delete star name !' })
    Environment.setBackgroundImage(asset('summer_all.jpg'))

  } else {
    this.setState({ scene: 1 })
    this.setState({ clickStill: 'Draw star name !' })
    Environment.setBackgroundImage(asset('summer.jpg'))
  }
}

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Web Planetarium in summer ver.
          </Text>
        </View>

        <View>
          <VrButton style={styles.stillBox} onClick={this.onClickStill}>
            <Text style={styles.still}>{this.state.clickStill}</Text>
          </VrButton>
        </View>

      </View>
    );
  }
};

// StyleSheet
const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 2000, height: 1000,
    marginBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    transform: [{translate: [-500, 250, 0] }],

  },
  greetingBox: { padding: 10, },
  greeting: { fontSize: 20, },

  stillBox: {
    width: 1000,
    margin: 10,    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 0, 0.3)',
    // borderColor: '#ffffff',
    borderWidth: 1,

  },
  still: { fontSize: 30, },

});

AppRegistry.registerComponent('summer', () => summer);
