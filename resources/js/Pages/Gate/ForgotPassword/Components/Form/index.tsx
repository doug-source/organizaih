import { Button } from '@/Pages/Gate/Components/Button';
import { Row } from '@/Pages/Gate/Components/Row';
import { TextInput } from '@/Pages/Gate/Components/TextInput';
import { useTokenRequest, useTranslate } from '@/libraries/hooks';

export const Form = () => {
    const translate = useTranslate();
    const tokenRequest = useTokenRequest();
    return (
        <form method='POST'>
            <Row>
                <TextInput
                    id='name'
                    type='email'
                    name='email'
                    placeholder={translate('insert-email', true)}
                    isFocused={true}
                    autoComplete='no'
                />
            </Row>
            <input
                type='hidden'
                name='_token'
                value={tokenRequest}
            />
            <Button
                type='submit'
                strBtnText={translate('continue', true)}
            />
        </form>
    );
};
