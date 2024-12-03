document.addEventListener("DOMContentLoaded", function () {
    const savedWalletRadio = document.getElementById("saved-wallet");
    const newWalletRadio = document.getElementById("new-wallet");
    const cardsContainer = document.getElementById("cards-container");
    const contBtn = document.getElementById("cont-btn");

    //cards templates
    const savedWalletCard = `
        <div  class="row">
            <div class="input-field inputN col s12">
            <input placeholder="existing card number" id="saved-card" type="text" disabled/>
            <label for="saved-card">Card Number</label>
            </div>
            <p style="margin: 0px;">Card holder name: 
                <span class="grey-text lighten-3">Joe August</span>
            </p>
        </div>
    `;

    const newWalletCard = ``





    //function to update button based on radio choice
    function updateBtnText() {
        if (newWalletRadio.checked || savedWalletRadio.checked) {
            contBtn.textContent = "Pay Now";
        }
    }

    // Attach event listeners
    savedWalletRadio.addEventListener("change", updateBtnText);
    newWalletRadio.addEventListener("change", updateBtnText);

    // Initialize button text on page load
    updateBtnText();
});

