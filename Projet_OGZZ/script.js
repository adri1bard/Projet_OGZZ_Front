const Network = {
    "Vendor" : "VMWARE",
    "Project" : "Name_Project",
    "EMS TYPE" : "Dedicated",
    "EMS Location" : "EMEA",
    "Provising state" : "Active",
    "Operational status" : "Up",
    "Build Package" : "Prenium",
    "Run Package" : "Prenium",
    "Default License Edition" : "Entreprise",
    "Vendor Support Level" : "Production",
    "Version EMS" : "5.2",
    "Description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore commodi dolorem quos qui eos! Dicta eligendi minus voluptate, et laboriosam fugit natus veniam officia inventore id autem harum animi in. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
}


//bon la fonction est longue mais j'ai pas trouvé mieux, au moins ça fait en fonction de l'objet juste au dessus
//vous pouvez changer toutes les valeurs, l'html se met à jour
var Network_info = document.getElementById("card-grid");
var Network_description = document.getElementById("description");
function display_NetworkInfo(){
    //un peu comme en python enfaite
    for (let [info, value] of Object.entries(Network)) {

        /*un hgroup est composé d'un titre et d'un texte, ils ont des classes respectivent*/
        let group = document.createElement("hgroup");

        let titre = document.createElement("p");
        titre.setAttribute('class', "group-title");
        titre.innerText = info;
        
        let texte = document.createElement("p");
        if(info != "Description") texte.setAttribute('class', "group-text");
        texte.innerText = value;
        /*----------------------------------------------*/
        

        /*----------------------------POUR LES CAS PARTICULIERS--------------------*/
        if(info == "Provising state"){
            group.setAttribute('id', "state");
            let div = document.createElement("div");
            div.appendChild(titre);
            div.appendChild(texte);
            group.appendChild(div);
        }
        else if(info == "Operational status"){
            group.setAttribute('id', "status")

            let status = document.createElement("div");
            status.setAttribute('class', "flex-row");

            let svg = document.createElement("img");
            svg.setAttribute("class", "state_svg");
            if(value == "Up"){
                svg.src = "assets/state_up.svg"
            }
            else if(value == "Degraded"){
                svg.src = "assets/state_degraded.svg"
            }
            else if(value == "Down"){
                svg.src = "assets/state_down.svg"
            }

            status.appendChild(svg);
            status.appendChild(texte);
            let div = document.createElement("div");
            div.appendChild(titre);
            div.appendChild(status);
            group.appendChild(div);
        }
        else{
            group.appendChild(titre);
            group.appendChild(texte);
        }
        /*-----------------------------------------------------------------------*/

        if(info == "Description"){
            Network_description.appendChild(titre);
            Network_description.appendChild(texte);
        }
        else Network_info.appendChild(group);
    }
}


window.onload = display_NetworkInfo();