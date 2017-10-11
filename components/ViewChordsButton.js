import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { openChordModal } from '../actions';

class ViewChordsButton extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Button
          raised
          icon={{ name: 'library-music' }}
          title="View Transposed Chords"
          backgroundColor='#2196F3'
          onPress={() => this.props.openChordModal()}
        />
      </View>
    );
  }
}

export default connect(null, { openChordModal })(ViewChordsButton);
