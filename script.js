
function calculateNSSF() {
  const age = document.getElementById("age").value;
  const yearsWorked = document.getElementById("yearsworked").value;
  const basicSalary = document.getElementById("basicsalary").value;
  const retirementAge = 55; // Assuming retirement age is 55
  const yearsToRetirement = retirementAge - age;
  const totalNSSF = (basicSalary * yearsWorked) * 12; // Assuming 5% NSSF contribution
  document.getElementById("result").innerHTML = `
    <p>Years to retirement: ${yearsToRetirement} years</p>
    <p>Total NSSF amount accumulated: UGX ${totalNSSF.toLocaleString()}</p>
  `;
}