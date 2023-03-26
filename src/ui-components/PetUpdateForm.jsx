/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Pet } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PetUpdateForm(props) {
  const {
    id: idProp,
    pet,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    petImage: "",
    petType: undefined,
    petAge: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [petImage, setPetImage] = React.useState(initialValues.petImage);
  const [petType, setPetType] = React.useState(initialValues.petType);
  const [petAge, setPetAge] = React.useState(initialValues.petAge);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = petRecord
      ? { ...initialValues, ...petRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setPetImage(cleanValues.petImage);
    setPetType(cleanValues.petType);
    setPetAge(cleanValues.petAge);
    setErrors({});
  };
  const [petRecord, setPetRecord] = React.useState(pet);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Pet, idProp) : pet;
      setPetRecord(record);
    };
    queryData();
  }, [idProp, pet]);
  React.useEffect(resetStateValues, [petRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    petImage: [{ type: "Required" }, { type: "URL" }],
    petType: [{ type: "Required" }],
    petAge: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description,
          petImage,
          petType,
          petAge,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Pet.copyOf(petRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PetUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              petImage,
              petType,
              petAge,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              petImage,
              petType,
              petAge,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Pet image"
        isRequired={true}
        isReadOnly={false}
        value={petImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              petImage: value,
              petType,
              petAge,
            };
            const result = onChange(modelFields);
            value = result?.petImage ?? value;
          }
          if (errors.petImage?.hasError) {
            runValidationTasks("petImage", value);
          }
          setPetImage(value);
        }}
        onBlur={() => runValidationTasks("petImage", petImage)}
        errorMessage={errors.petImage?.errorMessage}
        hasError={errors.petImage?.hasError}
        {...getOverrideProps(overrides, "petImage")}
      ></TextField>
      <SelectField
        label="Pet type"
        placeholder="Please select an option"
        isDisabled={false}
        value={petType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              petImage,
              petType: value,
              petAge,
            };
            const result = onChange(modelFields);
            value = result?.petType ?? value;
          }
          if (errors.petType?.hasError) {
            runValidationTasks("petType", value);
          }
          setPetType(value);
        }}
        onBlur={() => runValidationTasks("petType", petType)}
        errorMessage={errors.petType?.errorMessage}
        hasError={errors.petType?.hasError}
        {...getOverrideProps(overrides, "petType")}
      >
        <option
          children="Rabbit"
          value="RABBIT"
          {...getOverrideProps(overrides, "petTypeoption0")}
        ></option>
        <option
          children="Turtle"
          value="TURTLE"
          {...getOverrideProps(overrides, "petTypeoption1")}
        ></option>
        <option
          children="Fish"
          value="FISH"
          {...getOverrideProps(overrides, "petTypeoption2")}
        ></option>
        <option
          children="Rodent"
          value="RODENT"
          {...getOverrideProps(overrides, "petTypeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Pet age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={petAge}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              petImage,
              petType,
              petAge: value,
            };
            const result = onChange(modelFields);
            value = result?.petAge ?? value;
          }
          if (errors.petAge?.hasError) {
            runValidationTasks("petAge", value);
          }
          setPetAge(value);
        }}
        onBlur={() => runValidationTasks("petAge", petAge)}
        errorMessage={errors.petAge?.errorMessage}
        hasError={errors.petAge?.hasError}
        {...getOverrideProps(overrides, "petAge")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pet)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pet) || Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
