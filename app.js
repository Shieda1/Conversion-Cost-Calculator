// https://calculator.swiftutors.com/conversion-cost-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const conversionCostRadio = document.getElementById('conversionCostRadio');
const directLaborCostRadio = document.getElementById('directLaborCostRadio');
const factoryOverheadCostRadio = document.getElementById('factoryOverheadCostRadio');

let conversionCost;
let directLaborCost = v1;
let factoryOverheadCost = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

conversionCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Direct Labor Cost';
  variable2.textContent = 'Factory Overhead Cost';
  directLaborCost = v1;
  factoryOverheadCost = v2;
  result.textContent = '';
});

directLaborCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Conversion Cost';
  variable2.textContent = 'Factory Overhead Cost';
  conversionCost = v1;
  factoryOverheadCost = v2;
  result.textContent = '';
});

factoryOverheadCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Conversion Cost';
  variable2.textContent = 'Direct Labor Cost';
  conversionCost = v1;
  directLaborCost = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(conversionCostRadio.checked)
    result.textContent = `Conversion Cost = ${computeConversionCost().toFixed(2)}`;

  else if(directLaborCostRadio.checked)
    result.textContent = `Direct Labor Cost = ${computeDirectLaborCost().toFixed(2)}`;

  else if(factoryOverheadCostRadio.checked)
    result.textContent = `Factory Overhead Cost = ${computeFactoryOverheadCost().toFixed(2)}`;
})

// calculation

function computeConversionCost() {
  return Number(directLaborCost.value) + Number(factoryOverheadCost.value);
}

function computeDirectLaborCost() {
  return Number(conversionCost.value) - Number(factoryOverheadCost.value);
}

function computeFactoryOverheadCost() {
  return Number(conversionCost.value) - Number(directLaborCost.value);
}