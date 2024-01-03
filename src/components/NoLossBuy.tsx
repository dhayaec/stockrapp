import React, { Component } from 'react'

interface NoLossBuyProps {
  name: string
}

type NoLossBuyPropsState = {
  range: number
  result: number
}

export default class NoLossBuy extends Component<
  NoLossBuyProps,
  NoLossBuyPropsState
> {
  state = {
    result: 0,
    range: 0,
  }

  onChange = (e: React.ChangeEvent<any>): void => {
    const range = Number(e.target.value)
    const result = range > 0 ? Number((range / 2.35).toFixed(2)) : 0
    this.setState({ range, result })
  }

  render() {
    const { name } = this.props
    const { range, result } = this.state
    return (
      <div className='my-2 text-center' data-testid='no-loss-buy'>
        <div className='my-1'>
          <h1>{name}</h1>
        </div>
        <div className='flex justify-center text-center'>
          <div className='w-1/2'>
            <input
              value={range || ''}
              type='number'
              name='range'
              id='range'
              onChange={this.onChange}
              placeholder='Range'
              className='w-full'
              pattern='\d*'
              data-testid='range'
            />
          </div>
          <div className='flex w-1/2 items-center justify-center border-2 border-dashed border-gray-300'>
            <p data-testid='result'>{result}</p>
          </div>
        </div>
      </div>
    )
  }
}
