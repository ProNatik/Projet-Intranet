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

export async function getCollaborateurId(id) {
    const { data } = await instance.get(`/collaborateurs/${id}`);
    return data;
}

export async function getRandomCollaborateurs() {
    const { data } = await instance.get(`/collaborateurs/random`);
    return data;
}

export async function postCollaborateurs(values) {
    const { data } = await instance.post(`/collaborateurs`,values);
    return data;
}

export async function updateCollaborateurs(id,values) {
    const { data } = await instance.put(`/collaborateurs/${id}`,values);
    return data;
}

export async function deleteCollaborateurs(id) {
    const { data } = await instance.delete(`/collaborateurs/${id}`);
    return data;
}