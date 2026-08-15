/**
 * Group 71 - Automated QA Test Suite
 * Author: Member 4
 */

function runQATests() {
  console.log("==========================================");
  console.log("🧪 RUNNING GROUP 71 QA SUITE...");
  console.log("==========================================");

  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${testName}`);
      failed++;
    }
  }

  // 1. Valid Order Lookup
  const res1 = getOrderData("ORD-5001");
  assert(res1 && res1.orderStatus === "In Transit", "ORD-5001 returns 'In Transit' status");
  assert(res1 && res1.returnDetails.isEligibleForReturn === true, "ORD-5001 is eligible for return");

  // 2. Case Insensitivity & Whitespace Trimming
  const res2 = getOrderData("  ord-5002 ");
  assert(res2 && res2.orderId === "ORD-5002", "Trims whitespace and handles lowercase input");

  // 3. Non-Existent Order ID
  const res3 = getOrderData("ORD-9999");
  assert(res3 === null, "Returns null for invalid Order ID");

  // 4. Edge Cases
  assert(getOrderData("") === null, "Handles empty string gracefully");
  assert(getOrderData(null) === null, "Handles null input gracefully");

  console.log("------------------------------------------");
  console.log(`📊 QA Summary: ${passed} Passed | ${failed} Failed`);
  console.log("==========================================");
}

if (typeof window !== "undefined") {
  window.onload = runQATests;
}
