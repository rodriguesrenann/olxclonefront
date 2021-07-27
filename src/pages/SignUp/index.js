import React, { useState, useEffect } from 'react';
import PageArea from './style.js';
import useApi from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
const Page = () => {

    const api = useApi();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStates = async () => {
            const stateList = await api.getStates();
            setStateList(stateList);
        }

        getStates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        const json = await api.register(name, email, password, stateLoc);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
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

                <form onSubmit={handleSubmit} >
                    <label className='area'>
                        <div className='area-title'>
                            Nome completo
                        </div>
                        <div className='area-input'>
                            <input type='text' disabled={disabled} value={name} onChange={e => setName(e.target.value)} />
                        </div>
                    </label>
                    <label className='area'>
                        <div className='area-title'>
                            Estado
                        </div>
                        <div className='area-input'>
                            <select required value={stateLoc} onChange={e => setStateLoc(e.target)}>
                                <option></option>
                                {stateList.map((i, key) =>
                                    <option key={key} value={i.id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
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
                            Confirme a senha
                        </div>
                        <div className='area-input'>
                            <input type='password' disabled={disabled} value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
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