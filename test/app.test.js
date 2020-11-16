const hasMutation = require('dna-mutation');

describe('Mutación en secuencia de ADN', () => {
  test('Prueba de mutación horizontal', () => {
    expect(hasMutation(['AAAAAA', 'CAGTGC', 'TTTTTT', 'AGACGG', 'CCCCCA', 'TGGGGG'])).toBe(true)
  })
  test('Prueba de mutación vertical', () => {
    expect(hasMutation(['ATGCGA', 'ACGTGA', 'ATATTA', 'AGACGA', 'GCGTCC', 'TCACTG'])).toBe(true)
  })
  test('Prueba de mutación oblicua', () => {
    expect(hasMutation(['AGGCGA', 'CAGTGC', 'TTAGTT', 'ATAAGG', 'GCTTCA', 'TCATTG'])).toBe(true)
  })
  test('Prueba de mutación oblicua invertida', () => {
    expect(hasMutation(['ATGCGA', 'CAGGAC', 'TTGACT', 'AGACGG', 'GACTCA', 'TCGCTG'])).toBe(true)
  })
  test('Prueba de mutación mixta', () => {
    expect(hasMutation(['AAAAGA', 'CAGGAC', 'TTGACT', 'TGTCGG', 'TACTCA', 'TCGCTG'])).toBe(true)
  })
  test('Prueba de no mutación', () => {
    expect(hasMutation(['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'])).toBe(false)
  })
  test('Prueba con caracteres erroneos', () => {
    expect(() => {
      hasMutation(['ATGCGA', 'CAZTGC', 'TTAHTT', 'AGAYGG', 'GCGTCA', 'TCACTG'])
    }).toThrow()
  })
})