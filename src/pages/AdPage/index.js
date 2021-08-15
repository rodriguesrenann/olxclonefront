import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Slide } from 'react-slideshow-image';
import AdItem from '../../components/partials/AdItem/index.js';
import { PageArea, Fake } from './styled.js';
import useApi from '../../helpers/OlxAPI';
import 'react-slideshow-image/dist/styles.css';

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
    }, [api, id]);

    //todo fakeloading
    return (
        <PageContainer>
            <PageArea>
                <div className='leftSide'>
                    <div className='box'>
                        <div className='adImage'>
                            {loading && <Fake heigth={300} />}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((image, key) =>
                                        <div key={key} className='each-slide'>
                                            {console.log(image)}
                                            <img src={image} alt='' />
                                        </div>
                                    )}
                                </Slide>
                            }
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
                    <div className='box box--padding'>
                        {loading && <Fake />}
                        {loading && <Fake heigth={30} />}
                        {adInfo.price_negotiable === 1 &&
                            'Preço negociável'
                        }
                        {!adInfo.price_negotiable && adInfo.price &&
                            <div className='price'>
                                <span>R$:{adInfo.price}</span>
                            </div>
                        }
                    </div>
                    {loading && <Fake heigth={30} />}
                    {adInfo.user &&
                        <>
                            <a href={`mailto:${adInfo.user.email}`} target='blank' className='contactSeller'>Falar com o vendedor</a>
                            <div className=' createdBy box box--padding'>
                                <strong>{adInfo.user.name}</strong>
                                <small>E-mail: {adInfo.user.email}</small>
                                <small>Estado: {adInfo.user.state}</small>
                            </div>
                        </>
                    }
                </div>
            </PageArea>

            {adInfo.others &&
                <>
                    <h2>Outras ofertas do vendedor:</h2>
                    <div className='list'>
                        {adInfo.others.map((ad, key) =>
                            <AdItem key={key} data={ad} />
                        )}
                    </div>
                </>
            }
        </PageContainer>
    );
}

export default AdPage;