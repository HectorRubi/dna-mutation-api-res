const hasMutation = require('dna-mutation');

describe("Test has mutation: ", () => {
  it("Horizontal Function: ", () => {
    expect(hasMutation(["ATGCGA", "CAGTGC", "TTATCT", "AGACGG", "CCCCTA", "TCACTG"])).toBe(true)
  })
})