import React, { Component } from 'react';
class ActivityNotes extends Component{
    render() {
        return (
             <div className="notes" onClick={this.props.deleteMethod}>
                 {this.props.text}
             </div>
        );
    }
}
export default ActivityNotes;