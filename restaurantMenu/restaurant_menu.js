const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

//Use .map() when you need a transformed copy of your array
const breakfastMenuHTML = breakfastMenu.map((item, index) => `<p>Item${index + 1} : ${item}</p>`).join('');
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuHTML ;

//Use .forEach() when you need to perform actions with each element of your array
let mainCourseItem = "";

mainCourseMenu.forEach((item, index)=> {
    mainCourseItem += `<p>Item${index + 1} : ${item}</p>`;
});

document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem ;

//Consider simple for loop if you need to "break" /"cotinue" early or optimize performance
let dessertItem = "";
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item${i + 1} : ${dessertMenu[i]}</p>`
}

document.getElementById("dessertMenuItems").innerHTML = dessertItem;