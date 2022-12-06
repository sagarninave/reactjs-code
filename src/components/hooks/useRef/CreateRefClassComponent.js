import React from 'react';

export default class CreateRefClassComponent extends React.Component {

  constructor() {
    super()
    this.state = { 
      promoCode: 124647
    }
    this.userRef = React.createRef();
  }

  Value() {
    /* it gives complete html element */
    console.log(this.userRef.current)

    /* set value to the ref */
    this.userRef.current.value = this.state.promoCode;

    /* set focus to the html element refered by useRef */
    this.userRef.current.focus();
  }

  render() {
    return (
      <div>
        <strong className="heading"> Use Ref </strong> <br /><br />
        <input ref={this.userRef} type="text" placeholder="Promo Code" autoFocus /> <br />
        <span> Promo Code : {this.state.promoCode}</span> <br />
        <button onClick={() => this.Value()}> Apply Promo Code </button>
      </div>
    )
  }
}