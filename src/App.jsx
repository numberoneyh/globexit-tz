import {useEffect, useState} from 'react';
import {fetchUser} from "./service";
import {User} from "./components/Card/User";
import {FaSistrix} from 'react-icons/fa'
import './app.scss'

const App = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        const value = search ? `?term=${search}` : ''
        fetchUser(value).then(res => setData(res))
    }, [search])

    return (
        <div className='wrapper'>
            <div className='search'>
                <FaSistrix/>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder='Поиск...'
                    className='input'
                />
            </div>

            <div className='card'>
                {
                    data.map(user => (
                        <User key={user.name} {...user} />
                    ))
                }
            </div>
        </div>
    );
};

export {App};