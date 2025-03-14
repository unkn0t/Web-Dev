import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Album {
  userId: number,
  id: number,
  title: string,
}

export interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumsUrl = 'http://localhost:3000/albums';

  private http = inject(HttpClient);

  // CRUD for Albums
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.albumsUrl}/${id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.albumsUrl, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.albumsUrl}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.albumsUrl}/${id}`);
  }

  // Fetch photos
  getPhotosForAlbum(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.albumsUrl}/${albumId}/photos`);
  }
}
