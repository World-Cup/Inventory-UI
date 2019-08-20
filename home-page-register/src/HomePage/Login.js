import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'

//https://www.youtube.com/watch?v=K_wZCW6wXIo


function LogIn(props) {
	const { classes } = props

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    return (
        <div>
            LogIn
        </div>
    )

}
export default LogIn;
