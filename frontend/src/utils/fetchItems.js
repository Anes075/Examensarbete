export async function fetchItems() {

  const url = "https://database-22220-default-rtdb.europe-west1.firebasedatabase.app/.json";

  const response = await fetch(url);


  const items = await response.json();


  const itemsArray = [];

  for (const property in items) {

    itemsArray.push(items[property]);
  }

   /* console.log(itemsArray); */

    return itemsArray;
}

