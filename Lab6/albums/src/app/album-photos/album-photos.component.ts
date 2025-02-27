import {Component, inject} from '@angular/core';
import {AlbumsService, Photo} from '../albums.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos: Photo[] = [];

  private route = inject(ActivatedRoute);
  private albumsService = inject(AlbumsService);

  constructor() {
    const albumId = Number(this.route.snapshot.params['id']);
    this.albumsService.getPhotosForAlbum(albumId).subscribe(
      photos => this.photos = photos
    );
  }
}
