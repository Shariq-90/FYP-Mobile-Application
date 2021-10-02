import React from 'react'
import { View,StyleSheet,Text,StatusBar } from 'react-native'
import Svg, { G, Circle, Rect } from 'react-native-svg'
import Donut from './Donut';
const data = [{
    percentage: 8,
    color: 'tomato',
    max: 10
  }, {
    percentage: 14,
    color: 'skyblue',
    max: 20
  }, {
    percentage: 92,
    color: 'gold',
    max: 100
  }, {
    percentage: 240,
    color: '#222',
    max: 500
  }]
function GraphModal() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
        {data.map((p, i) => {
          return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max}/>
        })}
      </View>
    )
}
const styles= StyleSheet.create({
    modal:{
        width:  '80%'        
    }
})

export default GraphModal
