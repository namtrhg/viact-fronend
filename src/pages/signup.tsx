import {
  Card,
  CardContent,
  Divider,
  TextField,
  ThemeProvider,
  createTheme,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material'
import { red } from '@mui/material/colors'
import { IconLogo } from 'components/icons/components/IconLogo'
import { client } from 'libs/api'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { User } from 'types/schema'
import { isValidPassword } from 'utils/validatePassword'

export const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: 'red' },
      },
    },
  },
})

const SignupPage = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showPassRequirement, setShowPasswordRequirement] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user: User = {
      firstName: firstname,
      lastName: lastname,
      username,
      email,
      password,
      phone,
    }
    try {
      await client.signUp(user)
      alert('Account create successfully')
    } catch (error: any) {
      alert(error)
    }
  }

  const isEmpty =
    !username ||
    !firstname ||
    !lastname ||
    !email ||
    !phone ||
    !confirmpassword ||
    !password ||
    !isValidPassword(password) ||
    !confirmpassword ||
    password !== confirmpassword

  return (
    <ThemeProvider theme={theme}>
      <div className="w-full lg:h-screen bg-[#0b454f] relative flex flex-col justify-center items-center font-robo overflow-scroll">
        <img
          className="lg:w-full fixed z-0"
          src="/img/background.png"
          alt="background"
        />
        <Card
          className="w-[350px] lg:w-[1000px] !bg-white m-2.5 mt-4 lg:m-0 lg:p-4 lg:pb-6 lg:absolute z-10"
          sx={{ borderRadius: '20px' }}
        >
          <CardContent className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2">
              <div className="flex justify-center items-center">
                <IconLogo className="w-[200px] lg:w-[280px]" />
                <div className="text-[#eb5757] ml-[5px] text-xs lg:text-base font-robo font-normal">
                  <p>Automate</p>
                  <p>Construction</p>
                  <p>Monitoring</p>
                </div>
              </div>
              <p className="text-center mt-2 text-base">CREATE NEW ACCOUNT</p>
              <p className="text-[#eb5757] text-xl font-bold text-center">
                Build smart risk free
              </p>
              <div className="p-5 flex flex-col space-y-5 lg:space-y-[30px] text-[#4B4C4C] text-sm lg:text-base">
                <p>
                  Understand why Viact is being used on millions of customers
                  everyday
                </p>
                <p>Find out if Viact is the right fit for your business</p>
                <p>Get all your questions answered (personally)</p>
                <p>
                  Completely risk-free with 14-day free trial and a 30-day money
                  back guarantee!
                </p>
              </div>
            </div>
            <Divider
              className="hidden lg:block"
              orientation="vertical"
              flexItem
            />
            <div className="lg:w-1/2">
              <form className="lg:p-5 space-y-3" onSubmit={handleSubmit}>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 12,
                      paddingTop: 18.5,
                      paddingBottom: 18.5,
                      paddingRight: 14,
                      paddingLeft: 14,
                      fontWeight: 400,
                    },
                  }}
                  InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                  color="error"
                  fullWidth
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 12,
                      paddingTop: 18.5,
                      paddingBottom: 18.5,
                      paddingRight: 14,
                      paddingLeft: 14,
                      fontWeight: 400,
                    },
                  }}
                  InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                  color="error"
                  fullWidth
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  label="Last Name"
                  variant="outlined"
                />
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 12,
                      paddingTop: 18.5,
                      paddingBottom: 18.5,
                      paddingRight: 14,
                      paddingLeft: 14,
                      fontWeight: 400,
                    },
                  }}
                  InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                  color="error"
                  fullWidth
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  label="Username"
                  variant="outlined"
                />
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 12,
                      paddingTop: 18.5,
                      paddingBottom: 18.5,
                      paddingRight: 14,
                      paddingLeft: 14,
                      fontWeight: 400,
                    },
                    name: 'email',
                  }}
                  InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                  color="error"
                  fullWidth
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  variant="outlined"
                />
                <PhoneInput
                  country="vn"
                  inputProps={{
                    style: {
                      paddingTop: 18.5,
                      paddingBottom: 18.5,
                      fontWeight: 400,
                      width: '100%',
                      height: '53.28px',
                    },
                    name: 'phone',
                    required: true,
                  }}
                  specialLabel="Phone"
                  onChange={(phone) => setPhone(phone)}
                />
                <div className='relative'>
                  <TextField
                    inputProps={{
                      style: {
                        fontSize: 12,
                        paddingTop: 18.5,
                        paddingBottom: 18.5,
                        paddingRight: 14,
                        paddingLeft: 14,
                        fontWeight: 400,
                      },
                    }}
                    InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                    type={showPassword ? 'text' : 'password'}
                    color="error"
                    fullWidth
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    variant="outlined"
                    onFocus={() => setShowPasswordRequirement(true)}
                    onBlur={() => setShowPasswordRequirement(false)}
                  />
                  {showPassRequirement && <div className='bg-white absolute top-11 text-sm p-2 shadow-lg z-50'>Must contain at least 8 characters, a combination of upper, lowercase, number and least one special character</div>}
                </div>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 12,
                      paddingTop: 18.5,
                      paddingBottom: 18.5,
                      paddingRight: 14,
                      paddingLeft: 14,
                      fontWeight: 400,
                    },
                  }}
                  InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                  type={showPassword ? 'text' : 'password'}
                  color="error"
                  fullWidth
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label="Confirm Password"
                  variant="outlined"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        '&.Mui-checked': {
                          color: red[500],
                        },
                      }}
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                  }
                  label={<p className="text-sm font-light">Show password</p>}
                />
                <Button
                  type="submit"
                  className="bg-[#23b6d8] w-full text-xs mb-3 px-1.5 py-4 uppercase mt-4"
                  variant="contained"
                  disabled={isEmpty}
                >
                  Sign up
                </Button>
              </form>
              <div className="lg:px-20 mb-5 mt-4">
                <p className="text-xs text-center">
                  By clicking Sign up or Continue with Google, you agree to
                  viAct’s
                  <span className="text-[#eb5757] text-xs font-bold text-center">
                    {' '}
                    Terms and Conditions for Free Trial.
                  </span>
                </p>
              </div>
              <p className="mt-5 text-xs text-center">
                Already have an account?{' '}
                <a href="/login" className="text-[#eb5757] font-bold">
                  Log in.
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  )
}

export default SignupPage
