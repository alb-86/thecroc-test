api = 'https://random-data-api.com/api/bank/random_bank';
const getData = () => {
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.querySelector("#bank-data").innerText = data;
    });
};
getData();
