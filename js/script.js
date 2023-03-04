/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato

*/

function aside(){
    let lista = `<li>`;
    let ul = document.getElementById("listUtenti");

    for(let i = 1; i < nomeUtenti.length; i++){
        if(genereUt[i] == "m"){
            lista += `<div onclick="header(${i})" class="material-symbols-outlined icone">
                    face
                    </div>`;     
        }
        else{
            lista += `<div onclick="header(${i})" class="material-symbols-outlined icone">
                    face_3
                    </div>`;
        }
        let cognome = cognomeUtenti[i];
        lista += nomeUtenti[i] + ` ` + cognome[0] + `.`;
        lista += `</li>`;
    }
    ul.innerHTML = lista;

}


function header(i){
    let utente = document.querySelector("header > div:first-child");
    let nome = document.getElementById("divNome");
    let ora = document.getElementById("divUltimoMes");
    
    if(genereUt[i] == "m"){
        utente.innerText = "face";
    }
    else{
        utente.innerText = "face_3";
    }

    nome.innerText = nomeUtenti[i] + " " + cognomeUtenti[i];
    ora.innerText = "Oggi alle " + ore[i];

    funzmess(i);
}

function funzmess(numero){
    let section = document.querySelector("section > section");
    section.innerText = "";

    for(i in mittenti){
        if(destinatari[i] == numero){
            let article = document.createElement("article");
            article.innerHTML += messaggi[i];
            article.classList.add("ut1");
            article.classList.add("mes");
            section.appendChild(article);
        }
        if(mittenti[i] == numero){
            let article = document.createElement("article");
            article.innerHTML += messaggi[i];
            article.classList.add("ut2");
            article.classList.add("mes");
            section.appendChild(article);
        }
    }
}


function tasto(){
    let section = document.querySelector("section > section");
    let article = document.createElement("article");
    let input = document.querySelector("div > input");
    article.innerHTML += input.value;
    article.classList.add("ut1");
    article.classList.add("mes");
    section.appendChild(article);
    input.value = "";
}