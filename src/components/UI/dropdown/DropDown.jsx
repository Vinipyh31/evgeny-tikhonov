import React, { useState } from 'react'
import cl from './DropDown.module.scss'
import arrowSvg from '../../images/Arrow.svg'

const DropDown = ({ children, title, id }) => {

    const [isOpen, setIsOpen] = useState(false)

    function switchIsOpen() {
        setIsOpen(v => !v);
    }

    return (
        <div className={cl.dropdown}>
            <div className={cl.dropdownHeader}>
                <h3 id={id} className={cl.dropdownTitle}>{title}</h3>
                <img className={`${cl.dropdownArrow} ${isOpen ? cl.active : ''}`} src={arrowSvg} alt='arrow' onClick={switchIsOpen} />
            </div>
            <div className={`${cl.dropdownInfo} ${isOpen ? cl.active : ''}`}>{children}</div>
        </div>
    )
}

export default DropDown