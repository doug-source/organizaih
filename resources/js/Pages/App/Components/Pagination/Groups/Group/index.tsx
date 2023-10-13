import { Groups } from '@/Pages/App/Components/Pagination/Groups';
import { GroupBtn_ } from '@/Pages/App/Components/Pagination/Groups/Group/styling';
import { ComponentPropsWithoutRef } from 'react';

type GroupsProps = ComponentPropsWithoutRef<typeof Groups>;

type GroupProps = {
    num: GroupsProps['groups'][0];
    selected: GroupsProps['selected'];
    onChangeGroup?: GroupsProps['onChangeGroup'] & {};
};

export const Group = ({ num, selected, onChangeGroup }: GroupProps) => {
    return (
        <GroupBtn_
            $selected={selected === num}
            onClick={() => onChangeGroup && onChangeGroup(num)}
        >
            {num}
        </GroupBtn_>
    );
};
