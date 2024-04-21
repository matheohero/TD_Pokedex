export const getUsersInLocalStorage = () => {
    const localStorageTodos = localStorage.getItem('users')
    return JSON.parse(localStorageTodos)
}

export const setUsersInLocalStorage = (users) => {
   
    localStorage.setItem('users',JSON.stringify(users))


}