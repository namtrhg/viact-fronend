import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  TextField,
} from '@mui/material'
import { red } from '@mui/material/colors'
import { IconGoogle } from 'components/icons/components/IconGoogle'
import { IconLogo } from 'components/icons/components/IconLogo'
import { ROUTES } from 'constants/routes'
import { useAuthContext } from 'context/auth'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const LoginForm = () => {
  const { push } = useRouter()
  const [emailOrUsername, setEmailorUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const { login, isLogin } = useAuthContext()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsFirstRender(false)
    if (!emailOrUsername || !password) return
    try {
      login(emailOrUsername, password)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    if (isLogin) {
      push(ROUTES.HOME)
    }
  }, [isLogin, push])

  return (
    <div className="w-full h-screen bg-[#0b454f] relative overflow-hidden flex flex-col justify-center items-center font-robo">
      <img className="lg:w-full" src="/img/background.png" alt="background" />
      <Card
        className="w-[350px] lg:w-[520px] h-[560px] lg:h-[616.7px] !bg-white absolute"
        sx={{ borderRadius: '20px' }}
      >
        <CardContent>
          <div className="flex justify-center items-center">
            <IconLogo className="w-[200px] lg:w-[280px]" />
            <div className="text-[#eb5757] ml-[5px] text-xs lg:text-base font-robo font-normal">
              <p>Automate</p>
              <p>Construction</p>
              <p>Monitoring</p>
            </div>
          </div>
          <p className="text-center font-normal lg:mt-3 font-robo">LOGIN</p>
          <p className="text-xl text-[#eb5757] text-center font-bold font-robo">
            Welcome Back
          </p>
          <form onSubmit={handleSubmit}>
            <div className="p-[5px] lg:p-[30px] pb-0">
              <div className="flex flex-col">
                <TextField
                  sx={{
                    fieldset: { borderColor: '#4B4C4C' },
                  }}
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
                  onChange={(e) => setEmailorUsername(e.target.value)}
                  label="Email or Username"
                  variant="outlined"
                  error={emailOrUsername === '' && !isFirstRender}
                />
                {emailOrUsername === '' && !isFirstRender && (
                  <FormHelperText error className="!text-red-500">
                    Username is a required field
                  </FormHelperText>
                )}
                <div className="my-2" />
                <TextField
                  sx={{
                    fieldset: { borderColor: '#4B4C4C' },
                  }}
                  type={showPassword ? 'text' : 'password'}
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
                  onChange={(e) => setPassword(e.target.value)}
                  color="error"
                  label="Password"
                  variant="outlined"
                  error={password === '' && !isFirstRender}
                />
                {password === '' && !isFirstRender && (
                  <FormHelperText error className="!text-red-500">
                    Password is a required field
                  </FormHelperText>
                )}
              </div>
              <div className="flex justify-between items-center">
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
                <a className="text-xs font-robo font-bold text-[#eb5757]">
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                className="!bg-[#23b6d8] !w-full !text-xs !mb-3 !px-1.5 !py-4 !uppercase !mt-4"
                variant="contained"
              >
                Login
              </Button>
              <p className="mb-2.5 text-sm text-center">OR</p>
              <Button
                className="!bg-[#eb5757] !w-full !text-xs !mb-3 !px-1.5 !py-4 !uppercase"
                variant="contained"
              >
                <IconGoogle className="mr-1" /> Login with google
              </Button>
              <p className="text-xs mt-2.5 text-center">
                Not on Viact yet?{' '}
                <a
                  href="/signup"
                  className="font-bold text-base text-[#eb5757]"
                >
                  Signup
                </a>{' '}
                now.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginForm
