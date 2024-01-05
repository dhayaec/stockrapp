// A mock function to mimic making an async request for data
export default function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve, reject) =>
    setTimeout(() => {
      const resultAmount = amount + 1
      if (resultAmount !== 5) {
        resolve({ data: resultAmount })
      } else {
        reject(new Error('Oops! Random amount is odd'))
      }
    }, 500)
  )
}
