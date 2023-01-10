import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/common/Button'
import { Card } from '../components/common/Card'
import { TextField } from '../components/common/TextField'
const backdrop = require('../../../../assets/images/backdrop.jpg')

const LoginPage = (props: any) => {
  const googleLogin = (response: any) => {
    // window.open(`/users/auth/google_oauth2`, '_self')
    console.log(response, "I AM RESPONSE FROM GOOGLE")
    let token = response;
    let data = {
      provider: "google_oauth2",
      uid: token.Ca,
      id_token: response.wc.id_token,
      info: {
        email: token.nt.Wt
      }
    }
    console.log(data, "MY USER OBJECT I WANT TO SEND TO THE BACKEND")
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${response.wc.access_token}`,
        'Content-Type': 'application/json',
        'access_token': `${response.wc.access_token}`
      },
      body: JSON.stringify(data)
    }
    return fetch(`social_auth/callback`, requestOptions)
    .then(response => response.json())
    .then(response => {
      console.log(response,  "I AM  RESPONSE FROM THE BACKEND");
      // do something
  })
    .catch(err=>console.log(err))

  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log('submitted')
  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(${backdrop})`, backgroundRepeat: 'repeat-x' }}
        className={`item-center flex h-screen justify-center overflow-hidden
        py-5 transition-all duration-500 ease-in-out`}>
        <div>
          <Card color="relative text-center top-[15%] bg-white">
            <form className="space-y-6" onSubmit={handleSubmit} id="login-form">
              <h3 className=" text-2xl font-bold text-black/[0.7]"> Login to Flash cards</h3>
              <div className="mt-[3rem] ">
                <p className="my-2">Login with your email</p>
                <TextField type="email">Email</TextField>
                <TextField type="password">Password</TextField>
                <div className="my-2">
                  <div className="flex items-start justify-between">
                    <p
                      className=" text-blue-700
                    hover:underline">
                      <NavLink to="/#">Forgot Password?</NavLink>
                    </p>
                    <div className="flex items-start">
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
                <hr className="border-1 my-2 border-black/[0.2]" />
                <p className="my-2">Login with your existing account using the following</p>
                <Button text="Login with Google" onClick={googleLogin} type="expanded" />
                <Button text="Login with Twitter" type="expanded" />
                <Button text="Login with GitHub" type="expanded" />
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  )
}

export default LoginPage
