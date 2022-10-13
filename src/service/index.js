export const fetchUser = (value) => {
    return fetch(`http://127.0.0.1:3000${value}`).then((res) => res.json())
}