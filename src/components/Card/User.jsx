import React, {useState} from 'react';
import {FaMobileAlt} from "react-icons/fa";
import {FaRegEnvelope} from "react-icons/fa";
import style from './User.module.scss'
import {MyModal} from "../UI/MyModal";
import {render} from "react-dom";


const User = ({name, phone, email, address, position_name, department, hire_date}) => {

    const [modal, setModal] = useState(false)


    function handeClick() {
        setModal(true)
    }

        return (
            <>
                <div className={style.parent} onClick={handeClick}>
                    <h2>{name}</h2>
                    <ul>
                        <li><FaMobileAlt/><span>{phone}</span></li>
                        <li><FaRegEnvelope/>{email}<span></span></li>
                    </ul>
                </div>

                <MyModal modal={modal} setModal={setModal}>
                    <div className={style.parent}>
                        <h2>{name}</h2>
                        <ul>
                            <li><span>Телефон:</span><span>{phone}</span></li>
                            <li><span>Почта:</span><span>{email}</span></li>
                            <li><span>Дата приема:</span><span>{hire_date}</span></li>
                            <li><span>Должность:</span><span>{position_name}</span></li>
                            <li><span>Подразделение:</span><span>{department}</span></li>
                        </ul>
                        <figure>
                            <h3>Дополнительная информация:</h3>
                            <figcaption>{address}</figcaption>
                        </figure>
                    </div>
                </MyModal>
            </>
        )
};

export {User};