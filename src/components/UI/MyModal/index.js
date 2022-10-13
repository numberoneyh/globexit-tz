import React from 'react';
import style from './MyModal.module.scss'

const MyModal = ({modal, setModal, children}) => {

    if (modal) {
        return (
            <div className={style.first} onClick={() => setModal(false)}>
                <div className={style.second} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        );
    }


};

export  {MyModal};