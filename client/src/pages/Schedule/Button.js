import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.userId ? (
          <div className="btn btn-primary sign-up-button" data-toggle="modal" data-target="#loginmodal" id={this.props.id}>Sign-Up</div>
        ) : (
          this.props.isSignedUp ? (
            <div className="btn btn-warning sign-up-button" data-toggle="modal" data-target="#cancelmodal" id={this.props.id} onClick={this.props.onClickCancel.bind(this, this.props.id)}>Cancel</div>
            ) : (
            <div className="btn btn-primary sign-up-button" data-toggle="modal" data-target="#signupmodal" id={this.props.id} onClick={this.props.onClickSignUp.bind(this, this.props.id)}>Sign-Up</div>
            )
        )
        }
      </React.Fragment>
    );
  }
}

export default Button;