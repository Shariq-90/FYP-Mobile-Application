import { Heading, View } from 'native-base'
import React from 'react'
import ChildGrowthQuestions from '../../../ChildGrowthQuestions'
import { Rating } from 'react-native-elements';
import RatingComponent from '../../RatingComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function ChildGrowthOp(props) {
    return (
        <View style={{
            padding: 15,
        }}>
            <Heading textAlign="center" size="lg"
            >
                {ChildGrowthQuestions.find(o => o.key === props.symptom).key}
            </Heading>
            <View style={{ flexDirection: 'row',
        paddingHorizontal: 3
        }}>
                <FontAwesome name="chevron-right" size={20} 
                style = {{
                    marginTop: 24,
                    marginRight: 5
                }}/>
                <Heading textAlign="left" mt="5" size="md">
                    {ChildGrowthQuestions.find(o => o.key ===
                        props.symptom).question}</Heading>
                {/* <Rating
                    count={5}
                    startingValue={1}
                    imageSize={20}
                    onFinishRating={props.calculateMethod}
                /> */}

            </View>
            <View style={{ marginTop: 10 }}>
                <RatingComponent rating={props.rating}
                    setRating={props.setRating}
                />
            </View>
        </View>
    )
}

export default ChildGrowthOp
