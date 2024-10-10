import * as React from 'react'; 
import { Button, Card, CardMedia, CardActions, CardContent, Grid, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'; 
import { users } from './userData.js';

export default function CardComp() {
	const [open, setOpen] = React.useState(false);
	const [selectedUser, setSelectedUser] = React.useState(null);

	const handleClickOpen = (user) => {
		setSelectedUser(user);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedUser(null);
	};

	const dataItems = users.map((item) => {
		return (
			<Grid item xs={12} sm={6} md={4} key={item.id}> 
				<Box sx={{ margin: 2 }}>
					<Card raised={true} sx={{ maxWidth: 400 }}> 
						<CardMedia 
							component="img"
							height="200"
							image={item.img}
							alt={`${item.name} Profile Picture`}
						/> 
						<CardContent sx={{ backgroundColor: "#E8E8E8" }}> 
							<h3>{item.name} ({item.age})</h3> 
							<h4 style={{ color: "gray", maxHeight: 40 }}> 
								{item.description}
							</h4> 
						</CardContent> 
						<CardActions > 
							<Button variant="contained" color="success" onClick={() => handleClickOpen(item)}>
								Show more
							</Button>  
						</CardActions> 
					</Card> 
				</Box>
			</Grid>
		);
	});

	return ( 
		<>
			<Grid  id='card-container'>
				{dataItems}
			</Grid>

			<Dialog sx={{alignItems:'center', justifyContent:'center'}} open={open} onClose={handleClose}>
				<DialogTitle>{selectedUser?.name}</DialogTitle>
				<DialogContent>
					<img src={selectedUser?.img} alt={`${selectedUser?.name} Profile Picture`} style={{width: '300px', height: 'auto' }} />
					<p>{selectedUser?.LongDescription}</p>
					<p>Age: {selectedUser?.age}</p>
					<p>Email: {selectedUser?.email}</p>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</>
	); 
}
