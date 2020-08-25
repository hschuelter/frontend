import React, { Component } from 'react';

class ShowData extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: []
		};
	}

	componentDidMount() {
		// this.getData('acm-articles');
		// this.getData('springer-articles');
		// this.getData('springer-chapters-articles');

		// this.getData('acm-authors');
		// this.getData('springer-authors');
		// this.getData('springer-chapters-authors');

		this.search('computer', 25);
		console.log(this.state.data);
	}

	search(query, count){
		fetch(`http://localhost:4000/search?query=${query}&count=${count}`)
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

	getData(api_query) {
		fetch("http://localhost:4000/" + api_query)
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
	
	renderAuthors(data) {
		return (
			<div id='authors'>
				<h1> Resultados encontrados: {data.length} </h1>
				{data.map(item => (
				<ul>
					<li> Name: {item.name} </li>
					<li> Institute: {item.institute} </li>
				</ul>
				))}
			</div>

		);
	}

	renderArticles(data) {
		return (
			<div id='articles'>
				<h1> Resultados encontrados: {data.length} </h1>
				{data.map(item => (
				<ul>
					<li> <b> Title: 	</b> {item.title} 		</li> <hr />
					<li> <b> Abstract: 	</b> {item.abstract} 	</li>
					<li> <b> Doi: 		</b> {item.doi} 		</li>
					<li> <b> Pages: 	</b> {item.pages}		</li>
					<li> <b> Date: 		</b> {item.date} 		</li>
					<li> <b> Link: 		</b> {item.link} 		</li>
					<li> <b> UKeywords:	</b> {item.unique_keywords} 	 </li>
					<li> <b> Keywords: 	</b> {item.keywords.join(' | ')} </li>
					<b> References: </b>
					<ol>
						{item.references.map( ref => (
							<li>{ref}</li>
						))}
					</ol>
				</ul>
				))}
			</div>
		);
	}

	
	render() {
		const { error, isLoaded, data } = this.state;
		if (error) {
		  return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
		  return <div>Loading...</div>;
		} else {
		  return (
			this.renderArticles(data)
			// this.renderAuthors(data)
		  );
		}
	  }

}

export default ShowData;
