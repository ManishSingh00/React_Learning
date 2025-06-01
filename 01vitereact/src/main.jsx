import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){  // App ke tarah hii isko bhi isii file me render krwa skte hai
    return (
      <div>
        <h1>Custom App | chai</h1>
      </div>
    )
}


// const ReactElement = { // this is the custom way of making element and for this i
// have also made a custom rendering function but here we cannot use this bcz rendering
// done by react itself will not work in this syntax(it will work on syntax written below(at last))
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement( // (this is the way of making element for react rendering to work)
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    /*anotherElement*/ it will work fine
    <App />
  </StrictMode>,
)
