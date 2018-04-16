// Article id grabber
const cityRef = document.querySelector("#myCities")

// Generate Dom Components
const cityDomBuilder = (year) => {


    
    // Loop through each city object in the city array
    cityDatabase.cities.forEach(function(cityObj) {

        // Create a div for card
        let cardDiv = document.createElement('div');

        // Give the div a class of cardContainer
        cardDiv.classList.add("cardContainer");

        // Create an h2 element for City name
        let cityNameHeading = document.createElement('h2');

        // Create a textnode for text of City name
        let cityHeadingText = document.createTextNode(cityObj.cityName);

        // Append the textnode to h2
        cityNameHeading.appendChild(cityHeadingText);

        // Append h2 to div
        cardDiv.appendChild(cityNameHeading);

        // Create an image element
        let cityImage = document.createElement('img');

        // Set image element src attribute to the link in cityObj
        cityImage.src = cityObj.cityImage;

        // Append img to card div 
        cardDiv.appendChild(cityImage);

        // Create a p for Year
        let yearVisitedParagraph = document.createElement('p');
        
        // Create a textnode for the Year text
        yearVisitedText = document.createTextNode(cityObj.yearVisited);

        // Append the textnode to the p
        yearVisitedParagraph.appendChild(yearVisitedText);

        // Append the p to the div 
        cardDiv.appendChild(yearVisitedParagraph);

        // Create a p for the Attractions
        let attractionParagraph = document.createElement('p');

        // Create a textnode for the attraction text
        attractionText = document.createTextNode('Attractions:');

        // Append the textnode to the p
        attractionParagraph.appendChild(attractionText);

        // Append the p to the div
        cardDiv.appendChild(attractionParagraph); 

        // Create an ul 
        let attractionUL = document.createElement('ul');

        // forEach over the attration array 
         cityObj.attractions.forEach(function(attractionName){

            // Create an li 
            let attractionLI = document.createElement('li');

            // Create a textnode for the attraction text
            let attractionText = document.createTextNode(attractionName);

            // Append the textnode to the li
            attractionLI.appendChild(attractionText);

            // Append the li to the ul
            attractionUL.appendChild(attractionLI);
         })

        // Append the ul to the card div
         cardDiv.appendChild(attractionUL);

        // Create a p for the Continent
        continentParagraph = document.createElement('p');

        // Create a textnode for the continent text
        let continentText = document.createTextNode(cityObj.continent);

        // Append the textnode to the contienent p
        continentParagraph.appendChild(continentText);

        // Append the contienent p to the div
        cardDiv.appendChild(continentParagraph);

        // If contienent is not US
        if (cityObj.continent !== 'United States') {

            // Add class to card of Europe
            cardDiv.classList.add("orangeEurope");
        }
        // Append Card to Article
        cityRef.appendChild(cardDiv);
    })
       
}

cityDomBuilder();

/*
<article id="myCities">
    <div class="cardContainer">
        <h2>City</h2>
        <img>Image</img>
        <p>Year</p>
         <p>Attractions</p>
        <ul>
            <li></li>
        </ul>
        <p>Continent</p>
    </div>
    <div class="cardContainer">
        <h2>City</h2>
        <img>Image</img>
        <p>Year</p>
        <p>Attractions</p>
        <ul>
            <li></li>
        </ul>
        <p>Continent</p>
    </div>
    <div class="cardContainer">
        <h2>City</h2>
        <img>Image</img>
        <p>Year</p>
         <p>Attractions</p>
        <ul>
            <li></li>
        </ul>
        <p>Continent</p>
    </div>
</article>
*/