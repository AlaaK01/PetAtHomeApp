import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum PetType {
  RABBIT = "RABBIT",
  TURTLE = "TURTLE",
  FISH = "FISH",
  RODENT = "RODENT"
}

type EagerAddress = {
  readonly city?: string | null;
  readonly street?: string | null;
  readonly zip?: string | null;
}

type LazyAddress = {
  readonly city?: string | null;
  readonly street?: string | null;
  readonly zip?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type EagerBird = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bird, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image: string;
  readonly age?: number | null;
  readonly Owner?: Owner | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly birdOwnerId?: string | null;
}

type LazyBird = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bird, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image: string;
  readonly age?: number | null;
  readonly Owner: AsyncItem<Owner | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly birdOwnerId?: string | null;
}

export declare type Bird = LazyLoading extends LazyLoadingDisabled ? EagerBird : LazyBird

export declare const Bird: (new (init: ModelInit<Bird>) => Bird) & {
  copyOf(source: Bird, mutator: (draft: MutableModel<Bird>) => MutableModel<Bird> | void): Bird;
}

type EagerDog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image: string;
  readonly age?: number | null;
  readonly Owner?: Owner | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dogOwnerId?: string | null;
}

type LazyDog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image: string;
  readonly age?: number | null;
  readonly Owner: AsyncItem<Owner | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dogOwnerId?: string | null;
}

export declare type Dog = LazyLoading extends LazyLoadingDisabled ? EagerDog : LazyDog

export declare const Dog: (new (init: ModelInit<Dog>) => Dog) & {
  copyOf(source: Dog, mutator: (draft: MutableModel<Dog>) => MutableModel<Dog> | void): Dog;
}

type EagerCat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image: string;
  readonly age?: number | null;
  readonly Owner?: Owner | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly catOwnerId?: string | null;
}

type LazyCat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image: string;
  readonly age?: number | null;
  readonly Owner: AsyncItem<Owner | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly catOwnerId?: string | null;
}

export declare type Cat = LazyLoading extends LazyLoadingDisabled ? EagerCat : LazyCat

export declare const Cat: (new (init: ModelInit<Cat>) => Cat) & {
  copyOf(source: Cat, mutator: (draft: MutableModel<Cat>) => MutableModel<Cat> | void): Cat;
}

type EagerOwner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Owner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName: string;
  readonly email: string;
  readonly ownerImage?: string | null;
  readonly address?: Address | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOwner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Owner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName: string;
  readonly email: string;
  readonly ownerImage?: string | null;
  readonly address?: Address | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Owner = LazyLoading extends LazyLoadingDisabled ? EagerOwner : LazyOwner

export declare const Owner: (new (init: ModelInit<Owner>) => Owner) & {
  copyOf(source: Owner, mutator: (draft: MutableModel<Owner>) => MutableModel<Owner> | void): Owner;
}

type EagerPet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly petImage: string;
  readonly petType: PetType | keyof typeof PetType;
  readonly petAge?: number | null;
  readonly Owner?: Owner | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly petOwnerId?: string | null;
}

type LazyPet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly petImage: string;
  readonly petType: PetType | keyof typeof PetType;
  readonly petAge?: number | null;
  readonly Owner: AsyncItem<Owner | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly petOwnerId?: string | null;
}

export declare type Pet = LazyLoading extends LazyLoadingDisabled ? EagerPet : LazyPet

export declare const Pet: (new (init: ModelInit<Pet>) => Pet) & {
  copyOf(source: Pet, mutator: (draft: MutableModel<Pet>) => MutableModel<Pet> | void): Pet;
}