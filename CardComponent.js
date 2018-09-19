import React, { Component } from 'react';
import { Image, View} from 'react-native';
import * as Item from './Item';
import { itemShape } from './PropShapes';

class CardComponent extends Component {
  render() {
    return (
      <View>
        <Image
          source={Item.image(this.props.item)}
          style={{ width: 75, height: 75 }}
        />
      </View>
    );
  }
}

CardComponent.propTypes = {
  item: itemShape 
};

export default CardComponent;
