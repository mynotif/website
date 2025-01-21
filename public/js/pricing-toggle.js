document.addEventListener('DOMContentLoaded', function() {
    const togglePlan = document.querySelector("#togglePlan");
    const priceDisplay = document.querySelector("#priceDisplay");

    const monthlyPrice = "9,90";
    const yearlyPrice = "106,90";

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

    updatePrice(false);

    togglePlan.addEventListener("change", function() {
      updatePrice(this.checked);
    });

    document.querySelector(".monthly").addEventListener("click", () => {
      togglePlan.checked = false;
      updatePrice(false);
    });

    document.querySelector(".yearly").addEventListener("click", () => {
      togglePlan.checked = true;
      updatePrice(true);
    });
  });