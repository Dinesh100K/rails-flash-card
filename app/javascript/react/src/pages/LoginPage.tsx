import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/common/Button'
import { Card } from '../components/common/Card'
import { TextField } from '../components/common/TextField'
const backdrop = require('../../../../assets/images/backdrop.jpg')

const LoginPage = (props: any) => {
  // console.log('Environment : ', process.env.REACT_APP_BASE_URL)
  const googleLogin = () => {
    window.open(`/auth/google`, '_self')
  }

  return (
    <>
      <img className="fixed z-[-1] mt-10 h-screen w-screen border-2" src={backdrop} alt="test" />

      <div
        className={`item-center flex h-screen justify-center overflow-hidden
        py-5 transition-all duration-500 ease-in-out`}>
        <div>
          <Card color="relative text-center top-[15%] bg-white">
            <h3 className=" text-2xl font-bold text-black/[0.7]"> Login to Flash cards</h3>
            <div className="mt-[3rem] ">
              <p>Login with your email</p>
              <TextField>Email</TextField>
              <TextField>Password</TextField>
              <div className='my-2'>
                <div className="flex items-start justify-between">
                  <p
                    className=" text-blue-700
                    hover:underline">
                    <NavLink to="/#">Forgot Password?</NavLink>
                  </p>
                  <div  className="flex items-start">
                  Not registered?<span className="w-2"></span>
                  <p
                    className="text-blue-700 
                    hover:underline">
                    <NavLink to="/register">Create account</NavLink>
                  </p>
                  </div>
                </div>
              </div>
              <Button text="Login with Email" type="expanded" />
              <div className="my-10"></div>
              <p>Or login with your existing account using the following</p>
              <Button text="Google Login" onClick={googleLogin} type="expanded" />
              <Button text="Twitter Login" type="expanded" />
              <Button text="GitHub Login" type="expanded" />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default LoginPage
