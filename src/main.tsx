import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// What ! does

// document.getElementById('root') can return either an HTMLElement or null 
// (if no element with that id exists). TypeScript knows this, so its return type is:

// HTMLElement | null

// createRoot(...) needs a real element, not null. So TypeScript would complain.
//  The ! is the non-null assertion operator. It tells the compiler: “Trust me, 
// this is not null.”

// Two things to remember:

// It only affects type checking. It does not check anything at runtime. 
// If #root were missing, your app would still crash.
// Use it sparingly. In main.tsx it’s acceptable because you control index.html and 
// know #root exists.