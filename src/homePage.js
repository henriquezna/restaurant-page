function loadHomePage () {
    const content = document.getElementById("content");

    content.innerHTML = '';
    
    let title = document.createElement("h1");
    let image = document.createElement("img");
    let copy = document.createElement("p");

    title.innerHTML = "Restaurant";
    image.src = "https://www.recipetineats.com/wp-content/uploads/2019/04/Beef-Pho_6.jpg";
    image.alt = "Pho Bowl";
    copy.innerText = "THIS PLACE IS SO YUUMY";

    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(copy);
};

export default loadHomePage;