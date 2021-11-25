// import { View } from 'native-base';
import React, { useState } from 'react'
import { View, Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function RatingComponent(props) {
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
    return (<View style={styles.customRatingBarStyle}>
        {maxRating.map((item, index) => {
            return (
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={item}
                    onPress={() => props.setRating(parseFloat(item).toFixed(1))}
                >
                    <Image style={styles.starImgStyle}
                        source={
                            item <= props.rating ?
                                require('./assets/star_filled.png') :
                                require('./assets/star_corner.png')
                        }

                    />
                </TouchableOpacity>
            )
        })}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    starImgStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    }
})
export default RatingComponent
