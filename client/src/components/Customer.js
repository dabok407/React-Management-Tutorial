import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import common from './common';


class Customer extends React.Component{ 
    render(){

        let id = common.bufferConvert(this.props,"id");
        let name = common.bufferConvert(this.props,"name");
        let birthday = common.bufferConvert(this.props,"birthday");
        let gender = common.bufferConvert(this.props,"gender");
        let job = common.bufferConvert(this.props,"job");
        let image = common.bufferConvert(this.props,"image");

        return(
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell><img src={image} alt="profile" /></TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{birthday}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell>{job}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;