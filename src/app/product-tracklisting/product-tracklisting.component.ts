import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import { Http } from '@angular/http';
import { Album } from 'app/album';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  constructor(private productService : ProductService) { }

  albumInfo : Album ;

  ngOnInit() {
    this.productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
