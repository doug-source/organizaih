import { InputForm_ } from '@/Pages/App/Components/InputForm/styling';
import { ComponentPropsWithoutRef } from 'react';

type InputFormProps = ComponentPropsWithoutRef<typeof InputForm_>;

export const InputForm = (props: InputFormProps) => <InputForm_ {...props} />;

export * from './styling';
