import { Group } from '@/Pages/App/Components/Pagination/Groups/Group';
import { GroupBar_ } from '@/Pages/App/Components/Pagination/Groups/styling';

type GroupsProps = {
    selected: number;
    groups: number[];
    onChangeGroup: (value: number) => void;
};

export const Groups = ({
    selected,
    groups = [],
    onChangeGroup,
}: GroupsProps) => {
    return (
        <GroupBar_>
            {groups.map((num) => (
                <Group
                    key={num}
                    num={num}
                    selected={selected}
                    onChangeGroup={() => onChangeGroup(num)}
                />
            ))}
        </GroupBar_>
    );
};
