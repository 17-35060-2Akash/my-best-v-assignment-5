function addPlayersToTheList(playerName) {
    // adding players to the list 
    const ol = document.getElementById('players-list-ol');
    const li = document.createElement('li');
    li.classList.add('list-class', 'item');
    li.innerText = playerName;
    ol.append(li);
}

function getAllElementNumber() {

}


const selectButtons = document.getElementsByClassName('select-btn');
for (const selectButton of selectButtons) {
    let listItemsNo = 0;
    selectButton.addEventListener('click', function (event) {
        // button functions 
        const parentOfParentNode = event.target.parentNode.parentNode;
        const playerName = parentOfParentNode.querySelector('h5').innerText;
        // disable select button
        const targetNode = event.target;
        targetNode.setAttribute('disabled', true);
        //remove animation of card when selected
        parentOfParentNode.parentNode.classList.remove('blog');
        //ad to list
        addPlayersToTheList(playerName);

        const nodeList = document.querySelectorAll('.item');
        listItemsNo = nodeList.length;


    });
}