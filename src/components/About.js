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
							<p> Esta ferramenta foi desenvolvida por Arthur Schuelter como Trabalho de Conclusão de Curso para o curso de Bacharelado em Ciência da Computação da UDESC. O objetivo dessa ferramenta é auxiliar a busca de artigos científicos para pesquisadores da área de Ciência da Computação. Os artigos disponíveis nessa ferramenta foram coletados da base da DBLP e representam um subconjunto dos artigos disponíveis. Foram selecionados periódicos e eventos das sub-áreas de IHC-Interação Humano Computador e BD- Banco de Dados. </p>

							<h2> Busca </h2>

							<p> <b>Palavras-chave</b> é um campo <b> obrigatório </b> em que palavras e tópicos de interesse são inseridas. Ao colocar várias palavras a ferramenta entende como um <b> OU </b>, ou seja, busca artigos que tenham alguma das palavras inseridas. A ferramenta irá busca essas palavras nos seguintes campos dos artigos: título, abstract e palavras-chave.</p>

							<p> <b>Autores</b> é um campo para buscar artigos também filtrando pelos nomes de autores. A busca é limitada ao nome cadastrado no artigo, desta forma se o autor possuir diferentes entradas, esta não é tratada neste trabalho. </p>

							<p> <b>Periódicos/Eventos</b> é um campo para buscar artigos de eventos e periódicos de forma específica, digitando os nomes destes (ou parte do nome). </p>

							<p> <b>Data de Fim</b> e <b>Data de Início</b> são campos para limitar o período de publicação dos artigos. As datas são compostas por mês e ano. </p>

							<p> <b>Mostrar rede de colaboração</b> possibilita visualizar a rede de colaboração dos autores dos artigos encontrados. Como essa função é muito custosa, recomenda-se utilizar essa função para buscas <b> com resultado inferior a 50 artigos</b>. Caso muitos autores estejam presentes pode gerar uma grande lentidão na ferramenta. </p>

							<h2> Periódicos </h2>

							<p> Mostra os periódicos presentes na base e o número de artigos presentes de cada um.</p>

							<h2> Eventos </h2>

							<p> Mostra os eventos presentes na base e o número de artigos presentes de cada um.</p>

						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

export default About;
