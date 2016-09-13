import React, { Component, PropTypes } from 'react'
import Divider from 'material-ui/Divider'
import { ListItem } from 'material-ui/List'
// import RightDrawer from './RightDrawer'
// import styles from './ContactItem.css'

export default class ContactItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  render () {
    const { item } = this.props

    return (
      <div>
        <ListItem
          key={item.key}
          onTouchTap={this.handleToggle}
        >
          {item.fname} {item.lname}
        </ListItem>
        <Divider />
      </div>
    )
  }

}

// <RightDrawer
//           item={item}
//           open={this.state.open}
//           drawerTap={this.handleToggle}
//           showReOpenUndo={this.props.showReOpenUndo}
//         />
