import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

 export class NotesService {
  server: String = 'http://localhost:7000/api/';

  constructor(private http: HttpClient) {
  }

 
  addNote(Note): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'notes', Note, { headers: headers })
  }

  getNotes(id): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + `notes/${id}`, { headers: headers })
  }

  getNoteById(did,nid): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + `notes/${did}/${nid}`, { headers: headers })
  }

  addDiscussion(discussions): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'discussion', discussions, { headers: headers })
  }

  addDiscussionParticipant(discussions): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'addDiscussionParticipant', discussions, { headers: headers })
  }

  removeDiscussionParticipant(discussions): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'removeDiscussionParticipant', discussions, { headers: headers })
  }

  updateDiscussionLikes(discussions): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'updateDiscussionLikes', discussions, { headers: headers })
  }

  updateDiscussionDislikes(discussions): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'updateDiscussionDislikes', discussions, { headers: headers })
  }  
 
  getDiscussions(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'discussion', { headers: headers })
  }

  getDiscussionsByUserId(id): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'discussionByUser/'+ id, { headers: headers })
  }

  getDiscussionById(id): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'discussion/' + id, { headers: headers })
  }

  searchDiscussions(key): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'search/' + key, { headers: headers })
  }




}
