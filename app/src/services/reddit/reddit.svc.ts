import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class RedditService extends BaseService {
    getPosts(): async.IThenable<Array<any>> {
        return this.http.json<Array<any>>({
            method: 'GET',
            url: this.host
        }).then((success) => {
            var res: any = success;
            return <Array<any>>res.response.data.children;
        });
    }
}

register.injectable('reddit-svc', RedditService);
