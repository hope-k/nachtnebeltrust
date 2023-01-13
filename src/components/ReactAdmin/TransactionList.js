import { Datagrid, DateField, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const TransactionList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="transactionType" />
            <TextField source="payeeAccountNumber" />
            <TextField source="payeeRoutingNumber" />
            <TextField source="memo"/>
            <TextField source="status" />
            <NumberField source="amount" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <DateField source="__v" />
        </Datagrid>
    </List>
);