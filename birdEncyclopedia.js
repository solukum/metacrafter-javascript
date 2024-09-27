// Create a variable to hold your bird encyclopedia entries (an array to store multiple birds)
let birdEncyclopedia = [];

// This function will take in some values as parameters, create a
// bird object using the parameters passed to it for its metadata, 
// and store it in the array above.
function addBird(species, habitat, diet, imageURL) {
    // Create a bird object with metadata
    const bird = {
        species: species,
        habitat: habitat,
        diet: diet,
        imageURL: imageURL
    };
    
    // Store the created bird in the birdEncyclopedia array
    birdEncyclopedia.push(bird);
    console.log(`Added: ${species}`);
}

// Create a "loop" that will go through the birdEncyclopedia array
// and print their metadata with console.log()
function listBirds() {
    birdEncyclopedia.forEach((bird, index) => {
        console.log(`Bird ${index + 1}:`);
        console.log(`Species: ${bird.species}`);
        console.log(`Habitat: ${bird.habitat}`);
        console.log(`Diet: ${bird.diet}`);
        console.log(`Image URL: ${bird.imageURL}`);
        console.log('---------------------------');
    });
}

// Print the total number of birds in the encyclopedia to the console
function getTotalBirds() {
    console.log(`Total birds in the encyclopedia: ${birdEncyclopedia.length}`);
}

// Call your functions below this line
addBird("Bald Eagle", "Forests, mountains", "Carnivorous", "https://media.istockphoto.com/id/623499720/photo/spread-wing-bald-eagle-soars-across-the-sky.jpg");
addBird("Penguin", "Antarctic", "Carnivorous (Fish)", "https://critterfacts.com/wp-content/uploads/2019/08/Emperor-penguin-walk-on-snow.jpg");
addBird("Peacock", "Forests, grasslands", "Herbivorous", "https://upload.wikimedia.org/wikipedia/commons/0/0d/Peacock_Milwaukee_County_Zoo.jpg");

listBirds();
getTotalBirds();
