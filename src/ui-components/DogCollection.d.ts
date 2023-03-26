/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DogProps } from "./Dog";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogCollectionOverridesProps = {
    DogCollection?: PrimitiveOverrideProps<CollectionProps>;
    Dog?: DogProps;
} & EscapeHatchProps;
export declare type DogCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => DogProps;
} & {
    overrides?: DogCollectionOverridesProps | undefined | null;
}>;
export default function DogCollection(props: DogCollectionProps): React.ReactElement;
