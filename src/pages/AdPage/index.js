import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PageArea, Fake } from './styled.js';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';
const AdPage = () => {

    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState([]);

    const formatDate = (date) => {
        const cDate = new Date(date);

        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    useEffect(() => {
        const getAd = async () => {
            const json = await api.getAd(id, true);
            setLoading(false);
            setAdInfo(json);
        }
        getAd(id);
    }, [api]);

    //todo fakeloading
    return (
        <PageContainer>
            <PageArea>
                <div className='leftSide'>
                    <div className='box'>
                        <div className='adImage'>
                            {loading && <Fake heigth={300} />}
                        </div>
                        <div className='adInfo'>
                            <div className='adName'>
                                {loading && <Fake heigth={30} />}
                                {adInfo.title && <h2>{adInfo.title}</h2>}
                                {adInfo.created_at && <small>Criado em {formatDate(adInfo.created_at)}</small>}
                            </div>
                            <div className='adDescription'>
                                {loading && <Fake />}
                                {adInfo.description}
                                <hr />
                                <small>Visto {adInfo.views} vezes</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightSide'>
                    <div className='box box--padding'>{loading && <Fake />}</div>
                    <div className='box box--padding'>{loading && <Fake heigth={30} />}</div>
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default AdPage;