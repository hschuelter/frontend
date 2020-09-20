
const search = async (search, count, author, venue, begin_date, end_date) => {
    const query = `http://localhost:4000/search?query=${search}&count=${count}&author=${author}&venue=${venue}&begin_date=${begin_date}&end_date=${end_date}`;
    // console.log(query);
    const res  = await fetch(query);
    const json = await res.json();
    return json; 
};

function getAuthorData(data){
    if (data === []){
        return {
            nodes: [],
            links: []
        }
    }

    var my_nodes = [];
    var my_edges = [];

    
    for (var i = 0; i < data.length; i++){
        const d = data[i]['authors'];
        var node_edge = [];
        for (var j=0; j < d.length; j++){
            const author = d[j];
            const author_data = { id: author['author_name']};

            for (var k = 0; k < node_edge.length; k++){
                my_edges.push({ source: author['author_name'], target: node_edge[k]});
            }
            node_edge.push(author['author_name']);

            if (!my_nodes.includes(author_data))
                my_nodes.push({ id: author['author_name']});
        }
    }

    // console.log(my_nodes);
    // console.log(my_edges);

    var final_data = {
        nodes: my_nodes,
        links: my_edges
    };

    return final_data;
}

function getGraphConfig() {
    const graphConfig = {
        nodeHighlightBehavior: true,
        width:  800,
        height: 600,
        maxZoom: 80,
        minZoom: 0.1,
        node: {
            color: "#f9f9f9",
            highlightColor: "#3f51b5",
            strokeColor: "#000000",
            highlightStrokeColor: "#3f51b5",
        },
        link: {
            highlightColor: "lightblue",
        },
    };

    return graphConfig;
}

function clearInput(input) {
    var array = input.split(' ');
    var index = array.indexOf('');
    if (index > -1){
        array.splice(index, 1);
    }
    return array;
}

function downloadFile(data) {
    const filename = 'data.json';
    const contentType = "application/json;charset=utf-8;";
    const blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(data)))], { type: contentType });

    console.log(data);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
}

function paginate_results(data, current_page, rows){
    return data.slice(current_page * rows, current_page * rows + rows);
}

module.exports.search = search;
module.exports.getAuthorData = getAuthorData;
module.exports.getGraphConfig = getGraphConfig;
module.exports.clearInput = clearInput;
module.exports.downloadFile = downloadFile;
module.exports.paginate_results = paginate_results;