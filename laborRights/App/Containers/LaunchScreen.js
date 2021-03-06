import React, { Component } from 'react'
import { ScrollView, Text, Image, View, FlatList } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import FormCell from '../Components/FormCell'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    const form = [
      {label: 'Condition'},
      {label: 'Date/Time'},
      {label: 'Piece Size'},
      {label: 'Wage Rate'},
    ]

    return (
      <View style={styles.mainContainer}>
        {/* <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
        {/* <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

        </ScrollView> */}
        {/* <FlatList
        data={form}
        renderItem={({item}) =>
          <FormCell
            label = {item.label}
          />
          }
        /> */}
        <RoundedButton>
          Submit
        </RoundedButton>
      </View>
    )
  }
}
