import { Component, OnInit } from '@angular/core';

interface Photo {
  id: number,
  src: string,
  title: string
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})

export class GaleriaComponent implements OnInit {
  
  photoList: Photo[] = [
    { id: 0, src: "img1.jpg", title: "libreta" },
    { id: 1, src: "img2.jpg", title: "fichas" },
    { id: 2, src: "img3.jpg", title: "móvil" },
    { id: 3, src: "img4.jpg", title: "reloj" },
    { id: 4, src: "img5.jpg", title: "cascos" },
    { id: 5, src: "img6.jpg", title: "lámpara" },
    { id: 6, src: "img7.jpg", title: "portátil" },
    { id: 7, src: "img8.jpg", title: "cámara" },
    { id: 8, src: "img9.jpg", title: "casete" },
  ];  

  selectedPhoto: Photo = 
  {
    id: 0,
    src: "",
    title: ""
  };

  imageWidth: number = 80;

  isSlideshowRunning = false;
  slideshowInterval: any;   


  ngOnInit() {
    this.showSelectedPhoto();
  }

  showSelectedPhoto() {    
    const selectedPhoto = this.photoList[this.selectedPhoto.id];
    this.selectedPhoto.src = 'assets/' + selectedPhoto.src;
    this.selectedPhoto.title = selectedPhoto.title;
  }

  selectPhoto(photo: Photo) {
    this.selectedPhoto = { ...photo }; 
    this.showSelectedPhoto();   
  }
  

  nextPhoto() {
    if (this.selectedPhoto.id < this.photoList.length - 1) {
      this.selectedPhoto.id++;
    } else {
      this.selectedPhoto.id = 0; 
      this.currentPage = 0; 
    }
    this.showSelectedPhoto(); 
    if (this.selectedPhoto.id >= (this.currentPage + 1) * this.photosPerPage) {
      this.nextPage();
  }       
  }

  previousPhoto() {
    if (this.selectedPhoto.id > 0) {
      this.selectedPhoto.id--;
      this.showSelectedPhoto();
    }
    if (this.selectedPhoto.id < (this.currentPage + 1) * this.photosPerPage){
      this.previousPage()
    }
  }

  increaseSize() {
    if (this.imageWidth <= 100) { 
      this.imageWidth += 5;      
    }
  }
  
  decreaseSize() {
    if (this.imageWidth >= 60) { 
      this.imageWidth -= 5;      
    }
  } 
  

  startSlideshow() {
    this.isSlideshowRunning = true;
    this.slideshowInterval = setInterval(() => {
      this.nextPhoto();
    }, 2000);
  }

  stopSlideshow() {
    this.isSlideshowRunning = false;
    clearInterval(this.slideshowInterval);
  }


  currentPage = 0;
photosPerPage = 3;

getCurrentPagePhotos(): Photo[] {
    const startIndex = this.currentPage * this.photosPerPage;
    const endIndex = startIndex + this.photosPerPage;
    return this.photoList.slice(startIndex, endIndex);
}

previousPage() {
    if (this.currentPage > 0) {
        this.currentPage--;
    }
}

nextPage() {
    if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;        
    }
}

get totalPages(): number {
    return Math.ceil(this.photoList.length / this.photosPerPage);
}

}
