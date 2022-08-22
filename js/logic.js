function addPlayersToTheList(playerName) {
    // adding players to the list 
    const ol = document.getElementById('players-list-ol');
    const nodeList = document.querySelectorAll('.item');
    //condition of adding 5 players
    if (nodeList.length < 5) {
        const li = document.createElement('li');
        li.classList.add('list-class', 'item');
        li.innerText = playerName;
        ol.append(li);
        return true;
    }
    else {
        alert("You can't add more than 5 players in your team!");
        return false;
    }

}


const selectButtons = document.getElementsByClassName('select-btn');
for (const selectButton of selectButtons) {
    selectButton.addEventListener('click', function (event) {
        // button functions 
        const parentOfParentNode = event.target.parentNode.parentNode;
        const playerName = parentOfParentNode.querySelector('h5').innerText;
        //ad to list
        const status = addPlayersToTheList(playerName);
        if (status) {
            // disable select button
            const targetNode = event.target;
            targetNode.setAttribute('disabled', true);
            //remove animation of card when selected
            parentOfParentNode.parentNode.classList.remove('blog');
        }

    });
}

document.getElementById('btn-calculate').addEventListener('click', function (event) {
    const perPlayerCostElement = document.getElementById('per-player-cost-field');
    const perPlayerCostString = perPlayerCostElement.value;
    if (perPlayerCostString === '') {
        alert("Please add per player cost to the 'Per Player' section.");
    }

    else if (isNaN(perPlayerCostString)) {
        alert("Only numbers are allowed to the 'Per Player' section.");
        perPlayerCostElement.value = '';
    }
    else if (parseFloat(perPlayerCostString) < 0) {
        alert('You can not insert a negative value.');
        perPlayerCostElement.value = '';
    }

    else {
        const perPlayerCost = parseFloat(perPlayerCostString);
        // console.log(perPlayerCost);
        const playerExpenses = perPlayerCost * document.querySelectorAll('.item').length;
        document.getElementById('player-expenses-amount').innerText = playerExpenses;

    }
});

document.getElementById('btn-calculate-total').addEventListener('click', function (event) {
    // coach field validation
    const managerCostElement = document.getElementById('manager-cost-field');
    const managerCostString = managerCostElement.value;
    if (managerCostString === '') {
        alert("Please add manager cost to the 'Manager' section.");
    }

    else if (isNaN(managerCostString)) {
        alert("Only numbers are allowed to the 'Manager' section.");
        managerCostElement.value = '';
    }
    else if (parseFloat(managerCostString) < 0) {
        alert('You can not insert a negative value.');
        managerCostElement.value = '';
    }

    else {
        const managerCost = parseFloat(managerCostString);
        console.log(managerCost);
        // coach field validation
        const coachCostElement = document.getElementById('coach-cost-field');
        const coachCostString = coachCostElement.value;
        if (coachCostString === '') {
            alert("Please add coach cost to the 'Coach' section.");
        }

        else if (isNaN(coachCostString)) {
            alert("Only numbers are allowed to the 'Coach' section.");
            coachCostElement.value = '';
        }
        else if (parseFloat(coachCostString) < 0) {
            alert('You can not insert a negative value.');
            coachCostElement.value = '';
        }

        else {
            const coachCost = parseFloat(coachCostString);
            console.log(coachCost);
            //calculate total calculation
            document.getElementById('total-expenses-amount').innerText = parseFloat(document.getElementById('player-expenses-amount').innerText)
                + managerCost + coachCost;
        }


    }
});