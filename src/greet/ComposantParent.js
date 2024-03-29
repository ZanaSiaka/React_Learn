import React, { Component } from 'react';
import ComposantEnfant from './ComposantEnfant';

class ComposantParent extends Component {

    

    constructor(props) {

        var zana = 'Okak'
        console.log(zana)

        super(props);

        this.state = {
            parentName: 'parent'
        };

        

        this.saluerParent = this.saluerParent.bind(this);
    }

    saluerParent() {
        alert(`Bonjour ${this.state.parentName}`);
    }

    render() {
        return (
            <div>
                <ComposantEnfant saluerHand={this.saluerParent} />
            </div>
        );
    }
}

export default ComposantParent