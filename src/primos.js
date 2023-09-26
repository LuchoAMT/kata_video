class FactoresPrimos{
    static generar(n){
        let primos = [];
        if(n > 1){
            if(n%2 === 0){
                primos.push(2);
                n /= 2;
            }
            if(n > 1){
                primos.push(n);
            }
        }
        return primos;
    }
}

export default FactoresPrimos