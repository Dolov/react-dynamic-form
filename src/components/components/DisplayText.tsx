import React from 'react'
import moment from 'moment'
import { DisplayTextProps } from '../interface'
import { isMainLess, handleLine } from '../utils'
import Control from './Control'
import ViewMap from './ViewMap'

const E = "-"
export default class DisplayText extends React.PureComponent<DisplayTextProps> {

  state = {

  }

  render() {
    const { value, compType } = this.props
    if (isMainLess(value)) return E
    if (compType === 'EMAIL') {
      return <a href={`mailto:${value}`}>{value}</a>
    }
    if (compType === 'URL') {
      return <a target="_blank" rel="noopener noreferrer" href={value}>{value}</a>
    } 
    if (compType === 'RATE' || compType === 'SWITCH' || compType === 'RANGE' ) {
      return <Control {...this.props} disabled />
    }
    if (compType === 'MAP') {
      return <ViewMap {...this.props} />
    }
    if (compType === 'CASCADER') {
      return <div>{value.join(" / ")}</div>
    }
    if (compType === 'TIMEPICKER') {
      return <div>{moment(value).format('HH:mm:ss')}</div>
    }
  
    if (Array.isArray(value)) {
      return <div>{value.join("、")}</div>
    }
    return <div className="display-text">{handleLine(`${value}`)}</div>
  }
}