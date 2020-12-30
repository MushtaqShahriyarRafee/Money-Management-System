import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/actions/authActions'

class Home extends React.Component {
    render() {
        return ( <
                div >
                <
                hi > I am Home < /hi> {
                this.props.auth.isAuthenticated ?
                <
                button className = 'bth btn-danger'
                onClick = {
                    () => this.props.logout(this.props.history)
                } > Logout < /button>:  <
                Link to = '/login' > < button className = 'bth btn-success' > Login < /button></Link >
            } <
            /div>
    )
}
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Home)