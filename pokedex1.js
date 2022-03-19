const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-triste.png");
        }
        else {
            return res.json();
            
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeName = data.name;
            let pokeMovimientos = data.moves;
            let pokeTipo = data.types[0].type.name;
            let pokeAbility = data.abilities;
            let pokeExper = data.base_experience;
            pokeImage(pokeImg);
            
            console.log(pokeImg);               //Ver los valores de la API
            console.log(pokeName);
            console.log(pokeMovimientos.length);
            console.log(pokeTipo);
            console.log(pokeAbility.length);
            console.log(pokeExper);
            document.getElementById('name').innerHTML = pokeName;
            document.getElementById('tipo').innerHTML = pokeTipo;
            document.getElementById('mov').innerHTML = pokeMovimientos;
            document.getElementById('hab').innerHTML = pokeAbility;
            document.getElementById('exp').innerHTML = pokeExper;
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}



