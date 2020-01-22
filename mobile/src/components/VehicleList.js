import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class VehicleList extends Component {

  static propTypes = {
      vehicles: PropTypes.array.isRequired
  }; 
  render() {
    return (
      <View style={styles.vehiclesList}>
        {this.props.vehicles.map((vehicle) => {
            return (
                <View key={vehicle.id}>
                    <Text style={styles.vehicletext}>{vehicle.name} </Text>
                </View>
            )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    vehiclesList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    vehicletext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});