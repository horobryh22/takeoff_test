import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { NavLink } from 'react-router-dom';

import classes from './Rows.module.css';
import { RowsType } from './types';

import { ActionImages } from 'components';
import { COLUMNS } from 'constant';
import { ReturnComponentType } from 'types';

export const Rows = ({ users }: RowsType): ReturnComponentType => {
    return (
        <>
            {users.map(user => {
                return (
                    <TableRow key={user.id} hover role="checkbox" tabIndex={-1}>
                        {COLUMNS.map(column => {
                            let value;

                            if (column.name !== 'actions') {
                                value = user[column.name];
                            }

                            return (
                                <TableCell key={column.name} align="center">
                                    {value}
                                    {column.name === 'actions' && (
                                        <NavLink to="" className={classes.actionsWrapper}>
                                            <ActionImages user={user} />
                                        </NavLink>
                                    )}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </>
    );
};
