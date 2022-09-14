import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from 'my-api-data';

interface ImageResponse extends Object {
  image: string;
}
@Component({
  selector: 'myorg-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {
  imageObj: File | undefined;
  imageUrl: string = '';

  constructor(private imageUploadService: ImageUploadService) {}

  ngOnInit(): void {}

  onImagePicked(event: Event): void {
    if (
      event &&
      event.target &&
      event.target instanceof HTMLInputElement &&
      event.target.files
    ) {
      const FILE =
        Array.isArray(Array.from(event.target.files)) &&
        event.target.files.length === 1 &&
        event.target.files[0];

      this.imageObj = FILE ? FILE : undefined;
    }
  }

  onImageUpload() {
    if (this.imageObj) {
      const imageForm = new FormData();
      imageForm.append('image', this.imageObj);
      this.imageUploadService.imageUpload(imageForm).subscribe((res) => {
        const imageRes = res as ImageResponse;
        if (imageRes && imageRes.image) {
          this.imageUrl = imageRes.image;
        }
      });
    }
  }
}
