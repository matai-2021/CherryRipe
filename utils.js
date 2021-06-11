module.exports = {
  decideResult
}



function decideResult (answers) {
  
  let a = [0, 'koko']
  let b = [0, 'zac']
  let c = [0, 'susie']
  let d = [0, 'josh']
  
  for (let i = 0; i < answers.length; i++) {
    let value = answers[i]
    if (value === 'a') {
      a[0]++
    }
    if (value === 'b') {
      b[0]++
    }
    if (value === 'c') {
      c[0]++
    }
    if (value === 'd') {
      d[0]++
    }
  } 
  
  let scoredResults = [a, b, c, d] // scored results are updated valued dependant on answers
  
  function getResult (arr) {
    const value = (Math.max(a[0], b[0], c[0], d[0]))
    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i][0]) {
        return (arr[i][1])
      }
    }
  }

  const theResult =  getResult(scoredResults)
  
  a = [0, 'koko']
  b = [0, 'zac']
  c = [0, 'susie']
  d = [0, 'josh']
  
  return theResult
}
