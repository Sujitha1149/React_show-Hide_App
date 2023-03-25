import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: true,
    lastName: true,
  }

  firstNameCont = () => {
    const {firstName} = this.state
    if (firstName === true) {
      this.setState({firstName: false})
    } else {
      this.setState({firstName: true})
    }
  }

  lastNameCont = () => {
    const {lastName} = this.state
    if (lastName === true) {
      this.setState({lastName: false})
    } else {
      this.setState({lastName: true})
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="btn-cont">
          <div>
            <button
              type="button"
              className="button"
              onClick={this.firstNameCont}
            >
              Show/Hide Firstname
            </button>
            {firstName ? null : (
              <div className="first-name-cont">
                <p>Joe</p>
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.lastNameCont}
            >
              Show/Hide Lastname
            </button>
            {lastName ? null : (
              <div className="last-name-cont">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
