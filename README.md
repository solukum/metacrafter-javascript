# Bird Encyclopedia

This is a simple JavaScript project that simulates a bird encyclopedia. The project allows users to add bird species to the encyclopedia, list all added birds with their metadata, and retrieve the total number of birds added.

## Features

- **Add Birds:** You can add birds to the encyclopedia with details such as species, habitat, diet, and an image URL.
- **List All Birds:** You can view a list of all the birds in the encyclopedia along with their details.
- **Total Number of Birds:** You can retrieve the total number of birds currently in the encyclopedia.

## Functions

### `addBird(species, habitat, diet, imageURL)`
- This function takes four parameters:
  - `species`: The name of the bird species (e.g., "Bald Eagle").
  - `habitat`: The natural habitat of the bird (e.g., "Forests, mountains").
  - `diet`: The bird's diet (e.g., "Carnivorous").
  - `imageURL`: A link to an image of the bird.
  
- It creates a bird object with these details and stores it in an array called `birdEncyclopedia`.

### `listBirds()`
- This function lists all the birds added to the bird encyclopedia.
- For each bird, it prints the following metadata:
  - Species
  - Habitat
  - Diet
  - Image URL

### `getTotalBirds()`
- This function prints the total number of birds in the encyclopedia.

## Usage

To use the bird encyclopedia, you can call the functions as follows:

1. **Add Birds**: Call the `addBird()` function to add bird species.

```javascript
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
```
