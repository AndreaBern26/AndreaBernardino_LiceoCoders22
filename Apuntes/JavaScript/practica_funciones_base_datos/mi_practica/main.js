function getData(){
    let episodes_json = JSON.parse(ww);

    return episodes_json._embedded.episodes;
}

/*
	Función que recoge un array de objetos JSON, lo recorre y lo 
    muestra en el <content>
*/

function displayData(data){
    let episodes_html = '';

    for (let i = 0; i < data.length; i++){
        //mostrarElemento

        episodes_html += episode_toHtml(data[i]);
    }
    document.querySelector('content').innerHTML = episodes_html;
}

/*
Dado un objeto json de un episodio, devuelve su correspondiente 
html
*/
function episode_toHtml (episode){
    let html = '<article class = "episode_name' + episode.name + ' id =' + episode.id + '">\
        <header>\
            <h2>' + episode.name + '</h2>\
            <small> Temporada ' + episode.season + ' / episodio ' + episode.number + '</small>\
        </header>\
        <content>\
            <img src="' + episode.image + '"alt="' + episode.name + '">\
            <strong>Descripción: </strong><br />\
            <p>' + episode.summary + '<p>\
        </content>\
        <footer>\
            Rating: ***\
            Previous episode: ' + episode.previousepisode + '<br/>\
            Next epsiode: ' + episode.nextepisode + '<br />\
        </footer>\
    </article>';

    return html;
}

function main (){
    data = getData(); //Obtenemos los episodios
    displayData(data); //Los mostramos
}

main();
