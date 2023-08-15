import { styled } from 'styled-components';
import { MainPageContainer } from './MainPage';
import { SmallBanner } from '../components/banners/SmallBanner';
import smallBanner_truck from '../assets/images/banner/smallBanner_truck.png'
import { Footer } from '../components/footers/Footer';

export const DongeuiEndPPageContainer = styled(MainPageContainer)`
`

const DongeuiEndPPage = () => {
    return (
        <DongeuiEndPPageContainer>
            <SmallBanner title='동의앤피용달' imgUrl={`${smallBanner_truck}`}/>
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </DongeuiEndPPageContainer>
    );
};

export default DongeuiEndPPage;