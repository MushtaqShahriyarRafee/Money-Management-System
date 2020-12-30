import React from 'react'
import { Link } from 'react-router-dom'
import { login } from '../store/actions/authActions'
import { connect } from 'react-redux'

class Login extends React.Component {
        //name, email, password, confirmPassword
        state = {
            email: '',
            password: '',
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
            let { email, password } = this.state
            this.props.login({ email, password }, this.props.history)
        }

        render() {
                let { email, password, error } = this.state
                return ( <
                    div classname = 'row' >
                    <
                    div className = "col-md-6 offset-md-3" >
                    <
                    h1 className = 'text-center display-4' > Login Here < /h1>  <
                    form onSubmit = { this.submitHandler } >
                    <
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
                    /> {
                        error.email && <
                            div className = "invalid-feedback" > { error.email } < /div>} <
                            /div> <
                        div className = 'form-group my-3' >
                            <
                            label htmlFor = "password" > Password: < /label> <
                        input type = "password"
                        className = { error.password ? 'form-control is-invalid my-2' : 'form-control my-2' }
                        placeholder = "Enter your password"
                        name = 'password'
                        id = 'password'
                        value = { password }
                        onChange = { this.changeHandler }
                        /> {
                            error.password && <
                                div className = "invalid-feedback" > { error.password } < /div>}

                            <
                            /div> <
                            Link to = '/register' > Don 't have account? Register here.</Link> <
                            button className = 'btn btn-primary my-3 d-block' > Login < /button>

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

                export default connect(mapStateToProps, { login })(Login)



                // import react from 'react'

                // const Login = props => ( < h1 > I am Login < / h1> )

                //         export default Login