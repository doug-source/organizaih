import { backBtn } from './backBtn';
import { body } from './body';
import { config } from './config';
import { confirmDialog } from './confirmDialog';
import { customer } from './customer';
import { datepicker } from './datepicker';
import { defaultForm } from './defaultForm';
import { defineItem } from './defineItem';
import { definePhoto } from './definePhoto';
import { dialog } from './dialog';
import { dropdown } from './dropdown';
import { formItem } from './formItem';
import { gateSwitcher } from './gateSwitcher';
import { graph } from './graph';
import { header } from './header';
import { html } from './html';
import { inputForm } from './inputForm';
import { inventory } from './inventory';
import { itemEditor } from './itemEditor';
import { itemSaver } from './itemSaver';
import { list } from './list';
import { loading } from './loading';
import { main } from './main';
import { pagination } from './pagination';
import { product } from './product';
import { productCategory } from './productCategory';
import { profilePhoto } from './profilePhoto';
import { radioToggle } from './radioToggle';
import { sale } from './sale';
import { selectProduct } from './selectProduct';
import { selectorsBox } from './selectorsBox';
import { submitForm } from './submitForm';
import { tools } from './tools';

const widthLarge = '1024px';
const widthMedium = '512px';

export const measures = {
    backBtn,
    body,
    config,
    confirmDialog,
    customer,
    datepicker,
    defaultForm,
    defineItem,
    definePhoto,
    dialog,
    dropdown,
    formItem,
    gateSwitcher,
    graph,
    header,
    html,
    inputForm,
    inventory,
    itemEditor,
    itemSaver,
    list,
    loading,
    main: main(header, body),
    pagination,
    product,
    productCategory,
    profilePhoto,
    radioToggle,
    sale,
    selectorsBox,
    selectProduct,
    submitForm,
    tools,

    wideScreen: `screen and (min-width: ${widthLarge})`,
    mediumScreen: `screen and (min-width: ${widthMedium})`,
    mobileBottomDifference: 56,
};
