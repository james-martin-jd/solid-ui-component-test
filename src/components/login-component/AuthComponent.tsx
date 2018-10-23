import auth from 'solid-auth-client';
import {Component, Prop, State} from "@stencil/core";

/** Button that lets the user log in with Solid. */
@Component({
  tag: 'solid-auth',
  styleUrl: 'login-component.css',
  shadow: true
})
export class LoginButton {
  @Prop() popup: string;
  @State() webId: string;

  componentWillLoad() {
    auth.trackSession(session => {
      if(session) {
        this.webId = session.webId;
      }
    })
  }

  render() {
    return (
      <div>
        {this.webId && this.webId !== ''
          ? <solid-login-button popup={this.popup}></solid-login-button>
          : <solid-logout-button></solid-logout-button>
        }
      </div>
    );
  }
}
