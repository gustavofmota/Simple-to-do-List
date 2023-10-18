import React, { useState, useRef } from 'react'
import './App.css'

let array = [
	{ name: 'Do Bed', notDone: true },
	{ name: 'Clean Bedroom', notDone: true },
	{ name: 'Buy Groceries', notDone: true },
	{ name: 'Go to the Gym', notDone: true },
]

function App() {
	const [list, setList] = useState(array)
	const trRefs = useRef([])

	function hideChecked(index) {
		const newList = [...list]
		newList[index].notDone = !newList[index].notDone
		const element = trRefs.current[index]
		!newList[index].notDone
			? (element.style.textDecoration = 'line-through')
			: (element.style.textDecoration = 'initial')
		setList(newList)
	}

	return (
		<div className='App'>
			<table>
				<tbody>
					{list.map(({ name, notDone }, index) => (
						<tr
							key={index}
							ref={(el) => (trRefs.current[index] = el)}
						>
							<td>
								<input
									type='checkbox'
									checked={notDone}
									onClick={(e) => hideChecked(index)}
								/>
							</td>
							<td>
								<label htmlFor=''>{name}</label>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default App
