import React from 'react';
import Grid from '@material-ui/core/Grid';

function NavBar(){
	return (
		<div class="nav-bar">
			<Grid container spacing={0} >
				<Grid item xs={8} />
				<Grid item xs={1} >
					<a href='/search'>  Artigos </a>
				</Grid>
				<Grid item xs={1} >
					<a href='/periodicos'> Periódicos </a>
				</Grid>
				<Grid item xs={1} >
					<a href='/eventos'>  Eventos </a>
				</Grid>
				<Grid item xs={1} >
					<a href='/about' >   Sobre  </a>
				</Grid>
			</Grid>
		</div>
	)
}

export default NavBar;
