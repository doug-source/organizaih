import { Dispatch, SetStateAction } from 'react';

export type ErrorsType = Record<string, string[]> | null;

export type ErrorsSetterType = Dispatch<SetStateAction<ErrorsType>> | null;
