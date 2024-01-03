import React, { Component } from 'react'

interface TargetProps {
  name: string
}

export default class Target extends Component<TargetProps, any> {
  state = {
    price: 0,
    sl: 0,
    target: 0,
    tp: 1,
    sp: 0.5,
  }

  onChange = (e: React.ChangeEvent<any>): void => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.calculate()
    })
  }

  calculate = (): void => {
    const { price, tp, sp } = this.state
    const target = Number(
      Number(price) + this.getPercentage(tp, price)
    ).toFixed(2)
    const sl = Number(Number(price) - this.getPercentage(sp, price)).toFixed(2)
    this.setState({ sl, target })
  }

  getPercentage = (percentage: number, price: number): number => {
    return (+percentage / 100) * +price
  }

  render() {
    const { name } = this.props
    const { price, sl, target, tp, sp } = this.state

    return (
      <div className='my-2 text-center' data-testid='target'>
        <div className='my-1'>
          <h1>{name}</h1>
        </div>
        <div className='flex text-center'>
          <div className='w-6/12'>
            <input
              value={price || ''}
              type='number'
              name='price'
              id='price'
              onChange={this.onChange}
              placeholder='Price'
              className='w-full'
              pattern='\d*'
              data-testid='price'
            />
          </div>
          <div className='w-3/12'>
            <input
              value={tp}
              type='number'
              name='tp'
              id='tp'
              onChange={this.onChange}
              placeholder='Target Price'
              className='w-full'
              pattern='\d*'
              data-testid='tp'
            />
          </div>
          <div className='w-3/12'>
            <input
              value={sp}
              type='number'
              name='sp'
              id='sp'
              onChange={this.onChange}
              placeholder='Stop Loss'
              className='w-full'
              pattern='\d*'
              data-testid='sp'
            />
          </div>
        </div>
        <div className='flex text-center'>
          <div className='w-1/2 text-green'>
            <p>Target</p>
            <p data-testid='target-price' className='text-xl'>
              {target}
            </p>
          </div>
          <div className='w-1/2 text-red'>
            <p>Stop Loss</p>
            <p data-testid='sl-price' className='text-xl'>
              {sl}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
