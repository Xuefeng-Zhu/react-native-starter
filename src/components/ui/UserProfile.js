import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  Avatar,
} from 'react-native-elements'


/* Styles ==================================================================== */
const styles = StyleSheet.create({
  avatar: {
    flex: 1,
  },
  bio: {
    flex: 3,
  },
  container: {
    'backgroundColor': '#FFFFFF',
    flexDirection: 'row',
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  readMore: {
    color: 'red',
    bottom: 0,
    right: 0,
    position: 'absolute',
  }
})

/* Component ==================================================================== */
class UserProfile extends Component {

  static componentName = 'UserProfile';

  static propTypes = {
    profile: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      showMore: false,
    }

    this.onClickReadMore = this.onClickReadMore.bind(this)
  }

  onClickReadMore() {
    this.setState({
      showMore: true,
    })
  }

  render() {
    const { name, profileImage, bio } = this.props.profile
    const { showMore } = this.state
    const numberOfLines = showMore ? null : 3

    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar
            large
            rounded
            source={{uri: profileImage}}
            activeOpacity={0.7}
          />
        </View>

        <View style={styles.bio}>
          <Text style={styles.name}>
            {name}
          </Text>

          <Text numberOfLines={numberOfLines}>
            {bio}
          </Text>

          { !showMore &&
            <Text style={styles.readMore} onPress={this.onClickReadMore}>
              read more
            </Text>
          }
        </View>
      </View>
    )
  }
}

/* Export Component ==================================================================== */
export default UserProfile