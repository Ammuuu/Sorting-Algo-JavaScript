let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    },

    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },

    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },

    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },

    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },

    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },

    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },

    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },

    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    }
];

window.onload = () => {
    let choice = document.getElementById("userOption");
    displayTable();
    choice.addEventListener('change', () => {
        sortMovies(choice.value);
        displayTable();
    })
}

sortMovies = (attribute) => {
    for(let i=0;i<movies.length;i++) {
        for(let j=0;j<movies.length-1;j++) {
            if(movies[i][attribute] > movies[j][attribute]) {
                let temp = movies[i];
                movies[i] = movies[j];
                movies[j] = temp;
            }
        }
    }
}

displayTable = () => {
    let table;
    table = `<table border="1px solid black" style="width: 90%">`;
    table += `
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Rank</th>
        </tr>
    `
    movies.map((movie) => {
        table += "<tr>"
        table += `<td>${movie.id}</td>`
        table += `<td>${movie.title}</td>`
        table += `<td>${movie.rank}</td>`
        table += "</tr>"
    });
    table += "</table>";
    document.getElementById("table").innerHTML = table;
}