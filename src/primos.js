class FactoresPrimos{
    static generar(n){
        let primos = [];
        let candidato = 2;
        while(n > 1){
            while(n%candidato === 0){
                primos.push(candidato);
                n /= candidato;
            }
            candidato++;
        }
        return primos;
    }
}

export default FactoresPrimos