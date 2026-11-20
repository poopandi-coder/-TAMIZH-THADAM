
const districtFood = {
    Ariyalur: {
        foods: [
            {
                name: "Traditional Rice Meals",
                category: "Signature Foods",
                type: "Vegetarian",
                ingredients: "Rice, sambar, rasam, vegetables, curd and pickles",
                time: "Lunch",
                image: "../image/traditional-rice-meal.jpg",
                info: "A traditional Tamil lunch served with rice and several side dishes. Common across Tamil Nadu."
            },
            {
                name: "Naatu Kozhi Curry",
                category: "Signature Foods",
                type: "Non-Vegetarian",
                ingredients: "Country chicken, onion, tomato, ginger, garlic and spices",
                time: "Lunch or Dinner",
                image: "../image/naatu-kozhi-curry.jpg",
                info: "A spicy country chicken curry commonly enjoyed with rice, dosa or idli."
            },
            {
                name: "Milagu Rasam",
                category: "Signature Foods",
                type: "Vegetarian",
                ingredients: "Pepper, cumin, tamarind, tomato, garlic and curry leaves",
                time: "Lunch",
                image: "../image/milagu-rasam.jpg",
                info: "A peppery, tangy broth served with rice or consumed on its own."
            },
            {
                name: "Idli with Sambar",
                category: "Popular Foods",
                type: "Vegetarian",
                ingredients: "Rice, urad dal, lentils, vegetables and spices",
                time: "Breakfast or Dinner",
                image: "../image/idli-sambar.jpg",
                info: "Soft steamed rice cakes served with sambar and chutney."
            },
            {
                name: "Dosa with Chutney",
                category: "Popular Foods",
                type: "Vegetarian",
                ingredients: "Fermented rice and urad dal batter, coconut, chilli and spices",
                time: "Breakfast or Dinner",
                image: "../image/dosa-chutney.jpg",
                info: "A thin, crispy pancake served with chutney and sambar."
            }
        ],

        snacks: [
            {
                name: "Kai Murukku",
                category: "Signature Snacks and Sweets",
                type: "Vegetarian",
                ingredients: "Rice flour, urad dal flour, butter or oil, sesame seeds and salt",
                time: "Evening or Festivals",
                image: "../image/kai-murukku.jpg",
                info: "A crunchy, hand-shaped savoury snack often prepared for festivals and family occasions."
            },
            {
                name: "Adhirasam",
                category: "Signature Snacks and Sweets",
                type: "Vegetarian",
                ingredients: "Rice flour, jaggery and cardamom",
                time: "Festivals",
                image: "../image/adhirasam.jpg",
                info: "A traditional deep-fried sweet with a soft centre, often made for celebrations."
            },
            {
                name: "Thattai",
                category: "Signature Snacks and Sweets",
                type: "Vegetarian",
                ingredients: "Rice flour, roasted gram flour, chilli, curry leaves and sesame seeds",
                time: "Evening or Festivals",
                image: "../image/thattai.jpg",
                info: "A flat, crispy savoury snack commonly prepared for festivals."
            },
            {
                name: "Mixture",
                category: "Popular Snacks",
                type: "Vegetarian",
                ingredients: "Sev, fried gram, peanuts, boondi, curry leaves and spices",
                time: "Evening Tea Time",
                image: "../image/mixture.jpg",
                info: "A crunchy savoury snack enjoyed with tea and sold in bakeries and snack shops."
            },
            {
                name: "Vegetable Pakoda",
                category: "Popular Snacks",
                type: "Vegetarian",
                ingredients: "Onion or mixed vegetables, gram flour, chilli and spices",
                time: "Evening Tea Time",
                image: "../image/vegetable-pakoda.jpg",
                info: "Crispy fried vegetable fritters commonly eaten as an evening snack."
            }
        ]
    }
};

function showFood(element, district) {
    let area = element.nextElementSibling;

    if (area.style.display === "block") {
        area.style.display = "none";
        return;
    }

    document.querySelectorAll(".food-area").forEach(function(item) {
        item.style.display = "none";
    });

    let data = districtFood[district];

    if (!data) {
        area.innerHTML = `<h2>${district}</h2>
        <p>Food information will be added soon.</p>`;
        area.style.display = "block";
        return;
    }

    let html = `<h2>${district} - Signature and Popular Foods</h2>`;

    data.foods.forEach(function(item) {
        html += `
            <div class="food-card">
                <img src="${item.image}" alt="${item.name}">
                <div class="food-details">
                    <h3>${item.name}</h3>
                    <p><b>Category:</b> ${item.category}</p>
                    <p><b>Type:</b> ${item.type}</p>
                    <p><b>Ingredients:</b> ${item.ingredients}</p>
                    <p><b>Eating Time:</b> ${item.time}</p>
                    <p>${item.info}</p>
                </div>
            </div>
        `;
    });

    html += `<h2>${district} - Snacks and Sweets</h2>`;

    data.snacks.forEach(function(item) {
        html += `
            <div class="food-card">
                <img src="${item.image}" alt="${item.name}">
                <div class="food-details">
                    <h3>${item.name}</h3>
                    <p><b>Category:</b> ${item.category}</p>
                    <p><b>Type:</b> ${item.type}</p>
                    <p><b>Ingredients:</b> ${item.ingredients}</p>
                    <p><b>Eating Time:</b> ${item.time}</p>
                    <p>${item.info}</p>
                </div>
            </div>
        `;
    });

    area.innerHTML = html;
    area.style.display = "block";
}
