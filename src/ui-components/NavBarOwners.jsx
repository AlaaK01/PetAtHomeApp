/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Owner } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Badge, Flex, Text } from "@aws-amplify/ui-react";
export default function NavBarOwners(props) {
  const { owner, overrides, ...rest } = props;
  const badgeOnClick = useDataStoreCreateAction({
    fields: { fullName: "fullName", email: "email", ownerImage: "ownerImage" },
    model: Owner,
    schema: schema,
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarOwners")}
      {...rest}
    >
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="600"
          color="white"
          textTransform="capitalize"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Owners"
          {...getOverrideProps(overrides, "Owners")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="1024px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 14px"
        {...getOverrideProps(overrides, "Frame 321")}
      ></Flex>
      <Badge
        width="160px"
        height="33px"
        shrink="0"
        size="big"
        variation="default"
        children="Create New Owner !"
        onClick={() => {
          badgeOnClick();
        }}
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
    </Flex>
  );
}
