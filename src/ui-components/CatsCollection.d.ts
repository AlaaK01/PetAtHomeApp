/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CatFormProps } from "./CatForm";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatsCollectionOverridesProps = {
    CatsCollection?: PrimitiveOverrideProps<CollectionProps>;
    CatForm?: CatFormProps;
} & EscapeHatchProps;
export declare type CatsCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CatFormProps;
} & {
    overrides?: CatsCollectionOverridesProps | undefined | null;
}>;
export default function CatsCollection(props: CatsCollectionProps): React.ReactElement;
