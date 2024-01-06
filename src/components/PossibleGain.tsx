import React, { Component } from 'react'

interface PossibleGainProps {
  name: string
}

export default class PossibleGain extends Component<PossibleGainProps, any> {
  state = {
    price: 0,
    percentage: 0,
    result: 0,
  }

  onChange = (e: React.ChangeEvent<any>): void => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.calculate()
    })
  }

  calculate = (): void => {
    const { price, percentage } = this.state
    if (price && percentage) {
      const result = (Number(price) * Number(percentage)) / 100
      this.setState({
        result: `${result.toFixed(2)}`,
      })
    }
  }

  render() {
    const { name } = this.props
    const { price, percentage, result } = this.state
    return (
      <div className='my-2 text-center' data-testid='possible-gain'>
        <div className='my-1'>
          <h1>{name}</h1>
        </div>
        <div className='flex justify-center text-center'>
          <div className='w-1/2'>
            <input
              value={price || ''}
              type='number'
              name='price'
              id='gainPrice'
              onChange={this.onChange}
              placeholder='Price'
              className='w-full'
              pattern='\d*'
              data-testid='price'
            />
          </div>
          <div className='w-1/2'>
            <input
              value={percentage || ''}
              type='number'
              name='percentage'
              id='percentage'
              onChange={this.onChange}
              placeholder='Percentage'
              className='w-full'
              pattern='\d*'
              data-testid='percentage'
            />
          </div>
        </div>
        <div className='flex justify-center py-1 text-center'>
          <p data-testid='result' className={'text-green'}>
            &#8377; {result}
          </p>
        </div>
      </div>
    )
  }
}
