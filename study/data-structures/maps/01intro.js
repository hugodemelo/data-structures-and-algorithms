const map = new Map();

map.set('name', 'Hugo'); // O(1)
const name = map.get('name'); // O(1)
console.log(name);

map.delete('name'); // O(1)
console.log(map);
