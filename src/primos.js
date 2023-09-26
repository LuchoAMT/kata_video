class FactoresPrimos{
    static generar(n){
        let primos = [];
        for(let candidato = 2; n > 1; candidato++){
            for(; n%candidato === 0; n /= candidato){
                primos.push(candidato);
            }
        }
        return primos;
    }
}

export default FactoresPrimos