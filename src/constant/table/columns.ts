interface Column {
    name: 'firstName' | 'lastName' | 'email' | 'phone' | 'actions';
    label: string;
    minWidth?: number;
}

export const COLUMNS: Column[] = [
    { name: 'firstName', label: 'First name', minWidth: 100 },
    { name: 'lastName', label: 'Last name', minWidth: 100 },
    { name: 'email', label: 'Email', minWidth: 100 },
    { name: 'phone', label: 'Phone', minWidth: 100 },
    { name: 'actions', label: 'Actions', minWidth: 100 },
];
