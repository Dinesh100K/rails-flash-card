import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/common/Button'
import { Card } from '../components/common/Card'
import { Checkbox } from '../components/common/Checkbox'
import { Label } from '../components/common/Label'
import { TextField } from '../components/common/TextField'
const backdrop = require('../../../../assets/images/backdrop.jpg')

const RegisterPage = (props: any) => {
  const handleSubmit = (event:any) => {
    event.preventDefault()
    console.log("submitted")
  }

  return (
    <>
      <img className="fixed z-[-1] mt-10 h-screen w-screen border-2" src={backdrop} alt="test" />

      <div
        className={`item-center flex h-screen justify-center overflow-hidden
        py-5 transition-all duration-500 ease-in-out`}>
        <div>
          <Card color="relative text-center top-[10%] bg-white">
          <form className="space-y-6" onSubmit={handleSubmit} id="login-form">
            <h3 className=" text-2xl font-bold text-black/[0.7]"> Register</h3>
            <div className="mt-[3rem] ">
              <p>Please provide details to create a new account</p>
              <br />
              <Label tailwind="flex left-0 ">First Name</Label>
              <TextField type="text" name="firstName">David</TextField>
              <Label tailwind="flex left-0 ">LastName</Label>
              <TextField type="text" name="lastName">Jones</TextField>
              <Label tailwind="flex left-0 ">Email</Label>
              <TextField type="email" name="email">davidjones@email.com</TextField>
              <Label tailwind="flex left-0 ">Password</Label>
              <TextField type="password" name="password">************</TextField>
              <Label tailwind="flex left-0 ">Password Confirmation</Label>
              <TextField type="password" name="passwordConfirmation">************</TextField>
              <div className='my-4 mx-2 flex items-start'>
                <Checkbox>Agree to TOS and privacy policy</Checkbox>
              </div>
              <Button text="Register" type="expanded" />
            </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
