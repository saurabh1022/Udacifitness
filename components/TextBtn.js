import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { purple } form '../utils/colors'

export dafault function TextBtn({ children, onPress, style={} }){
	return (
		<TouchableOpacity onPress={onPress}>
		<Text style={[styles.reset, style]}>{children}</Text>
		</TouchableOpacity>
		)
}

const styles = StyleSheet.create{
	reset: {
		textAlign: 'center'
		color: purple
	}
}
