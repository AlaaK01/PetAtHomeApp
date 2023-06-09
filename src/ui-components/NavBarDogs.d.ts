/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Dog } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarDogsOverridesProps = {
    NavBarDogs?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Dogs?: PrimitiveOverrideProps<TextProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type NavBarDogsProps = React.PropsWithChildren<Partial<FlexProps> & {
    dog?: Dog;
} & {
    overrides?: NavBarDogsOverridesProps | undefined | null;
}>;
export default function NavBarDogs(props: NavBarDogsProps): React.ReactElement;
