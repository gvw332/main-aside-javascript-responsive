const serviceList = document.querySelectorAll("li.item-list");

for (let i = 0; i < serviceList.length; i++) {
    serviceList[i].addEventListener("click", (event) => {
        event.preventDefault();
        console.log('clique:',event);
        // Sélectionner l'élément cliqué (le lien)
        const clickedItem = event.currentTarget;
        clickedItem.querySelector('.descri').classList.toggle('hidden');
    });
};
