import React from 'react'

const Calculate = ({ n, handleCalculate }) => {
  console.log(n)
  const fillQuiueArr = (m) => {
    let quiueArr = []
    for (let i = 1; i <= m; i++) {
      quiueArr.push(i)
    }
    return quiueArr
  }
  const compare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false
    }
    return true
  }

  const numberOfDays = (n) => {
    let days = 0
    let quiueArr = fillQuiueArr(n)
    const comparativeArr = fillQuiueArr(n)
    let minArr = []
    let fiveMinArr = []
    let hoursArr = []
    do {
      for (let i = 0; i <= 4; i++) {
        i < 4 ? minArr.push(quiueArr[i]) : fiveMinArr.push(quiueArr[i])
      }
      quiueArr = [...quiueArr, ...minArr.reverse()]
      quiueArr = quiueArr.slice(5, quiueArr.length)
      minArr = []

      if (fiveMinArr.length === 12) {
        hoursArr.push(fiveMinArr[fiveMinArr.length - 1])
        fiveMinArr = fiveMinArr.slice(0, 11)
        quiueArr = [...quiueArr, ...fiveMinArr.reverse()]
        fiveMinArr = []
      }
      if (hoursArr.length === 12) {
        const aux = hoursArr[hoursArr.length - 1]
        hoursArr = hoursArr.slice(0, 11)
        quiueArr = [...quiueArr, ...hoursArr.reverse()]
        quiueArr.push(aux)
        hoursArr = []
        days += 0.5
      }
    } while (compare(quiueArr, comparativeArr) === false)
    console.log('days ', days)
    handleCalculate(days)
  }
  numberOfDays(n)
  return <div></div>
}

export default Calculate
