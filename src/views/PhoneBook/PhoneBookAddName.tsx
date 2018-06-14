import * as React from "react";
import '../../styles/Home.scss';

class PhoneBookAddName extends React.Component {
    public render() {
        return (
          <div className="home">
            <div>
              <input type="text" name="name" id="name"/>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>
              <button>Save</button>
            </div>
          </div>
        )
    }
}

export default PhoneBookAddName;
