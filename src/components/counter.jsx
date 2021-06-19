import React, { Component } from 'react';
class Counter extends Component {
    state = { // Is the data/properties that any component needs
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
        tags: [], //property
    };
    styles={
        fontSize:50,
        fontWeight: 'bold',
    };

    renderTags(){
        if(this.state.tags.length ===0 ) return <p>There are no tags!</p>; 
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    render() { 
        //let classes = "badge m-2 badge-primary";
        //let classes = this.getBadgeClasses();

        return (
            
        // <React.Fragment>
        // <span style={this.styles} /*or style={{fontSize:30}}*/ className="badge badge-primary m-2">{this.formatCount()}</span>
        <div>
            {/* <img src={this.state.imageUrl} alt=""/> */}
            {/* <span className={classes}>{this.formatCount()}</span> */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            {/* In react in jsx there is no concept of loops bcoz jsx is not the really template engine. It's just a simple syntax that gets complile into react element*/}
            {/* <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul> */}
            {this.state.tags.length === 0 && "Please Create new tag!"}
            {this.renderTags()}
        </div>
        // </React.Fragment>  
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        const x = <h1>Zero</h1>;
        // return this.state.count === 0 ? 'Zero': this.state.count;
        // return count === 0 ? x: count;
        return count === 0 ? "Zero": count;
    }

}
 
export default Counter;