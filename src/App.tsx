import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      {isOpen && (
        <Modal
          title='Hello'
          description='This is a modal'
          buttonText='Close'
          closeModal={() => setIsOpen(false)}
          buttonOnClick={() => setIsOpen(false)}
          buttonClassName='bg-blue-500 text-white'
        />
      )}
    </>
  )
}

export default App
