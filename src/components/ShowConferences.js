import React, { Component } from 'react';

// import NavBar from './navBar';
// import Venues from './venues';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ShowConferences extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			page: 0,
			data: [], 
		};
	}

	componentDidMount() {
		this.search_conferences();
	}

	search_conferences(){
		fetch('http://187.107.118.105:4000/conferences')
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				data: result.data
			  });
			},

			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		)
	}
	
    handlePageChange(e, new_page) {
			this.setState({
				page: new_page
			});
    }
    
	renderConferences(data) {
		const rowsPerPage = 20;

		return (
			<div>
				{/* <NavBar /> */}
				<div class="nav-bar">
					<Grid container spacing={0} >
						<Grid item xs={8} />
						<Grid item xs={1} >
							<a href='/search'> <div> Busca </div> </a>
						</Grid>
						<Grid item xs={1} >
							<a href='/periodicos'> <div> Periódicos </div> </a>
						</Grid>
						<Grid item xs={1} >
							<a href='/eventos'>  <div class="highlight"> Eventos </div> </a>
						</Grid>
						<Grid item xs={1} >
							<a href='/about' >   <div> Sobre </div>  </a>
						</Grid>
					</Grid>
				</div>

				<div class='venues'>
					<Paper>
						<TableContainer component={Paper}>
							<Table size="small" aria-label="a dense table">
								<TableHead>
									<TableRow>
									<TableCell>Título</TableCell>
									<TableCell align="right">Número de artigos</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data.slice(this.state.page * rowsPerPage, this.state.page * rowsPerPage + rowsPerPage).map((row) => (
									<TableRow
										hover
										key={row.title}>
											<TableCell component="th" scope="row">
											{row.title}
											</TableCell>
											<TableCell align="right">{row.count}</TableCell>
									</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							component="div"
							rowsPerPageOptions={[20]}
							count={data.length}
							rowsPerPage={rowsPerPage}
							page={this.state.page}
							onChangePage={ (event, new_page) => { this.handlePageChange(event, new_page) } }
							// onChangeRowsPerPage={handleChangeRowsPerPage}
						/>
					</Paper>
				{/* < Venues data={data} /> */}
				</div>

            </div>
		);
	}
    
	render() {
		const { error, isLoaded, data } = this.state;
		
		return (
			this.renderConferences(data)
		);
	}

}

export default ShowConferences;