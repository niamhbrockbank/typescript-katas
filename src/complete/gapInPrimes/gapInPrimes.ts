export {gapInPrimes as gap};

function gapInPrimes(gap : number, start : number, end : number): number[] | null{
    const oddStart = start % 2 === 0 ? start + 1 : start
    
    for (let i = oddStart; i < end; i += 2){
        if (isPrime(i)){
            for (let j = i + 2; j <= i + gap; j += 2){
                if (isPrime(j)){
                    if (j - i === gap){
                        return [i, j]
                    } else if (j - i < gap){
                        break
                    }
                }
            }
        }
    }

    return null
}


export function isPrime(num : number): boolean{
    const sqrtNum = Math.round(Math.sqrt(num))

    if (num === 2){
        return true
    }

    for (let i = 2; i <= sqrtNum; i ++){
        if (num % i === 0){
            return false
        }
    }
    return true
}