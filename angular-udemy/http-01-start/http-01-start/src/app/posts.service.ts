import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Post} from "./post.model";
import {catchError, map, tap} from "rxjs/operators";
import {Subject, throwError} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  error = new Subject<string>();
  url = 'https://ng-complete-guide-24ee7.firebaseio.com/';

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {
      title: title,
      content: content
    }
    this.http.post<{name:string}>(this.url + 'posts.json', postData, {
      observe: "response"
    })
      .subscribe(responseData => {
      console.log(responseData)
    }, error => {
      this.error.next(error.message);
    });
  }

  fetchPost() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http.get<{ [key: string] : Post }>(this.url + 'posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
        params: searchParams,
        responseType: 'json'
      })
      .pipe(map((responeData: {[key: string]: Post}) => {
      const postsArray: Post[] = [];
      for (const key in responeData) {
        if(responeData.hasOwnProperty(key)){
          postsArray.push({...responeData[key], id: key})
        }
      }
      return postsArray
    }),
      catchError(errorRes => {
      //  Send to analytics server
        return throwError(errorRes);
      })
      );
  }

  deletePosts() {
    return this.http.delete(this.url +'posts.json',{
      observe: 'events',
      responseType: 'json'
    }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
      //  ...
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }

}

