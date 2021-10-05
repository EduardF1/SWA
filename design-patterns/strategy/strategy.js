// DP in which a group of related algorithms are grouped and a strategy is created to switch between the group's algorithms
function Fedex() {
    this.calculate = package => {
        // fedex calculations...
        // fedex shipping rate
        return 2.45 ;
    }
}
Fedex.prototype.getPackageDetails = function (package) {
    return ` From: ${package.from} To: ${package.to} Weight: ${package.weight}`
};
function UPS() {
    this.calculate = (package) => {
        // ups calculations...
        return 1.56;
    }
}
UPS.prototype.getPackageDetails = function (package) {
    return ` From: ${package.from} To: ${package.to} Weight: ${package.weight}`
};
function USPS() {
    this.calculate = (package) => {
        // usps calculations...
        return 4.5;
    }
}
USPS.prototype.getPackageDetails = function (package) {
    return ` From: ${package.from} To: ${package.to} Weight: ${package.weight}`
};
// Strategy context
function Shipping() {
    this.company = '';
    this.setStrategy = company => {
        this.company = company;
    }
    this.calculate = package => {
       return  this.company.calculate(package);
    }
}
const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const package1 = {from: 'Alabama', to: 'Georgia', weight:1.56};

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log('Fedex ' + shipping.calculate(package1) + fedex.getPackageDetails(package1));
shipping.setStrategy(ups);
console.log('UPS ' + shipping.calculate(package1) + ups.getPackageDetails(package1));
shipping.setStrategy(usps);
console.log('USPS ' + shipping.calculate(package1) + usps.getPackageDetails(package1));