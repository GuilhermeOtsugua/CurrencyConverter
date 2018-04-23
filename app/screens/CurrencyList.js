import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    handlePress = () => {
        console.log('row press');
    };

    render() {
        return (
            <View style={{ paddingTop: 20 }}>
                <StatusBar translucent={false} barStyle="light-content" />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handlePress}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

export default CurrencyList;