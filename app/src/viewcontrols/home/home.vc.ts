import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import RedditService from '../../services/reddit/reddit.svc'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    constructor(private redditSvc: RedditService) {
        super();
    }

    navigatedTo(): void {
        this.redditSvc.getPosts().then((posts) => {
            this.context.posts = posts;
        });
    }

    context: any = {
        posts: []
    };
}

register.viewControl('home-vc', HomeViewControl, [RedditService]);
