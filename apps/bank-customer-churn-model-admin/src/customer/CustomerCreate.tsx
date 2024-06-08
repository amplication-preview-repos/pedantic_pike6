import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <NumberInput label="balance" source="balance" />
        <BooleanInput label="churn" source="churn" />
        <NumberInput step={1} label="creditScore" source="creditScore" />
        <NumberInput label="estimatedSalary" source="estimatedSalary" />
        <TextInput label="geography" source="geography" />
        <BooleanInput label="hasCreditCard" source="hasCreditCard" />
        <BooleanInput label="isActiveMember" source="isActiveMember" />
        <NumberInput
          step={1}
          label="numberOfProducts"
          source="numberOfProducts"
        />
        <TextInput label="surname" source="surname" />
        <NumberInput step={1} label="tenure" source="tenure" />
      </SimpleForm>
    </Create>
  );
};
