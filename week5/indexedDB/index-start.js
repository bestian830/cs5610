// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// Create an instance of a db object for us to store the open database in
let db;

// Open our database; if it doesn't exist, create it.
const openRequest = window.indexedDB.open("notes_db", 1);

// onerror handler signifies that the database didn't open successfully
openRequest.addEventListener('error', () => console.error('Error loading database.'));

// onsuccess handler signifies that the database opened successfully
openRequest.addEventListener('success', () => {
    console.log('Database loaded successfully');

    // Store the opened database object in the db variable
    db = openRequest.result;

    // Run the displayData() function to display the notes already in the IDB
    displayData();
});

// onupgradeneeded handler signifies that the database is being created or upgraded
openRequest.addEventListener("upgradeneeded", (e) => {
    // Acquire the database object
    db = e.target.result;

    //Create an objectStore to store our notes and its autoIncrement property
    const objectStore = db.createObjectStore("notes_os", {
        keyPath: "id",
        autoIncrement: true,
    });

    // Define the data items that the objectStore will contain
    objectStore.createIndex("title", "title", {unique: false});
    objectStore.createIndex("body", "body", {unique: false});

    console.log("Database setup complete");
})
    