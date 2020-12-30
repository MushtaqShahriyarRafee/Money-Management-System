import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../store/actions/authActions'

class Register extends React.Component {
    //name, email, password, confirmPassword
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: {}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)) {
            return {
                error: nextProps.auth.error
            }
        }
        return null
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let { name, email, password, confirmPassword } = this.state
        this.props.register({ name, email, password, confirmPassword }, this.props.history)
    }

    render() {
        let { name, email, password, confirmPassword, error } = this.state
        console.log(this.props)
        return ( <
            div className = 'row' >
            <
            div className = "col-md-6 offset-md-3" >
            <
            h1 className = 'text-center display-4' > Register Here < /h1>  <
            form onSubmit = { this.submitHandler } >
            <
            div className = 'form-group' >
            <
            label htmlFor = "name" > Name: < /label> <
            input type = "text"
            className = { error.name ? 'form-control is-invalid my-2' : 'form-control my-2' }
            placeholder = "Enter your name"
            name = 'name'
            id = 'name'
            value = { name }
            onChange = { this.changeHandler }
            /> {error.name && <
            div className = "invalid-feedback" > { error.name } < /div>}

            <
            /div>  <
            div className = 'form-group' >
            <
            label htmlFor = "email" > Email: < /label> <
            input type = "email"
            className = { error.email ? 'form-control is-invalid my-2' : 'form-control my-2' }
            placeholder = "Enter your email"
            name = 'email'
            id = 'email'
            value = { email }
            onChange = { this.changeHandler }
            /> {error.email && <
            div className = "invalid-feedback" > { error.email } < /div>}

            <
            /div> <
            div className = 'form-group' >
            <
            label htmlFor = "password" > Password: < /label> <
            input type = "password"
            className = { error.password ? 'form-control is-invalid my-2' : 'form-control my-2' }
            placeholder = "Enter your password"
            name = 'password'
            id = 'password'
            value = { password }
            onChange = { this.changeHandler }
            /> {error.password && <
            div className = "invalid-feedback" > { error.password } < /div>}

            <
            /div> <
            div className = 'form-group' >
            <
            label htmlFor = "confirmPassword" > Confirm Password: < /label> <
            input type = "password"
            className = { error.confirmPassword ? 'form-control is-invalid my-2' : 'form-control my-2' }
            placeholder = "Comfirm your password"
            name = 'confirmPassword'
            id = 'confirmPassword'
            value = { confirmPassword }
            onChange = { this.changeHandler }
            /> {error.confirmPassword &&<
            div className = "invalid-feedback" > { error.confirmPassword } < /div>}

            <
            /div> <
            Link to = '/login' > Already have an account ? Login here. < /Link> <
            button className = 'btn btn-primary my-3 d-block' > Register < /button>

            <
            /
            form >

            <
            /
            div > <
            /div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { register })(Register)

// import react from 'react'

// const Register = props => ( < h1 > I am Register < / h1> )

//         export default Register