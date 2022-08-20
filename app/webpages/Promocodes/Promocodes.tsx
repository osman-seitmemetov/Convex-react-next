import {FC, ReactNode} from "react";
import style from './Promocodes.module.scss';
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import PromocodesItem from "./PromocodesItem/PromocodesItem";
import Account from "@/components/Account/Account";
import AccountItems from "@/components/Account/AccountItems/AccountItems";
import AccountTabs from "@/components/Account/AccountTabs/AccountTabs";
import {usePromocodes} from "@/webpages/Promocodes/usePromocodes";


export interface ITabItem {
    title: string,
    content: ReactNode
}

const Promocodes: FC = () => {
    const {promocodes, isLoading} = usePromocodes();
    const activePromocodesCondition = promocodes && promocodes?.data.filter(promocode => promocode.read === false).length > 0;
    const usedPromocodesCondition = promocodes && promocodes?.data.filter(promocode => promocode.read === true).length > 0

    const tabItems: ITabItem[] = [
        {
            title: 'Активные промокоды',
            content: activePromocodesCondition
                ? <AccountItems>
                    {promocodes?.data.filter(promocode => promocode.read === false).map(promocode => <PromocodesItem
                        key={promocode.id} promocode={promocode}/>)}
                </AccountItems>
                : <div>Нет промокодов</div>
        },
        {
            title: 'Использованные промокоды',
            content: usedPromocodesCondition
                ? <AccountItems>
                    {promocodes?.data.filter(promocode => promocode.read === true).map(promocode => <PromocodesItem
                        key={promocode.id} promocode={promocode}/>)}
                </AccountItems>
                : <div>Нет промокодов</div>
        }
    ];

    return (
        <Account title="Мои промокоды">
            <div className={style.coupons}>
                <ButtonGreen isFloating type="button">Как использовать промокоды?</ButtonGreen>
                <AccountTabs items={tabItems} hintTitle="Как использовать промокоды?"/>
            </div>
        </Account>
    );
}

export default Promocodes;