import React from 'react';
import {Text, FlatList, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    }
]

const NavOptions = () => {
    return (
        <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}/>
    )
}

export default NavOptions;
