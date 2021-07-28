import React, { useState } from 'react';
import { PageArea, SearchArea } from './style.js';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';
const Page = () => {

    const api = useApi();

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method='GET' action='/ads'>
                            <input type='text' name='q' placeholder='O que voce procura?' />
                            <select name='state'>

                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className='categoryList'></div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    ...
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;