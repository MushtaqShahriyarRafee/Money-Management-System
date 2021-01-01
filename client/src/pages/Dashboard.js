import React from 'react'
import { connect } from 'react-redux'
import { loadTransactions } from '../store/actions/transactionActions'

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.loadTransactions()
    }

    render() {
        return ( <
            h1 > I am Dashboard.. < /h1>
        )
    }
}

export default connect(null, { loadTransactions })(Dashboard)