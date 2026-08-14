
function getBadgeClass(status) {
  const value = (status || '').toLowerCase();
  if (['delivered', 'approved', 'shipped'].includes(value)) return 'badge-green';
  if (['in transit', 'processing', 'pending inspection'].includes(value)) return 'badge-amber';
  if (['not applicable'].includes(value)) return 'badge-blue';
  return 'badge-blue';
}

function setBadge(el, text) {
  el.innerText = text;
  el.classList.remove('badge-blue', 'badge-green', 'badge-amber');
  el.classList.add(getBadgeClass(text));
}

function handleSearch(event) {
  event.preventDefault();

  const orderId = document.getElementById('order-id-input').value.trim();
  const errorMessage = document.getElementById('error-message');
  const resultsContainer = document.getElementById('results');

  if (typeof getOrderData !== 'function') {
    alert('Backend data lookup logic not loaded yet!');
    return;
  }

  const data = getOrderData(orderId);

  if (data) {
    errorMessage.style.display = 'none';

    // Render Order Status
    document.getElementById('display-order-id').innerText = data.orderId;
    document.getElementById('display-carrier').innerText = data.shippingCarrier;
    document.getElementById('display-delivery').innerText = data.estimatedDelivery;
    setBadge(document.getElementById('order-status-badge'), data.orderStatus);

    // Render Return Details
    document.getElementById('display-eligible').innerText =
      data.returnDetails.isEligibleForReturn ? 'Yes' : 'No';
    document.getElementById('display-return-id').innerText =
      data.returnDetails.returnRequestId || 'N/A';
    document.getElementById('display-refund').innerText =
      data.returnDetails.refundAmount ? `$${data.returnDetails.refundAmount.toFixed(2)}` : 'N/A';
    setBadge(document.getElementById('return-status-badge'), data.returnDetails.returnStatus);

    resultsContainer.style.display = 'flex';
  } else {
    resultsContainer.style.display = 'none';
    errorMessage.style.display = 'block';
  }
}