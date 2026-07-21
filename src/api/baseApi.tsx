import axiosBase from 'axios'
export const axios = axiosBase.create({
  baseURL:
    'https://script.google.com/macros/s/AKfycbzhUpJpuleikfib_4aNtvPFDBQPZI4Z2U3eYeVaCpqo3TB3SvRE1_WhIAGfIVvT9rRR8Q/exec',
  headers: {
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
})
