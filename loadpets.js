const pets = [

    { "name": "Buddy", "type": "Dog", "age": 3, "img": "./petshop-img/dogs/dog01.jpg" },
    { "name": "Max", "type": "Dog", "age": 5, "img": "./petshop-img/dogs/dog02.jpg" },
    { "name": "Bella", "type": "Dog", "age": 4, "img": "./petshop-img/dogs/dog03.jpg" },
    { "name": "Whiskers", "type": "Cat", "age": 2, "img": "./petshop-img/cats/cat01.jpg" },
    {"name": "Luna", "type": "Cat", "age": 3, "img": "./petshop-img/cats/cat02.jpg" },
    { "name": "Oliver", "type": "Cat", "age": 1, "img": "./petshop-img/cats/cat03.jpg" },
    {"name": "Charlie", "type": "Cappybara", "age": 2, "img": "./petshop-img/capybaras/capybara01.jpg" },
    { "name": "Coco", "type": "Cappybara", "age": 3, "img": "./petshop-img/capybaras/capybara02.jpg" },
    { "name": "Milo", "type": "Bird", "age": 4, "img": "./petshop-img/birds/bird01.jpg"},
    { "name": "Tweety", "type": "Bird", "age": 1, "img": "./petshop-img/birds/bird02.jpg" }

]


function loadPets() {
    console.log('Loading pets...');
    const petList = $("#pet-list");
    pets.forEach(pet => {
        const petItem = $("<div>").addClass('pet').html(`
            <img src="${pet.img}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <button onclick="adoptPet()">Adopt Now</button>
        `);
        petList.append(petItem);       
    });

    petList.on("click", ".adopt-btn", adoptPet);

    $('input[name="pet-type"]').on("change", function() {
        filterPets();
    });
}

function filterPets() {
    console.log("Selected pet type:", $('input[name="pet-type"]:checked').val());
    const selectedType = $('input[name="pet-type"]:checked')
    .map(function() {
        return $(this).val();
    })
    .get();

    console.log(selectedType);

    const filterPets = pets.filter(pet =>  selectedType.includes(pet.type));
    console.log("Filtered pets:", filterPets);

    const petList = $('#pet-list');
    petList.empty(); // Clear the current list
    filterPets.forEach(pet => {
        const petItem = $("<div>").addClass('pet').html(`
            <img src="${pet.img}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <button class="adopt-btn">Adopt Now</button>
        `);
        petList.append(petItem);
    });     

}

$(document).ready(function() {
    loadPets();
});