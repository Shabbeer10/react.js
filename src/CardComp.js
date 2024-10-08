import * as React from 'react'; 
import { Button, Card, CardMedia, CardActions, CardContent } 
from '@mui/material'; 
import { users } from './userData.js';

export default function CardComp() { 
	
	const dataItems = users.map((item) => {
		return(
			<div style={{ margin: 10 }} key={item.id}> 
			<Card raised={true} sx={{ maxWidth: 400 }}> 
				<CardMedia 
					component="img"
					height="200px"
					image= {item.img}
					alt="Profile Picture"
				/> 
				<CardContent sx={{ backgroundColor: "#E8E8E8" }}> 
					<h3>{item.name}({item.age})</h3> 
					<h4 style={{ color: "gray", maxHeight: 40, }}> 
						{item.description}
					</h4> 
				</CardContent> 
				<CardActions > 
					<Button variant="contained" color="success"> 
						Show more
					</Button>  
				</CardActions> 
			</Card> 
		</div>
		)
	})
	return ( 
		
		<div id='card-container'>
		{dataItems}
	</div>
	); 
}
	   

	
		
	



