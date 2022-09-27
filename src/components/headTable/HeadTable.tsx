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

import { ActionImages } from 'components/actionImages/ActionImages';
import { ReturnComponentType } from 'types';

interface Column {
    name: 'id' | 'firstname' | 'lastname' | 'email' | 'phone' | 'actions';
    label: string;
    minWidth?: number;
}

const columns: readonly Column[] = [
    { name: 'id', label: 'Id' },
    { name: 'firstname', label: 'First name', minWidth: 100 },
    { name: 'lastname', label: 'Last name', minWidth: 100 },
    { name: 'email', label: 'Email', minWidth: 100 },
    { name: 'phone', label: 'Phone', minWidth: 100 },
    { name: 'actions', label: 'Actions', minWidth: 100 },
];

interface Data {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

function createData(
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
): Data {
    return { id, firstname, lastname, email, phone };
}

const rows = [
    createData('1', 'Ilya', 'Khorobrykh', 'hvi17@yandex.ru', '8-999-457-44-97'),
    createData('1', 'Ilya', 'Khorobrykh', 'hvi17@yandex.ru', '8-999-457-44-97'),
    createData('1', 'Ilya', 'Khorobrykh', 'hvi17@yandex.ru', '8-999-457-44-97'),
    createData('1', 'Ilya', 'Khorobrykh', 'hvi17@yandex.ru', '8-999-457-44-97'),
    createData('1', 'Ilya', 'Khorobrykh', 'hvi17@yandex.ru', '8-999-457-44-97'),
    createData('1', 'Ilya', 'Khorobrykh', 'hvi17@yandex.ru', '8-999-457-44-97'),
    createData('1', 'Ilya', 'Khorobrykh', 'hvi17@yandex.ru', '8-999-457-44-97'),
    createData('1', 'Ilya', 'Khorobrykh', 'hvi17@yandex.ru', '8-999-457-44-97'),
];

export const HeadTable = (): ReturnComponentType => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table aria-label="sticky table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
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
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(row => {
                                return (
                                    <TableRow
                                        key={row.id}
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                    >
                                        {columns.map(column => {
                                            let value;

                                            if (column.name !== 'actions') {
                                                value = row[column.name];
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
                                                            <ActionImages />
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
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};
