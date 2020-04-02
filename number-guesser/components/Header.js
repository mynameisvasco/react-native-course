import React from 'react'
import {StyleSheet} from 'react-native'
import { NavBar } from 'galio-framework';

const Header = props => {
    return (
        <NavBar style={styles.heading} titleStyle={styles.title} title={props.title} />
    )
}

const styles = StyleSheet.create({
    heading: {
        backgroundColor: '#1232FF',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 30,
    },
    title: {
        fontSize: 18,
        color: '#fff'
    }
})

export default Header;