import {Component, inject} from '@angular/core';
import {Album, AlbumsService} from '../albums.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums: Album[] = [];

  private albumsService = inject(AlbumsService);
  private router = inject(Router);

  constructor() {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  addNewAlbum() {
    this.router.navigate(['/albums/new']);
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/albums', id]);
  }
}
