/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BirdFormProps } from "./BirdForm";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BirdsCollectionOverridesProps = {
    BirdsCollection?: PrimitiveOverrideProps<CollectionProps>;
    BirdForm?: BirdFormProps;
} & EscapeHatchProps;
export declare type BirdsCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => BirdFormProps;
} & {
    overrides?: BirdsCollectionOverridesProps | undefined | null;
}>;
export default function BirdsCollection(props: BirdsCollectionProps): React.ReactElement;
