import Axios from 'axios'
import * as Types from './types'
import { compareSync } from 'bcrypt'

export const register = user => dispatch => {
    Axios.post('/api/users/register', user)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })

}