import { ref } from 'vue'

const endPoints = {
  local: {
    titulo: 'URL Local',
    url: 'http://localhost:8000/api',
  },
  remote: {
    titulo: 'URL Remoto',
    url: 'http://10.6.150.91:8000/api',
  },
}

const apiBase = ref()
const env = ref()

export function useEndPoints() {
  function setEndPoint(ep) {
    apiBase.value = ep.url
    env.value = ep.titulo
    console.log(apiBase.env, apiBase.value)
  }

  return {
    endPoints,
    apiBase,
    env,
    setEndPoint,
  }
}
