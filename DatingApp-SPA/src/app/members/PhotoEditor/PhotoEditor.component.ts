import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-PhotoEditor',
  templateUrl: './PhotoEditor.component.html',
  styleUrls: ['./PhotoEditor.component.css']
})
export class PhotoEditorComponent implements OnInit {

  @Input() photos: Photo[];

  constructor() { }

  ngOnInit() {
  }

}
