// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PetType = {
  "RABBIT": "RABBIT",
  "TURTLE": "TURTLE",
  "FISH": "FISH",
  "RODENT": "RODENT"
};

const { Bird, Dog, Cat, Owner, Pet, Address } = initSchema(schema);

export {
  Bird,
  Dog,
  Cat,
  Owner,
  Pet,
  PetType,
  Address
};