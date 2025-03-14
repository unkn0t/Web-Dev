import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Album, AlbumsService} from '../albums.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-create',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './album-create.component.html',
  styleUrl: './album-create.component.css'
})
export class AlbumCreateComponent {
  album: Album | undefined;

  saveForm = new FormGroup({
    title: new FormControl(''),
    userId: new FormControl(''),
  });

  private albumsService = inject(AlbumsService);

  save() {
    if (this.saveForm.value.userId && this.saveForm.value.title) {
      this.album = {
        id: Math.round(Math.random() * 100 + 50),
        title: this.saveForm.value.title,
        userId: Number(this.saveForm.value.userId),
      }
      this.albumsService.createAlbum(this.album)
        .subscribe(album => alert(`New album title ${album.title} and ${album.id}!`));
    }
  }
}
