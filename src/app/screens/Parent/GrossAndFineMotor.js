import React from 'react'
import {
    Heading
} from "native-base"
import { Rating } from 'react-native-elements';
import { View } from 'react-native';
import ChildGrowthQuestions from '../../../ChildGrowthQuestions';
function GrossAndFineMotor(props) {
    return (
        <View style={{ padding: 15 }}>
            <Heading textAlign="center" size="lg">
                {props.symptom}
            </Heading>
            <Heading textAlign="left" mt="5" size="md">
                {ChildGrowthQuestions.find(o => o.key ===
                    props.symptom).question}</Heading>
            {/* <View style={{
                marginTop: 10,
                flexDirection: 'row',
            }}>
                <Heading textAlign="left"
                    size="sm">{ChildGrowthQuestions.
                        find(o => o.key === props.symptom).
                        subquestions[props.i].data}</Heading>
                <Rating
                    count={5}
                    startingValue={1}
                    imageSize={20}
                    onFinishRating={props.calculateFirst}
                />
            </View>
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
            }}>
                <Heading textAlign="left"
                    size="sm">{ChildGrowthQuestions.
                        find(o => o.key === props.symptom).
                        subquestions[props.j].data}</Heading>
                <Rating
                    count={5}
                    startingValue={1}
                    imageSize={20}
                    onFinishRating={props.calculatesecond}
                />
            </View>
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
            }}>
                <Heading textAlign="left"
                    size="sm">{ChildGrowthQuestions.
                        find(o => o.key === props.symptom).
                        subquestions[props.k].data}</Heading>
                <Rating
                    count={5}
                    startingValue={1}
                    imageSize={20}
                    onFinishRating={props.calculateThird}
                />
            </View> */}
        </View>
    )
}

export default GrossAndFineMotor
