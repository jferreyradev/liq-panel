// fetch.js
import { ref, watchEffect, toValue } from 'vue'

const options = {
  method: 'GET, POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  //redirect: 'follow', // manual, *follow, error
  //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //body: JSON.stringify(data) // body data type must match "Content-Type" header
}

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  const fetchData = () => {
    // reset state before fetching..
    data.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
      .finally(() => (loading.value = false))
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error, loading }
}
