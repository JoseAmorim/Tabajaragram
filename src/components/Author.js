import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export default props => {
    return (
        <View style={styles.container}>
            <Avatar source={{uri: props.avatar}}
                containerStyle={styles.avatar}
                rounded />
            <Text style={styles.nickname}>{props.nickname}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    nickname: {
        color: '#444',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold',
    }
})