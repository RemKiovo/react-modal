# @remkiovo/react-modal

A simple, lightweight, and customizable modal component for React applications
with TypeScript support and TailwindCSS styling.

## Installation

```bash
npm install @remkiovo/react-modal
```

or

```bash
yarn install @remkiovo/react-modal
```

## Features

- 🎯 Simple and easy to use
- 🎨 Customizable styling with TailwindCSS
- 📱 Responsive design
- 🔒 TypeScript support
- 🖱️ Click outside to close
- ✨ Smooth animations
- ⌨️ Accessible

## Usage

```tsx
import { useState } from 'react'
import Modal from '@remkiovo/react-modal'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <Modal
          title='Welcome!'
          description='This is a simple modal component.'
          buttonText='Close'
          closeModal={() => setIsOpen(false)}
          buttonOnClick={() => setIsOpen(false)}
          buttonClassName='bg-blue-500 hover:bg-blue-600 text-white'
        />
      )}
    </>
  )
}
```

## Props

| Prop              | Type       | Required | Description                                        |
| ----------------- | ---------- | -------- | -------------------------------------------------- |
| `title`           | string     | Yes      | The title of the modal                             |
| `description`     | string     | Yes      | The main content/description of the modal          |
| `buttonText`      | string     | Yes      | Text to display on the action button               |
| `closeModal`      | () => void | Yes      | Function to call when closing the modal            |
| `buttonOnClick`   | () => void | Yes      | Function to call when the action button is clicked |
| `className`       | string     | No       | Additional classes for the modal container         |
| `buttonClassName` | string     | No       | Additional classes for the action button           |

## Styling

The modal comes with default styling using TailwindCSS. You can customize the appearance by:

1. Using the `className` prop to style the modal container
2. Using the `buttonClassName` prop to style the action button

## Requirements

- React 18 or higher
- TailwindCSS 3.x

## License

MIT © [RemKiovo](https://github.com/RemKiovo)
