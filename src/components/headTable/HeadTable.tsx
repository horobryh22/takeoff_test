import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { NavLink } from 'react-router-dom';

import classes from './HeadTable.module.css';

import { ActionImages } from 'components';
import { COLUMNS } from 'constant';
import { useAppSelector } from 'hooks';
import { ReturnComponentType } from 'types';

export const HeadTable = (): ReturnComponentType => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const users = useAppSelector(state => state.users.users);

    const handleChangePage = (event: unknown, newPage: number): void => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ height: 460 }}>
                <Table aria-label="sticky table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            {COLUMNS.map(column => (
                                <TableCell
                                    key={column.name}
                                    align="center"
                                    style={{
                                        minWidth: column.minWidth,
                                        fontWeight: '600',
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(user => {
                                return (
                                    <TableRow
                                        key={user.id}
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                    >
                                        {COLUMNS.map(column => {
                                            let value;

                                            if (column.name !== 'actions') {
                                                value = user[column.name];
                                            }

                                            return (
                                                <TableCell
                                                    key={column.name}
                                                    align="center"
                                                >
                                                    {value}
                                                    {column.name === 'actions' && (
                                                        <NavLink
                                                            to=""
                                                            className={
                                                                classes.actionsWrapper
                                                            }
                                                        >
                                                            <ActionImages user={user} />
                                                        </NavLink>
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};
