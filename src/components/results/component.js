const React = require('react');
// const Collapse = require('react-css-collapse');

// function downloadFile(data) {
//     const filename = 'data.json';
//     const contentType = "application/json;charset=utf-8;";
//     const blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(data)))], { type: contentType });

//     console.log(data);
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', filename);
//     document.body.appendChild(link);
//     link.click();
// }

// const ResultsFound = (props) => (
//     <p class="results-found">
//         Resultados encontrados: {props.count}
//     </p>
// )

// const DownloadButton = (props) => (
//     <div 
//         class="download-button"
//         onClick={() => downloadFile(props.data)} >
//             DOWNLOAD
//     </div>
// );


const ItemContainer = (props) => {
    const [showResults, setShowResults] = React.useState(false);
    const toggleResults = () => setShowResults(!showResults);
    
    return (
        <div class="item-container">
            <div class="item-title" onClick={showResults ? null : toggleResults}>
                <div 
                    class="expand-button" 
                    onClick={toggleResults} >
                        {!showResults ? props.iconMore : props.iconLess}
                </div>
                <b> Título: </b>
                <div> {props.item.title} </div>
            </div>

            {showResults ? <ItemContent data={props.item} /> : null}
        </div>
    );
};

const ItemContent = (props) => (
    <div class="item-content">
        <div class="data"> <b> Abstract:   </b> <div> {props.data.abstract}  </div> </div>
        <div class="data"> <b> DOI:        </b> <div> {props.data.doi}       </div> </div>
        <div class="data"> <b> Páginas:    </b> <div> {props.data.pages}     </div> </div>
        <div class="data"> <b> Data:       </b> <div> {props.data.date}      </div> </div>
        <div class="data"> <b> Link:       </b> <div> <a href={props.data.link}>{props.data.link}</a> </div></div>
        <div class="data"> <b> Palavras-chave: </b> <div> {props.data.unique_keywords}   </div> </div>

        <div class="data">
            <b> Venue: </b>
            <div class="venue">
                <p> Título: {props.data.venue_title} </p> 
                <p> Editora: {props.data.venue_publisher} </p> 
                <p> Link: <a href={props.data.venue_url}> {props.data.venue_url} </a></p> 

            </div>
        </div>
        
        <div class="data"> 
            <b> Autores: </b> 
            <div class="authors">
            {props.data.authors.map( author => (
                <div class="author">
                    {`${author.author_name} (${author.author_institute})`}
                    <br />
                </div>
            ))}
            </div>
        </div>

        <div class="data"> <b> Referências:</b> 
            <div class="references">
            {props.data.references.map( ref => (
                <div class="ref">
                    {ref}
                    <br />
                </div>
            ))} 
            </div>
        </div>
    </div>
);

module.exports = ({ results, iconMore, iconLess }) => {
    return (
        <div class='articles'>
            { results.map( r => (
                <ItemContainer 
                    item={r} 
                    iconMore={iconMore} 
                    iconLess={iconLess} />
            ))}
        </div>
    );
};