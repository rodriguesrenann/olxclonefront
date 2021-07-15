import React, { useState } from 'react';
import PageArea from './style.js';
import useApi from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
const Page = () => {

    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);
        
        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, remember);
            window.location.href = '/';
        }

        setDisabled(false);
    }
    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>

                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className='area'>
                        <div className='area-title'>
                            E-mail
                        </div>
                        <div className='area-input'>
                            <input type='email' disabled={disabled} value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                    </label>
                    <label className='area'>
                        <div className='area-title'>
                            Senha
                        </div>
                        <div className='area-input'>
                            <input type='password' disabled={disabled} value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                    </label>
                    <label className='area'>
                        <div className='area-title'>
                            Lembrar-me
                        </div>
                        <div className='area-check'>
                            <input type='checkbox' disabled={disabled} checked={remember} onChange={() => setRemember(!remember)} />
                        </div>
                    </label>
                    <label className='area'>
                        <div className='area-title'>

                        </div>
                        <div className='area-input'>
                            <button disabled={disabled} >Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;