import React from 'react';

// import NavBar from './navBar';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function About() {
	return(
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
						<a href='/eventos'>  <div> Eventos </div> </a>
					</Grid>
					<Grid item xs={1} >
						<a href='/about' >   <div class="highlight"> Sobre </div>  </a>
					</Grid>
				</Grid>
			</div>
			{/* ******************************************************** */}
			<Grid container spacing={2}>
				<Grid item xs={1} />
				<Grid item xs={10}>
					<Paper elevation={2}>
						<div class="about"> 
							<h1> Sobre </h1>
							<p> Esta ferramenta foi desenvolvida por Arthur Schuelter como Trabalho de Conclusão de Curso para o curso de Bacharelado em Ciência da Computação da UDESC. O objetivo dessa ferramenta é auxiliar a busca de artigos científicos para pesquisadores da área de Ciência da Computação. Os artigos disponíveis nessa ferramenta foram coletados da base da DBLP e representam um subconjunto dos artigos disponíveis. </p>

							<h2> Aba Busca </h2>

							<p> <b>Palavras-chave</b> é um campo de para inserir palavras e tópicos de interesse. A ferramenta irá busca na base de dados artigos com cujo campo de título, de <i> abstract </i> ou de palavras-chave possua as uma das palavras definidas.</p>

							<p> <b>Autores</b> é um campo de para inserir o nome de autores. A ferramenta irá filtrar os artigos encontrados pelos tópicos do campo <b>Palavras-chave</b> para garantir que os artigos possuam autores com os nomes inseridos. </p>

							<p> <b>Periódicos/Eventos</b> é um campo de para inserir o nome de conferências e periódicos. A ferramenta irá filtrar os artigos encontrados pelos tópicos do campo <b>Palavras-chave</b> para garantir que os artigos foram publicados em periódicos ou eventos com o nome inserido. </p>

							<p> <b>Data de Fim</b> e <b>Data de Início</b> são um campos de para limitar o período de publicação dos artigos. </p>

							<p> <b>Mostrar rede de colaboração</b> possibilita visualizar a rede de colaboração dos autores dos artigos encontrados. Como essa função é muito custosa, recomenda-se utilizar esse função para buscas cujo <b> resultado foi inferior a 50 artigos</b>. Caso muitos autores estejam presentes pode gerar uma grande lentidão na ferramenta. </p>

							<h2> Aba Periódicos </h2>

							<p> Mostra os periódicos presentes na base e o número de artigos presentes de cada um.</p>

							<h2> Aba Eventos </h2>

							<p> Mostra os eventos presentes na base e o número de artigos presentes de cada um.</p>

						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

export default About;
