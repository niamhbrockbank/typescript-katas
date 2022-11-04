import { gap, isPrime } from "./gapInPrimes";

describe("Gap",function() {
    it("Basic gap tests",function() {    
      expect(gap(2,100,110)).toStrictEqual([101, 103])
      expect(gap(4,100,110)).toStrictEqual([103, 107])
      expect(gap(6,100,110)).toStrictEqual(null)
      expect(gap(8,300,400)).toStrictEqual([359, 367])
      expect(gap(10,300,400)).toStrictEqual([337, 347])
  })
    it("isPrime tests", () => {
        expect(isPrime(2)).toBe(true) 
        expect(isPrime(3)).toBe(true)
        expect(isPrime(6)).toBe(false)
        expect(isPrime(65)).toBe(false)
    })  
})