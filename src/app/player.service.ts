import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadPlayer } from './main/model/loadPlayer';
import { Player2 } from './main/model/playerStats';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public addPlayer(player: Player2): Observable<Player2> {
    return this.http.post<Player2>(`${this.apiUrl}/api/player/saveplayer`, player);
  }

  public loadPlayer(player: Player2): Observable<Player2> {
    return this.http.get<Player2>(`${this.apiUrl}/api/player/loadplayer?name=${player.name}&saveId=${player.saveId}`);
  }
}