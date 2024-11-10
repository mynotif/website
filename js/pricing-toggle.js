document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments nécessaires
    const togglePlan = document.querySelector("#togglePlan");
    const priceDisplay = document.querySelector("#priceDisplay");
  
    // Prix mensuels et annuels
    const monthlyPrice = "9,90";
    const yearlyPrice = "106,90";
  
    // Fonction pour mettre à jour l'affichage du prix
    function updatePrice(isYearly) {
      if (isYearly) {
        priceDisplay.innerHTML = `
          <span class="ri ui zi">
            ${yearlyPrice}
            <sup class="mi vi">€</sup>
          </span>
          <span class="ki bj">/an</span>
        `;
      } else {
        priceDisplay.innerHTML = `
          <span class="ri ui zi">
            ${monthlyPrice}
            <sup class="mi vi">€</sup>
          </span>
          <span class="ki bj">/mois </br> soit 118.80€/an</span>
        `;
      }
    }
  
    // Initialisation du prix au chargement
    updatePrice(false);
  
    // Écouteurs d'événements pour le toggle
    togglePlan.addEventListener("change", function() {
      updatePrice(this.checked);
    });
  
    // Écouteurs d'événements pour les labels Mensuel/Annuel
    document.querySelector(".monthly").addEventListener("click", () => {
      togglePlan.checked = false;
      updatePrice(false);
    });
  
    document.querySelector(".yearly").addEventListener("click", () => {
      togglePlan.checked = true;
      updatePrice(true);
    });
  });