/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CatProps } from "./Cat";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatCollectionOverridesProps = {
    CatCollection?: PrimitiveOverrideProps<CollectionProps>;
    Cat?: CatProps;
} & EscapeHatchProps;
export declare type CatCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CatProps;
} & {
    overrides?: CatCollectionOverridesProps | undefined | null;
}>;
export default function CatCollection(props: CatCollectionProps): React.ReactElement;
