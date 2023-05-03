import React, { useEffect, useRef, useState } from 'react'
import cl from './DropDown.module.scss'
import arrowSvg from '../../images/Arrow.svg'

const DropDown = ({ children, title, id, setObservedId}) => {

    const [isOpen, setIsOpen] = useState(true);
    const dropRef = useRef();
    const observer = useRef();
    function switchIsOpen() {
        setIsOpen(v => !v);
    }

    useEffect(() => {
        var callback = function (entries, observer) {
            setObservedId(+entries[0].target.id);
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(dropRef.current)
    }, [])
    

    return (
        <div className={cl.dropdown}>
            <div className={cl.dropdownHeader}>
                <h3 id={id} className={cl.dropdownTitle} ref={dropRef}>{title}</h3>
                <img className={`${cl.dropdownArrow} ${isOpen ? cl.active : ''}`} src={arrowSvg} alt='arrow' onClick={switchIsOpen} />
            </div>
            <div className={`${cl.dropdownInfo} ${isOpen ? cl.active : ''}`}>{children}</div>
        </div>
    )
}

export default DropDown