import React from 'react'
import { XIcon } from 'lucide-react'
import clsx from 'clsx'

export interface ModalProps {
  title: string
  description: string
  buttonText: string
  closeModal: () => void
  buttonOnClick: () => void
  className?: string
  buttonClassName?: string
}

export default function Modal({
  title,
  description,
  buttonText,
  closeModal,
  buttonOnClick,
  className = '',
  buttonClassName = '',
}: ModalProps) {
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleOutsideClick}
    >
      <div
        className={clsx(
          'bg-white p-4 sm:p-6 rounded flex flex-col items-center gap-4 relative sm:max-w-sm max-w-xs',
          className
        )}
      >
        <h3 className='text-lg sm:text-xl font-bold'>{title}</h3>
        <p className='text-center text-sm sm:text-base'>{description}</p>
        <button
          onClick={closeModal}
          className='absolute -top-2 -right-2 rounded-full bg-black text-white p-2'
        >
          <XIcon className='w-4 h-4' />
        </button>
        <button
          onClick={buttonOnClick}
          className={clsx('w-full p-2 rounded-md', buttonClassName)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
