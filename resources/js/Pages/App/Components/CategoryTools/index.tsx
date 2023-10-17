import { CategoryBtn } from '@/Pages/App/Components/CategoryBtn';
import {
    CategoryTools_,
    InputRequest_,
} from '@/Pages/App/Components/CategoryTools/styling';
import { columnSizeDB } from '@/Pages/App/settings';
import { ComponentPropsWithoutRef } from 'react';

type ToolsProps = {
    showCategories: ComponentPropsWithoutRef<typeof CategoryBtn>['show'];
    onChange?: (payload: string) => void;
};

export const CategoryTools = ({
    showCategories = true,
    onChange = (f) => f,
}: ToolsProps) => (
    <CategoryTools_>
        <InputRequest_
            maxLength={columnSizeDB.productCategory}
            placeholderKey='category'
            onClick={(value: string) => onChange(value)}
        />
        <CategoryBtn show={showCategories} />
    </CategoryTools_>
);
