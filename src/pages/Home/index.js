import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled.js';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';
const Page = () => {

    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [adsList, setAdsList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }

        getStates();

    }, [api]);

    useEffect(() => {
        const getCategories = async () => {
            const categories = await api.getCategories();
            setCategoryList(categories);
        }

        getCategories();

    }, [api]);

    useEffect(() => {
        const getAds = async () => {
            const ads = await api.getAds();
            setAdsList(ads);
        }

        getAds();

    }, [api]);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method='GET' action='/ads'>
                            <input type='text' name='q' placeholder='O que voce procura?' />
                            <select name='state'>
                                <option></option>
                                {stateList.map((i, key) =>
                                    <option key={key} value={i.id}>{i.name}</option>
                                )};
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className='categoryList'>
                        {categoryList.map((i, key) =>
                            <Link key={key} to={`ads?cat=${i.slug}`} className='categoryItem'>
                                <img src={i.img} alt='' />
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios recentes</h2>
                    <div className='list'>
                        {adsList.map((i, key) =>
                            <AdItem key={key} data={i} />
                        )}
                    </div>
                    <Link to='/ads' className='seeAllLink'>Ver todos</Link>

                    <hr />
                    Lor4em
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;