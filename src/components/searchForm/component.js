import React from 'react';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

// import EventIcon from '@material-ui/icons/Event';
import SearchIcon from '@material-ui/icons/Search';
// import TodayIcon from '@material-ui/icons/Today';

function SearchForm({ runSearch, setSearchField, setAuthorField, setVenue, setBeginDate, setEndDate, setShowGraph, show_loading }){
	return (
		<Grid container spacing={2}>
			<Grid item xs={1} />
			<Grid item xs={10}>
				<Paper elevation={2}>
					<div class="search-body"> 
						<form onSubmit={ runSearch }>
							<Grid container spacing={2}>
										<Grid item xs={12}>
											<TextField 
												id="busca" label="Palavras-chave *" 
												type='text' 
												name='q' 
												variant="outlined" 
												fullWidth
												InputProps={{
													endAdornment: <SearchIcon />
												}}
												InputLabelProps={{ shrink: true }}
												onChange={ setSearchField } />
										</Grid>
								</Grid>

							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField
										id="autores" label="Autores"
										type='text' 
										name='author-filter' 
										variant="outlined"
										fullWidth
										InputLabelProps={{ shrink: true }}
										onChange={ setAuthorField } />
								</Grid>
								<Grid item xs={6}>
									<TextField
										id="venues" label="Periódicos/Eventos"
										type='text' 
										name='venue-filter' 
										variant="outlined"
										fullWidth
										InputLabelProps={{ shrink: true }}
										onChange={ setVenue } />
								</Grid>
							</Grid>

							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField
										id="begin-date-filter" label="Data de início"
										type='month' 
										name='begin-date-filter' 
										variant="outlined"
										fullWidth
										InputLabelProps={{ shrink: true }}
										onChange={ setBeginDate } />
								</Grid>

								<Grid item xs={6}>
									<TextField
										id="end-date-filter" label="Data de fim"
										type='month' 
										name='end-date-filter'
										variant="outlined"
										placeholder=''
										fullWidth
										InputLabelProps={{ shrink: true }}
										onChange={ setEndDate } />
								</Grid>
							</Grid>

							<Grid container spacing={2}>
								<Grid item xs={3}>
									<FormControlLabel
										control={
											<Checkbox
												onChange={setShowGraph}
												name="check_graph"
												color="primary"                                            
											/> }
										label="Mostrar rede de colaboração" />
							</Grid>
							</Grid>

							<Grid container spacing={2}>
								<Grid item xs={6} />
								<Grid container item xs={6} spacing={1}>
									<Grid item xs={6}/>
									<Grid item xs={6}>
										<Button
											fullWidth
											onClick={ runSearch } 
											disabled={ show_loading }
											color="primary"
											variant="contained">
												{ show_loading ? <CircularProgress color="white" size="30px"/> : null }
												{ show_loading ? null : <span class="search-label"> BUSCAR </span> }
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</form>
					</div>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default SearchForm;
