import { useState, useEffect } from "react";
import NotificationStrip from "./components/NotificationStrip";
import Counter from "./components/Counter";
import Modal from "./common/Modal";
import WithCounter from "./hocComponent/withCounter";

const intervalTime = 5000
let debounce
function App() {

  const [message, setMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  // const [showModal, setShowModal] = useState(false);

  const debounceHandler = () => {
    clearTimeout(debounce)
    if (isOpen) {
      debounce = setTimeout(() => {
        setIsOpen(false)
      }, intervalTime)
    }
  }

  const handleIsOpen = (param) => {
    debounceHandler()
    setIsOpen(param)
  }

  const handleIsOpen2 = (param) => {
    setIsOpen(false)
  }

  const handleMessage = (param) => {
    setMessage(param)
  }

  // const popUpHandle = (e) => {
  //   setShowModal(false);
  // };

  useEffect(() => {
    console.log('useEffect called ')
    debounceHandler()
  })

  return (
    <div className="App">
      <Modal></Modal>
      {/* <WithCounter></WithCounter> */}
      <NotificationStrip notificationProps={{
        isOpen: isOpen,
        message: message,
        onClickHandle: handleIsOpen2
      }}></NotificationStrip>


      <Counter handleIsOpen={handleIsOpen} handleMessage={handleMessage}></Counter>
    </div>
  );
}

export default App;
