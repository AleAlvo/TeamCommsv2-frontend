import { useForm } from 'react-hook-form'
import { supabase } from '../supabaseClient'
import { UserData } from '../types/commonTypes'

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<UserData>()

  // Handle form submission
  const onSubmit = async (data: UserData) => {
    const { email, password } = data
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    // Handle any errors
    if (error) {
      console.error('Error signing up:', error.message)
    } else {
      console.log('Signed up successfully!')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Email" />
      <input {...register('password')} type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUpForm
