import { useEffect, useState } from "react";
// const intervalTime = 5000
// let debounce
const NotificationStrip = ({ notificationProps }) => {
    const { isOpen, onClickHandle, message } = notificationProps

    // useEffect(() => {
    //     console.log('NotificationStrip onClickHandle outer 1 isOpen :: ', isOpen)
    //     clearTimeout(debounce)
    //     if (isOpen) {
    //         console.log('NotificationStrip onClickHandle outer 2 :: ', isOpen)
    //         debounce = setTimeout(() => {
    //             console.log('NotificationStrip onClickHandle inner :: ', isOpen)
    //             onClickHandle(false)
    //         }, intervalTime)
    //     }
    // })

    return (<>
        {isOpen ? (<div className="notification">
            <div className="alert alert-warning alert-dismissible">
                <strong>() - </strong>{message}
                <button onClick={() => onClickHandle(false)} type="button">
                    <span>&times;</span>
                </button>
            </div>
        </div>) : <></>}

    </>);
}

export default NotificationStrip;