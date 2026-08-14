/**
 * Group 71 - Northstar Support Backend Service
 * Task: TSK-07
 *
 * Provides order lookup functionality for the
 * Northstar self-service customer dashboard.
 */

const mockOrderDatabase = {
  "ORD-5001": {
    orderId: "ORD-5001",
    orderStatus: "In Transit",
    shippingCarrier: "DHL Express",
    estimatedDelivery: "2026-08-18",
    returnDetails: {
      isEligibleForReturn: true,
      returnRequestId: "RET-9901",
      returnStatus: "Approved",
      refundAmount: 45.00
    }
  },

  "ORD-5002": {
    orderId: "ORD-5002",
    orderStatus: "Delivered",
    shippingCarrier: "FedEx",
    estimatedDelivery: "2026-08-10",
    returnDetails: {
      isEligibleForReturn: false,
      returnRequestId: null,
      returnStatus: "Not Applicable",
      refundAmount: null
    }
  },

  "ORD-5003": {
    orderId: "ORD-5003",
    orderStatus: "Processing",
    shippingCarrier: "USPS",
    estimatedDelivery: "2026-08-20",
    returnDetails: {
      isEligibleForReturn: true,
      returnRequestId: "RET-9905",
      returnStatus: "Pending Inspection",
      refundAmount: 120.50
    }
  }
};

/**
 * Looks up an order using its Order ID.
 *
 * The input is sanitized by removing whitespace
 * and converting it to uppercase.
 *
 * @param {string} orderId - Customer's Order ID
 * @returns {object|null} Matching order or null if not found
 */
function getOrderData(orderId) {
  if (!orderId) {
    return null;
  }

  const cleanKey = orderId.trim().toUpperCase();

  return mockOrderDatabase[cleanKey] || null;
}