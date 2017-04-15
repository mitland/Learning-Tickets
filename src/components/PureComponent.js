import React, { PropTypes } from 'react';
import shallowEqual from 'react-pure-render/shallowEqual';

const PureComponent = (WrappedComponent, selectedProps = 'all', selectedState = 'all') => {
    return class extends React.Component {
        shallowCheck(oldData, newData) {
            return !shallowEqual(oldData, newData);
        }
        shallowCheckMultiple(selectedData, oldData, newData) {
            return !selectedData
                        .map(selected => {
                            return this.shallowCheck(oldData[selected], newData[selected]);
                        }, this)
                        .includes(true);
        }
        shouldComponentUpdate(nextProps, nextState) {
            if(
                (selectedProps === 'all' && this.shallowCheck(this.props, nextProps))
                || (selectedState === 'all' && this.shallowCheck(this.state, nextState))
            ){
                return true;
            }else if(selectedProps === 'all' || selectedState === 'all'){
                return false;
            }

            if(selectedProps === false || selectedState === false){
                return false;
            }
            
            if(selectedProps.constructor === Array && this.shallowCheckMultiple(selectedProps, this.props, nextProps)){
                return false;
            }

            if(selectedState.constructor === Array && this.shallowCheckMultiple(selectedProps, this.state, nextState)){
                return false;
            }

            return true;

        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default PureComponent;
