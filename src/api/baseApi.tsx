import axiosBase from 'axios'
export const axios = axiosBase.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
})
