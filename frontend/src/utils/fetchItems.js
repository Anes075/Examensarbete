export async function fetchItems(url) {

  const response = await fetch(url);


  const items = await response.json();


  const itemsArray = [];

  for (const property in items) {

    itemsArray.push(items[property]);
  }

   /* console.log(itemsArray); */

    return itemsArray;
}

