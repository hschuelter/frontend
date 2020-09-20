import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GetAppIcon from '@material-ui/icons/GetApp';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { Graph } from "react-d3-graph";
// import NavBar from './navBar';
import SearchForm from './searchForm'


const React = require('react');
// const ReactDom = require('react-dom');

const Results = require('./results');
// const SearchFilters = require('./searchFilters');
const Api = require('./api');

class Search extends React.Component {

	constructor() {
			super();
			this.setSearchField.bind(this);
			this.setAuthorField.bind(this);
			this.setCountField.bind(this);
			this.setState.bind(this);
			this.setShowGraph.bind(this);
			this.runSearch.bind(this);
	}

	componentWillMount() {
		this.setState({
			search_field: '',
			count: 700, 
			author: '',
			venue: '',
			begin_date: '',
			end_date: '',
			data: [], 
			show_graph: false,
			show_loading: false,
			current_page: 0,
			rows_per_page: 20,
			search: false
		});
	}
	
	setSearchField(e) {
		var search_field = Api.clearInput(e.target.value).join('+');
		// console.log(search_field);

		this.setState({
			search_field: search_field
		});
	}
	
	setAuthorField(e) {
		var author = Api.clearInput(e.target.value).join('+');
		// console.log(author);

		this.setState({
			author: author
		});
	}

	setCountField(e) {
		var count = e.target.value.split(' ').join('+');
		// console.log(count);

		this.setState({
			count: count
		});
	}

	setVenue(e) {
		var venue = Api.clearInput(e.target.value).join('+');
		// console.log(venue);

		this.setState({
			venue: venue
		});
	}

	setBeginDate(e) {
		var begin_date = e.target.value;
		// console.log(begin_date + '-01');

		this.setState({
			begin_date: begin_date + '-01'
		});
	}

	setEndDate(e) {
		var end_date = e.target.value;
		// console.log(end_date + '-01');

		this.setState({
			end_date: end_date + '-01'
		});
	}

	setShowGraph(e) {
		console.log(this.state.data)

		if (this.state.data === null){ 
			this.setState({
				show_graph: false
			});
		} else {
			this.setState({
				show_graph: !this.state.show_graph
			});

		}
		// console.log(this.state.show_graph);
	}

	handlePageChange(e, new_page) {
		this.setState({
			current_page: new_page
		});
	}
	
	async runSearch(e) {
		e.preventDefault();

		const search_field = this.state.search_field;
		const count = this.state.count;
		const author = this.state.author;
		const venue = this.state.venue;
		const begin_date = this.state.begin_date;
		const end_date = this.state.end_date;

		if (search_field === ''){
			return ;
		}

		this.setState({
			show_loading: true
		});

			

		const result = await Api.search(search_field, count, author, venue, begin_date, end_date);
		console.log(result.data)
		if (result.data.length === 0) {
			this.setState({show_graph: false});
		}
		
		this.setState({
			data: result.data, 
			show_loading: false,
			search: true,
			current_page: 0
		});
	}

	render() {
		return (
				<div> 
					{/* <NavBar /> */}
					
					<div class="nav-bar">
						<Grid container spacing={0} >
							<Grid item xs={8} />
							<Grid item xs={1} >
								<a href='/search'> <div class="highlight"> Busca </div> </a>
							</Grid>
							<Grid item xs={1} >
								<a href='/periodicos'> <div> Periódicos </div> </a>
							</Grid>
							<Grid item xs={1} >
								<a href='/eventos'>  <div> Eventos </div> </a>
							</Grid>
							<Grid item xs={1} >
								<a href='/about' >   <div> Sobre </div>  </a>
							</Grid>
						</Grid>
					</div>

					<SearchForm
						runSearch={e => this.runSearch(e)}
						setSearchField={e => this.setSearchField(e)} 
						setAuthorField={e => this.setAuthorField(e)} 
						setVenue={e => this.setVenue(e)} 
						setBeginDate={e => this.setBeginDate(e)} 
						setEndDate={e => this.setEndDate(e)} 
						setShowGraph={e => this.setShowGraph(e)} 
						show_loading={this.state.show_loading} />

					{!this.state.search ? null : 
					<div> 
						{!(this.state.show_graph && this.state.data.length > 0)? null : 
						<Grid container spacing={2}>
							<Grid item xs={12} class="graph">
								<Graph
									id="authors-graph"
									data={ Api.getAuthorData(this.state.data) }
									config={ Api.getGraphConfig() }/>
							</Grid>
						</Grid>
						}
						<Grid container spacing={2}>
							<Grid item xs={1} />
							<Grid item xs={10} >
								<Paper elevation={2} >
									<TableContainer component={Paper}>
										<Table size="small" aria-label="a dense table">
											<TableHead>
												<TableRow>
													<TableCell>
														<Grid container spacing={2}>
															<Grid item xs={3}>
																Resultados encontrados: {this.state.data.length}
															</Grid>
															<Grid item xs={3} />
															<Grid container item xs={6} spacing={1}>
																<Grid item xs={6} />
																<Grid item xs={6} >
																	{this.state.data.length < 1 ? null :
																		<Button
																			onClick={() => Api.downloadFile(this.state.data)}
																			fullWidth
																			color="primary"
																			variant="contained" 
																			endIcon={<GetAppIcon />}>
																				<span class="search-label"> DOWNLOAD </span>
																		</Button>}
																</Grid>
															</Grid>
														</Grid>
													</TableCell>
												</TableRow>
											</TableHead>
											<Results 
												results={ Api.paginate_results(this.state.data, this.state.current_page, this.state.rows_per_page) } 
												iconMore={ <NavigateNextIcon /> }
												iconLess={ <ExpandMoreIcon /> } />
									</Table>
								</TableContainer>
								<TablePagination
									rowsPerPageOptions={[20]}
									count={this.state.data.length}
									rowsPerPage={this.state.rows_per_page}
									page={this.state.current_page}
									onChangePage={ (event, new_page) => { this.handlePageChange(event, new_page) } }
									// onChangeRowsPerPage={handleChangeRowsPerPage}
								/>
							</Paper>
						</Grid>
					</Grid> 
				</div>}
			</div>
		)
	}

}
export default Search;