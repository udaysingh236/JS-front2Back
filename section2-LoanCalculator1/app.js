document.getElementById('loan-form').addEventListener('submit', (e) => {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        calculateResults();
    }, 1500);

    e.preventDefault();
});

// calculateResults

function calculateResults() {
    //UI Vars
    UIamount = document.getElementById('amount');
    UIinterest = document.getElementById('interest');
    UIyears = document.getElementById('years');
    UImonthlyPayment = document.getElementById('monthly-payment');
    UItotalPayment = document.getElementById('total-payment');
    UItotalInterest = document.getElementById('total-Interest');

    const principal = parseFloat(UIamount.value);
    const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
    const calculatedPayments = parseFloat(UIyears.value) * 12;

    //Monthly payment

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
        UItotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';

    } else {
        showError("Please check your numbers..!!")

    }

}


function showError(error) {

    document.getElementById('loading').style.display = 'none';
    //Create a div
    const errorDiv = document.createElement('div');

    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add Class
    errorDiv.className = 'alert alert-danger';

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    card.insertBefore(errorDiv, heading);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2000);
}