export const getUser = async () => {
  try {
    const res = await fetch('/api/user')
    const response = await res.json()
    const data = ([] = [...response])
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function postUser(user) {
  console.log(user)
  const response = await fetch(`/api/user`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(user),
  })
  return response
    .json()
    .then((response) => {
      return response
    })
    .catch((error) => console.log(error))
}

export async function putUser(user, id) {
  console.log('desde services' + user + 'el id es:' + id)
  const response = await fetch(`/api/user/${id}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(user),
  })
  return response
    .json()
    .then((response) => {
      return response
    })
    .catch((error) => console.log(error))
}

export async function LoginServices(user) {
  const response = await fetch(`/api/login`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(user),
  })
  return response
    .json()
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((error) => console.log(error))
}

export async function postUserAuth(user) {
  const response = await fetch(`/api/login_auth`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(user),
  })
  return response
    .json()
    .then((response) => {
      return response
    })
    .catch((error) => console.log(error))
}
