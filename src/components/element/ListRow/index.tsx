/*eslint-disable */
import React, { useState } from 'react';
import { View, Text , StyleSheet, Image, TouchableHighlight  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface detail {
    width?: number,
    value: string,
    size?: number,
    height?: number,
    borderRadius?: number,
    color?:string,
    resizeMode?: string,
    type: string
}

interface Props {
    borderColor?: string,
    backgroundColor?: string,
    borderRadius?: string
    disabled?: Boolean,
    hasBorder?: Boolean,
    extraText?: string,
    note?: string,
    prefix?: detail
    suffix?: detail
    title?: string,
    children?: any,
    onClick?(): void,
    onLongPress?(): void
}

const ListRow: React.FC<Props> = (props) => {
    const { hasBorder, note , disabled} = props
    const containerStyle = Object.assign({}, styles.container, disabled ? styles.disabled : {}, {borderBottomWidth: hasBorder && 1})

    const detailStyle = (key:string): object => {
        return  Object.assign({}, styles.detail, {
            width: props[key]?.width,
            height: props[key]?.height
        })
    }

    const bothSides = (key: string):React.ReactNode => {
        if (props.children?.props[key] && props.children) {
            return props.children
        } else {
            return (
                props[key]?.type === 'icon' ? 
                <Icon 
                    name={ props[key]?.value}
                    size={ props[key]?.size}
                    color={ props.disabled? '#ccc' : props[key]?.color}
                />
                :
                <Image
                    style={detailStyle(key)}
                    source={Number(props[key]?.value)}
                />
            )
        }
    }

    const noteNode = ():React.ReactNode => {
        const noteStyle = Object.assign({}, styles.note, {height: note ? 20 : 0})
        return (
            <Text
                ellipsizeMode='tail'
                numberOfLines={1}
                style={noteStyle}
            >
                {props.note}
            </Text>
        )
    }

    return (
        <TouchableHighlight
            activeOpacity={0.5}
            underlayColor={ props.disabled? '#f9f9f9' : '#f1f1f1'}
            onPress={ () => { !props.disabled && props.onClick && props.onClick()  }}
            onLongPress={ () => { !props.disabled && props.onLongPress && props.onLongPress()  }}
        >
            <View style={containerStyle} >
            <View style={styles.left}>
                { bothSides('prefix') }
                <View >
                        <Text
                            ellipsizeMode='tail'
                            numberOfLines={1}
                            style={styles.title}
                        >
                            {props.title}
                        </Text>
                        { noteNode() }
                </View>
            </View>
            <View style={styles.right}>
                <Text 
                    ellipsizeMode='tail' 
                    numberOfLines={1} 
                    style={styles.extraText}
                    >
                    {props.extraText}
                </Text>
                { bothSides('suffix') }
            </View>
            </View>
        </TouchableHighlight >
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        borderColor: '#ccc',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        opacity:  1,
        backgroundColor: '#fff',
        position: "relative",
        zIndex: -1
    },
    disabled: {
        borderColor: '#ccc',
        opacity: .5,
    },
    left: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    detail: {
        width: 32,
        height: 32,
        borderRadius:  50,
        resizeMode: 'cover',
    },
    title: {
        width: 120,
        marginLeft: 5
        
    },
    extraText: {
        width: 70
    },
    note: {
        width: 140,
        color: '#ccc',
        marginLeft: 5
    }
})


ListRow.defaultProps = {
    disabled: false,
    hasBorder: true
}
export default ListRow
