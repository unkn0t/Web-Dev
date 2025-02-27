import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Album, AlbumsService} from '../albums.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-details',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent {
  album: Album | undefined;

  saveForm = new FormGroup({
    title: new FormControl('')
  });

  private route = inject(ActivatedRoute);
  private albumsService = inject(AlbumsService);

  constructor() {
    const albumId = Number(this.route.snapshot.params['id']);
    this.albumsService.getAlbum(albumId).subscribe(album => this.album = album);
  }

  save() {
    if (this.album && this.saveForm.value.title) {
      this.album.title = this.saveForm.value.title;
      this.albumsService.updateAlbum(this.album)
        .subscribe(album => alert(`New album title ${album.title}!`));
    }
  }
}
