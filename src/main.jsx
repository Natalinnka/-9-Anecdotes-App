import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import './style.css'

// Імпортуємо редуктори
import anecdoteReducer from './anecdoteSlice'
import filterReducer from './filterSlice'
import notificationReducer from './notificationSlice'

// Створюємо Redux store
const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer,
  },
})

// Обгортаємо App у <Provider> і передаємо store
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
