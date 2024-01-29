const form = document.querySelector("#form");
const select = document.querySelector("#currencies");
const input = document.querySelector("#amount");
const finalResult = document.querySelector("#result");

const getCurrencyValue = (event) => {
  event.preventDefault();
  const currency = select.value;
  const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`;

  axios
    .get(url)
    .then((response) => {
      const mid = response.data.rates[0].mid;
      const amount = input.value;
      const result = mid * amount;
      finalResult.innerText = `${result.toFixed(2)} PLN`;
    })
    .catch((err) => {
      console.error(err);
    });
};

form.addEventListener("submit", getCurrencyValue);
