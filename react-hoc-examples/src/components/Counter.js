
import React from 'react';
import withCounter from '../basic-hoc/withCounter'

const Counter = ({ x }) => {
    return (
        <>{x} <hr /></>
    );
}

export default withCounter(Counter);