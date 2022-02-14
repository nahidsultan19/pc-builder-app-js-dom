function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storageCost) + parseFloat(deliveryCost);
    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}
/* 
document.getElementById('sixteenGB').addEventListener('click', function () {
    // const memoryCost = document.getElementById('memory-cost');
    // memoryCost.innerText = 200;

    // const bestPrice = document.getElementById('best-price').innerText;
    // const memoryPrice = document.getElementById('memory-cost').innerText;
    // const storageCost = document.getElementById('storage-cost').innerText;
    // const deliveryCost = document.getElementById('delivery-cost').innerText;

    // const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storageCost) + parseFloat(deliveryCost);
    // const total = document.getElementById('total-price');
    // total.innerText = totalPrice;
    updatePrice('memory-cost', 300);

}); */
/* document.getElementById('ssd1').addEventListener('click', function () {
    updatePrice('storage-cost', 0)
})
document.getElementById('ssd2').addEventListener('click', function () {
    updatePrice('storage-cost', 500)
})
document.getElementById('ssd3').addEventListener('click', function () {
    updatePrice('storage-cost', 1000)
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    updatePrice('delivery-cost', 20)
}) */

// item selction 
function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(updateId, price)
    })
}

onClick('sixteenGB', 'memory-cost', 200)
onClick('eightGB', 'memory-cost', 0)
onClick('ssd1', 'storage-cost', 0)
onClick('ssd2', 'storage-cost', 500)
onClick('ssd3', 'storage-cost', 1000)
onClick('free-delivery', 'delivery-cost', 0)
onClick('paid-delivery', 'delivery-cost', 20)


// promo code 
const promoCode = 'nahid';
document.getElementById('apply-btn').addEventListener('click', function () {
    const code = document.getElementById('promo-input').value;

    const successMessage = document.getElementById('applied-text');
    const failMessage = document.getElementById('fail');
    console.log(code);
    if (code == promoCode) {
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);
        const discount = (totalPrice * 20) / 100;
        const finalPrice = totalPrice - discount;
        // console.log(totalPrice);
        total.innerText = finalPrice;
        console.log(total.innerText);

        successMessage.style.display = 'block';
        failMessage.style.display = 'none'



    } else {

        failMessage.style.display = 'block';
        successMessage.style.display = 'none';

    }

    // clear input 
    code.value = '';
})

