import axios, { CancelToken } from 'axios';
import { useState } from 'react';

const useAxiosAsync = () => {

    const [requestCancelToken, setRequestCancelToken] = useState(null);
    const [requestStatus, setRequestStatus] = useState('ready');
    const [responseData, setResponseData] = useState(null);

    const cancelTokenSource = CancelToken.source();

    const defaultSettings = {
        method: 'GET',
        cancelToken: cancelTokenSource.token
    };

    const axiosRequest = async requestSettings => {

        setRequestCancelToken(cancelTokenSource);
        setRequestStatus('pending');

        try {
            const result = await axios({
                ...defaultSettings,
                ...requestSettings
            });

            setResponseData(
                result.response
            );
        } catch (error) {

            setResponseData(
                error.response
            );
        }

        setRequestStatus('ready');
    }

    return [
        {
            request: {
                cancelToken: requestCancelToken,
                status: requestStatus
            },
            response: {
                ...responseData
            }
        },
        axiosRequest
    ]
}

export default useAxiosAsync;
