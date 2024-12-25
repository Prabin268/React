function calculateBill() {
    const dellPrice = 20000;
    const hpPrice = 25000;
    const lenovoPrice = 30000;

    const dellQty = parseInt(document.getElementById('dell').value) || 0;
    const hpQty = parseInt(document.getElementById('hp').value) || 0;
    const lenovoQty = parseInt(document.getElementById('lenovo').value) || 0;

    const deliveryCost = parseInt(document.querySelector('input[name="delivery"]:checked')?.value || 0);

    const packingCost = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .reduce((total, checkbox) => total + parseInt(checkbox.value), 0);

    const location = document.getElementById('location').value;
    const taxRate = location === 'ktm' ? 0.13 : 0;

    const subTotal = (dellQty * dellPrice) + (hpQty * hpPrice) + (lenovoQty * lenovoPrice);
    const taxAmount = subTotal * taxRate;
    const grandTotal = subTotal + taxAmount + deliveryCost + packingCost;

    document.getElementById('bill-summary').innerHTML = `
        <h1>Subtotal: Rs:${subTotal.toFixed(2)}</h1>
        <h1>Tax: Rs:${taxAmount.toFixed(2)}</h1>
        <h1>Delivery: Rs:${deliveryCost}</h1>
        <h1>Packing: Rs:${packingCost}</h1>
        <h1>Grand Total: Rs:${grandTotal.toFixed(2)}</h1>
    `;
}