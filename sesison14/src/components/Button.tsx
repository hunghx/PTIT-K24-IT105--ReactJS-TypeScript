import React, { Component, type MouseEventHandler } from 'react'
type PropsType = {
    id: string,
    className: string
    onClick: MouseEventHandler<HTMLButtonElement>
    children : any
}
export default class Button extends Component<PropsType> {
  render() {
    const {id, className, onClick, children} = this.props;
    return (
      <button className={className} id={id} onClick={onClick}>{children}</button>
    )
  }
}
