import React from 'react'
import { useImmerReducer } from 'use-immer'
import './App.css'

/**
 * -- CONTEXT --
 */
import DispatchContext from './context/DispatchContext'
import StateContext from './context/StateContext'

function App() {
	/**
	 * -- APP WIDE REDUCER --
	 */
	const initialState = {
		someState: ''
	}
	function reducer(draft, action) {
		switch (action.type) {
			case 'someType':
				draft.someState = action.value
				return

			default:
				return
		}
	}
	const [state, dispatch] = useImmerReducer(reducer, initialState)

	return (
		<DispatchContext.Provider value={dispatch}>
			<StateContext.Provider value={state}>
				<div className='App'>HELLO</div>
			</StateContext.Provider>
		</DispatchContext.Provider>
	)
}

export default App
