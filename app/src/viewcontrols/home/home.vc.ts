import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
// import RedditService from '../../services/reddit/reddit.svc'
import DataRepository from '../../repositories/data/data.repo'
import ReadViewControl from '../read/read.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    constructor(private dataRepo: DataRepository) {
        super();
    }

    navigatedTo(): void {
        this.dataRepo.getPosts().then((posts) => {
            this.context.posts = posts;
        });
    }

    context: any = {
        posts: []
    };

    readPost(postID: string): void {
        // console.log(id);
        // this.navigator.navigate('read-vc');
         this.navigator.navigate('read-vc', {
             parameters: {
                 id: postID
             }
         });
    }
}

register.viewControl('home-vc', HomeViewControl, [DataRepository]);
