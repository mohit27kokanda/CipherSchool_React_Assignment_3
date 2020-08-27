import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'

const TasksList = ({ data, changeStatus, title, deleteTask, editTask }) => {
	return (
		<List>
			<h2>{title}</h2>
			{data.reverse().map((e, i) => (
				<ListItem button key={i}>
					<ListItemText>{e.text}</ListItemText>
					<Button variant={'contained'} onClick={() => changeStatus(e.id)}>✔</Button>
					<Button variant={'contained'} onClick={() => deleteTask(e.id)}>✖</Button>
					<Button variant={'contained'} onClick={() => editTask(e.id)}>Edit</Button>
				</ListItem>
			))}
		</List>
	)
}

export default TasksList
