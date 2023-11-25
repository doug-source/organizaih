import { DefaultTheme } from 'styled-components';
import { anonymous } from './anonymous';
import { backBtn } from './backBtn';
import { body } from './body';
import { boundaryDateInputs } from './boundaryDateInputs';
import { config } from './config';
import { confirmDialog } from './confirmDialog';
import { customer } from './customer';
import { datepicker } from './datepicker';
import { defaultForm } from './defaultForm';
import { defineItem } from './defineItem';
import { definePhoto } from './definePhoto';
import { details } from './details';
import { dialog } from './dialog';
import { dropdown } from './dropdown';
import { entryActionsItem } from './entryActionsItem';
import { entryDataItem } from './entryDataItem';
import { entryItem } from './entryItem';
import { entryList } from './entryList';
import { formItem } from './formItem';
import { gateSwitcher } from './gateSwitcher';
import { graph } from './graph';
import { header } from './header';
import { html } from './html';
import { inputForm } from './inputForm';
import { inputRange } from './inputRange';
import { inventory } from './inventory';
import { itemEditor } from './itemEditor';
import { itemSaver } from './itemSaver';
import { list } from './list';
import { loading } from './loading';
import { main } from './main';
import { pagination } from './pagination';
import { photoFile } from './photoFile';
import { previewPhotoInput } from './previewPhotoInput';
import { product } from './product';
import { productCategory } from './productCategory';
import { profilePhoto } from './profilePhoto';
import { radioToggle } from './radioToggle';
import { registerRequest } from './registerRequest';
import { requestBtn } from './requestBtn';
import { sale } from './sale';
import { selectCustomer } from './selectCustomer';
import { selectProduct } from './selectProduct';
import { selectorsBox } from './selectorsBox';
import { submitBtn } from './submitBtn';
import { tools } from './tools';
import { user } from './user';

const widthLarge = '1024px';
const widthMedium = '512px';

export const measures: DefaultTheme['measures'] = {
    anonymous,
    backBtn,
    body,
    boundaryDateInputs,
    config,
    confirmDialog,
    customer,
    datepicker,
    defaultForm,
    defineItem,
    definePhoto,
    details,
    dialog,
    dropdown,
    entryActionsItem,
    entryDataItem,
    entryList,
    entryItem,
    formItem,
    gateSwitcher,
    graph,
    header,
    html,
    inputForm,
    inputRange,
    inventory,
    itemEditor,
    itemSaver,
    list,
    loading,
    main: main(header, body),
    pagination,
    photoFile,
    previewPhotoInput,
    product,
    productCategory,
    profilePhoto,
    radioToggle,
    requestBtn,
    registerRequest,
    sale,
    selectorsBox,
    selectProduct,
    selectCustomer,
    submitBtn,
    tools,
    user,

    wideScreen: `screen and (min-width: ${widthLarge})`,
    mediumScreen: `screen and (min-width: ${widthMedium})`,
    mobileBottomDifference: 56,
};
