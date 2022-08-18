import {FC} from "react";
import style from './Promocodes.module.scss';
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import PromocodesItem from "./PromocodesItem/PromocodesItem";
import Account from "@/components/Account/Account";
import {useAppSelector} from "@/hooks/redux";
import AccountItems from "@/components/Account/AccountItems/AccountItems";
import AccountTabs from "@/components/Account/AccountTabs/AccountTabs";


export interface ITabItem {
    title: string,
    content: any
}

const Promocodes: FC = () => {
    const {promocodes} = useAppSelector(state => state.promocodesReducer);

    const tabItems: ITabItem[] = [
        {
            title: 'Активные промокоды',
            content: <AccountItems>
                {promocodes.filter(promocode => promocode.read === false).map(promocode => <PromocodesItem key={promocode.id} promocode={promocode} />)}
            </AccountItems>
        },
        {
            title: 'Использованные промокоды',
            content: <AccountItems>
                {promocodes.filter(promocode => promocode.read === true).map(promocode => <PromocodesItem key={promocode.id} promocode={promocode} />)}
            </AccountItems>
        }
    ];

    return (
        <Account title="Мои промокоды">
            <div className={style.coupons}>
                <ButtonGreen isFloating type="button">Как использовать промокоды?</ButtonGreen>
                <AccountTabs items={tabItems} hintTitle="Как использовать промокоды?" />
            </div>
        </Account>
    );
}

export default Promocodes;