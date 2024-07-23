import React from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '../supabaseClient'
import { UserData } from '../types/commonTypes'

const LoginForm = () => {
  const { register, handleSubmit } = useForm<UserData>()

  // Handle form submission
  const onSubmit = async (data: UserData) => {
    const { email, password } = data
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    // Handle any errors
    if (error) {
      console.error('Error signing in:', error.message)
    } else {
      console.log('Signed in successfully!')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Email" />
      <input {...register('password')} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
