let list_names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function getRandomName() {
    if (list_names.length > 0) {
        let index = Math.floor(Math.random() * list_names.length);
        return list_names.splice(index, 1)[0];
    }
    return null;
}

let randomName = getRandomName();
if (randomName) {
    console.log(randomName + " is going to buy lunch today!");
} else {
    console.log("No names left in the list.");
}