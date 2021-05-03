import React,{useState} from 'react';
import {Avatar,Button,Paper,Grid,Typography,Container,TextField} from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from './Input'
const Auth = () => {
    const classes = useStyles()
    const [isSignUp,setIsSignUp] = useState(false)
    const [showPassword,setShowPassword] = useState(false)

    const handleSubmit= () =>{}
    const handleChange = ()=>{}
    const handleShowPassword = () => setShowPassword(!showPassword);
    const switchMode = () =>{
        setIsSignUp((prevIsSignUp)=> !prevIsSignUp)
        setShowPassword(false)
    }


        return (
            <Container component={'main'} maxWidth={'xs'}>
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant={'h5'}>
                        {isSignUp? ('Sign Up') : ('Sign In')}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignUp && (
                                    <>
                                        <Input
                                            name={'firstName'}
                                            label={'First Name'}
                                            handleChange={handleChange}
                                            autoFocus
                                            half
                                        />
                                        <Input
                                            name={'lastName'}
                                            label={'Last Name'}
                                            handleChange={handleChange}
                                            half
                                        />
                                    </>
                                )
                            }
                            <Input name='email' label={'Email Address'} handleChange={handleChange} type='email'/>
                            <Input name={'password'} label={'Password'} handleShowPassword={handleShowPassword} handleChange={handleChange} type={showPassword ? 'text' : 'password'}/>
                            {
                                isSignUp && <Input name={'confirmPassword'} label={'Repeat Password'} handleChange={handleChange} type={'password'}/>
                                }
                        </Grid>
                        <Button type={'submit'} fullWidth variant={'contained'} color={'primary'} className={classes.submit}>
                            {isSignUp? 'Sign Up' : 'Sign In'}
                        </Button>
                        <Grid container justify={'flex-end'}>
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignUp? ('Already have an account? SIGN IN') : ('Don´t you have an account? SIGN UP')}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        );
}

export default Auth;
