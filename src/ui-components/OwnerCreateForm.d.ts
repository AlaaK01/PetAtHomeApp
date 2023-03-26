/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OwnerCreateFormInputValues = {
    fullName?: string;
    email?: string;
    ownerImage?: string;
};
export declare type OwnerCreateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    ownerImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OwnerCreateFormOverridesProps = {
    OwnerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    ownerImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OwnerCreateFormProps = React.PropsWithChildren<{
    overrides?: OwnerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OwnerCreateFormInputValues) => OwnerCreateFormInputValues;
    onSuccess?: (fields: OwnerCreateFormInputValues) => void;
    onError?: (fields: OwnerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OwnerCreateFormInputValues) => OwnerCreateFormInputValues;
    onValidate?: OwnerCreateFormValidationValues;
} & React.CSSProperties>;
export default function OwnerCreateForm(props: OwnerCreateFormProps): React.ReactElement;
