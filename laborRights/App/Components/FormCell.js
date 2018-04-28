import React, {Component} from 'react'
import {
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native'

class CellNavigateInward extends Component {
  static propTypes = {}

  static defaultProps = {}

  render () {
    const { label } = this.props
    return (
      <View style={styles.cellNavigateInward}>
        <TouchableHighlight onPress={() => navigate()} underlayColor={colors.DEFAULT_TOUCHABLE_HIGHLIGHT}>
          <View style={styles.cellNavigateInward__cell}>
            <View style={styles.cellNavigateInward__cellRow}>
              {checkMark && <Image source={Images.confirmationCheck} style={styles.cellNavigateInward__confirmationCheck} />}
              <Text
                style={styles.cellNavigateInward__entryLabel}>
                {label}
              </Text>
            </View>
            <Text style={statusStyle}>
              {status}
            </Text>
            {/* ADD CHEVRON IMAGE */}
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default CellNavigateInward
