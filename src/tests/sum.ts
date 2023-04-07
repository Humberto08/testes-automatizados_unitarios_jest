/*
    Esta função espera que sejam passados números separados por vírgula!
*/
export function soma(numeros: string): number {

    let inteiros : Array<number> = numeros.split(',').map(x => parseInt(x.trim()));
    let negativos : Array<number> = inteiros.filter(x => x < 0);

    if (negativos.length > 0) 
        throw new RangeError('Números negativos não são aceitos: ' + negativos.join(', '));
    

    return inteiros
        .filter(x => x <= 1000)
        .reduce((a, b) => a + b, 0);
}