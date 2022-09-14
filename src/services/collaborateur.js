import axios from 'axios';
import instance from './instance';

export async function login(email, password) {
    const { data } = await instance.post(`/login`,{
        email: email,
        password: password
    });

    return data;
}

export async function getCollaborateurs() {
    const { data } = await instance.get(`/collaborateurs`);

    return data;
}

export async function getRandomCollaborateurs() {
    const { data } = await instance.get(`/collaborateurs/random`);

    return data;
}

