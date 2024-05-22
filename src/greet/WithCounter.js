import React from 'react'

const withCounter = (WrappedComponent, IncrementNumber) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props);
        
            this.state = {
              count : 0,
            };
          }
        
          handClick = () => {
            this.setState(prevState => {
               return { count: prevState.count + IncrementNumber}
            });
          };

         render (){
            console.log(this.props.name)
            return <WrappedComponent count={this.state.count} incrementCount={this.handClick} {...this.props} />
         }
    }
    return WithCounter
}

export default withCounter