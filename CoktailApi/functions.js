const buscarCotel = async () => {

    const coctel = document.getElementById("valor").value
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctel}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })

    data = await response.json()

    if (!data.drinks) {
        console.error("Problema con la peticion")
    }

    const cocktail = data.drinks[0];

    const img = document.getElementById("img");
    const title = document.getElementById("title")
    const parraf = document.getElementById("parraf")
    img.src = cocktail.strDrinkThumb;
    img.alt = cocktail.strDrink;
    title.textContent = cocktail.strDrink;
    parraf.textContent = cocktail.strInstructionsES;



}
