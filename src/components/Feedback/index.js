// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  onClickEmoji = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {isTrue} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {!isTrue && (
          <div className="container">
            <h1 className="head">
              How satisfied are you with our <br />
              customer support performance?
            </h1>
            <ul className="cart">
              {emojis.map(each => (
                <li className="emoji" key={each.id}>
                  <button
                    className="btn"
                    onClick={this.onClickEmoji}
                    type="button"
                  >
                    <img src={each.imageUrl} className="img" alt={each.name} />
                  </button>
                  <p className="name">{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isTrue && (
          <div className="container">
            <img src={loveEmojiUrl} className="happy-emoji" alt="love emoji" />
            <h1 className="text">Thank You!</h1>
            <p className="para2">
              We will use feedback to improve our customer support performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
