import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="age" source="age" />
        <TextField label="balance" source="balance" />
        <BooleanField label="churn" source="churn" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creditScore" source="creditScore" />
        <TextField label="estimatedSalary" source="estimatedSalary" />
        <TextField label="geography" source="geography" />
        <BooleanField label="hasCreditCard" source="hasCreditCard" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActiveMember" source="isActiveMember" />
        <TextField label="numberOfProducts" source="numberOfProducts" />
        <TextField label="surname" source="surname" />
        <TextField label="tenure" source="tenure" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
