import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../store/actions/user';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

class Profile extends Component {

    logout = () => {
        this.props.onLogout();
        this.props.navigation.navigate('Auth');
    }

    render() {
        const imagem = require('../../assets/images/gate.jpg');
        const avatar = this.props.avatar ? 
            <Avatar source={this.props.avatar}
                size={150}
                containerStyle={styles.avatar}
                rounded /> :
            <Avatar source={imagem}
                size={150}
                containerStyle={styles.avatar}
                rounded />

        return (
            <View style={styles.container}>
                {avatar}
                <Text style={styles.nickname}>{this.props.name}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
                <TouchableOpacity onPress={this.logout} style={styles.button}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        marginTop: 100,
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 20,
        fontSize: 25,
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    }
});

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
        avatar: user.avatar
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    };
};


// export default Profile;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);