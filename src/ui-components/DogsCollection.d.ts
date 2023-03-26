/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DogFormProps } from "./DogForm";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogsCollectionOverridesProps = {
    DogsCollection?: PrimitiveOverrideProps<CollectionProps>;
    DogForm?: DogFormProps;
} & EscapeHatchProps;
export declare type DogsCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => DogFormProps;
} & {
    overrides?: DogsCollectionOverridesProps | undefined | null;
}>;
export default function DogsCollection(props: DogsCollectionProps): React.ReactElement;
