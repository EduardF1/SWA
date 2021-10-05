// External API service
function CryptoCurrencyAPI() {
    this.getValue = function (coin) {
        console.log('Calling external API...');
        switch (coin) {
            case 'Bitcoin':
                return '$3.500';
            case 'Litecoin':
                return '$50';
            case 'Ethereum':
                return '$175';
        }
    }
}

// const api = new CryptoCurrencyAPI();
// console.log(api.getValue('Bitcoin'));
// console.log(api.getValue('Litecoin'));
// console.log(api.getValue('Ethereum'));

function CryptoCurrencyProxy() {
    this.api = new CryptoCurrencyAPI();
    this.cache = {};
    this.getValue = function (coin) {
        if(this.cache[coin] == null){
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    }
}

const proxy = new CryptoCurrencyProxy();
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));