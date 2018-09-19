import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import flow from 'lodash/fp/flow';
import chunk from 'lodash/fp/chunk';
import map from 'lodash/fp/map';
import CardComponent from './CardComponent';
import * as Card from './Card';
import * as Game from './Game';

const rowKey = (row) => {
  return flow(
    map(({card}) => Card.key(card)),
    (x) => x.join('-'),    
  )(row);
};

const initialState = Game.initialize;

const message = ({turnState}) => {
  let m;
  switch(turnState.name) {
  case Game.NOT_STARTED:
    m = 'Choose a card';
    break;
  case Game.ONE_CARD_FLIPPED:
    m = `Try to find the other ${turnState.item.card.animal}`;
    break;
  case Game.TWO_CARDS_FLIPPED:
    m = Game.hasMatch(turnState) ? 'A match! Click to continue' : 'No match. Reset and try again';
    break;
  case Game.GAME_COMPLETE:
    m = 'All done! Play again?';
    break;
  default:
    'something went wrong';
  }
  return m;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  reduce = (action) => () => {
    this.setState((prevState) => Game.doAction(action, prevState));
  }

  renderRow = (row) => {
    return (
      <Row key={rowKey(row)} style={{height: 75, marginTop: 10}}>
        {map(this.renderItem, row)}
      </Row>
    );
  }

  renderItem = (item) => {
    return (
      <Col key={Card.key(item.card)}>
        <TouchableOpacity          
          onPress={this.reduce(Game.SelectItem(item))}
          style={styles.column}
        >
          <CardComponent item={item} />
        </TouchableOpacity>   
      </Col>     
    );
  }

  renderStatus = () => {
    let result;    
    switch(this.state.turnState.name) {
    case Game.NOT_STARTED:
    case Game.ONE_CARD_FLIPPED:
      result = <Text>{message(this.state)}</Text>;
      break;
    case Game.TWO_CARDS_FLIPPED:
      result = <Button title={message(this.state)} onPress={this.reduce(Game.Continue)} />;
      break;
    case Game.GAME_COMPLETE:
      result = <Button title={message(this.state)} onPress={this.reduce(Game.Reset)} />;
      break;
    default:
      result = <Text>Something went wrong</Text>;
    }
    return result;
  }

  render() {
    return (
      <View style={styles.container}>
        <Grid>
          {flow(           
            chunk(4),
            map(this.renderRow)
          )(this.state.tableau)}
          <Row style={{marginTop: 10}}>{this.renderStatus()}</Row>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 10
  }
});
