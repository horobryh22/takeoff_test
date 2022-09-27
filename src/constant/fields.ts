import { EMAIL_RULES } from 'constant/formRules';

type FieldType = {
    name: 'firstName' | 'lastName' | 'email' | 'phone';
    rules: any;
    label: string;
};

export const FIELDS: FieldType[] = [
    {
        name: 'firstName',
        rules: { required: 'First name is required' },
        label: 'First name',
    },
    {
        name: 'lastName',
        rules: { required: 'Last name is required' },
        label: 'Last name',
    },
    {
        name: 'email',
        rules: EMAIL_RULES,
        label: 'Email',
    },
    {
        name: 'phone',
        rules: { required: 'Phone is required' },
        label: 'Phone',
    },
];
