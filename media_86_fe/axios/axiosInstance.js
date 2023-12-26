import axios from 'axios';

const baseDomain = 'http://localhost:3001/media86';
//api user name and password
const username = 'abc'
const password = 'abc'

const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

const customeHeaders = {
    'Authorization': `Basic ${token}`
};

export const axiosInstance = axios.create({
    baseURL: baseDomain,
    headers: customeHeaders,
});