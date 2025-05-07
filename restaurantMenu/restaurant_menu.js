const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak -$20', 'Pasta - $19', 'Burger -$15', 'Salmon - $19.50'];
const dessertMenu = ['Cake -$10', 'Ice Cream - $9', 'Pudding - $8', 'Fruit Salad - $9'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

 let mainCourseItem = '';
mainCourseMenu.forEach((item, index)=>{
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});  //the P looks different 
document.getElementById('maincourseMenuItems').innerHTML=mainCourseItem;

let dessertItem = '';
for (let i=0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;} //the P looks different
document.getElementById('dessertMenuItems').innerHTML = dessertItem;