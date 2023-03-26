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
export declare type BirdCreateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    age?: number;
};
export declare type BirdCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BirdCreateFormOverridesProps = {
    BirdCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BirdCreateFormProps = React.PropsWithChildren<{
    overrides?: BirdCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BirdCreateFormInputValues) => BirdCreateFormInputValues;
    onSuccess?: (fields: BirdCreateFormInputValues) => void;
    onError?: (fields: BirdCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BirdCreateFormInputValues) => BirdCreateFormInputValues;
    onValidate?: BirdCreateFormValidationValues;
} & React.CSSProperties>;
export default function BirdCreateForm(props: BirdCreateFormProps): React.ReactElement;
