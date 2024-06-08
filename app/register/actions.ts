'use server'

import { RegisterData } from "@/types/user"
import axios from 'axios';

 
export async function register(prevState: any, formData: FormData) {

  const rawFormData: RegisterData = {
    username: formData.get('username'),
    password: formData.get('password'),
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email: formData.get('email'),
  }

  try {
    const response = await axios.request({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://89534e29-0fce-4172-a8ff-cf55054fd53f.mock.pstmn.io/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(rawFormData),
    });
    return {
      ...response.data,
      rawFormData
    };
  } catch (error: any) {
    return {
      ...error.response.data,
      rawFormData
    };
  }
}