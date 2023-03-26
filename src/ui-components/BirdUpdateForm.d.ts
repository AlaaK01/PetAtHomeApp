/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Bird } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BirdUpdateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    age?: number;
};
export declare type BirdUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BirdUpdateFormOverridesProps = {
    BirdUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BirdUpdateFormProps = React.PropsWithChildren<{
    overrides?: BirdUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bird?: Bird;
    onSubmit?: (fields: BirdUpdateFormInputValues) => BirdUpdateFormInputValues;
    onSuccess?: (fields: BirdUpdateFormInputValues) => void;
    onError?: (fields: BirdUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BirdUpdateFormInputValues) => BirdUpdateFormInputValues;
    onValidate?: BirdUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BirdUpdateForm(props: BirdUpdateFormProps): React.ReactElement;
