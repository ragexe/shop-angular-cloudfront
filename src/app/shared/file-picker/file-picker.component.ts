import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent implements OnChanges {
  @Input() file: File | null = null;

  @Output() fileChange = new EventEmitter<File | null>();
  @Output() uploadClick = new EventEmitter<void>();

  @ViewChild('fileInput', { static: true })
  fileInput!: ElementRef<HTMLInputElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.file.currentValue !== changes.file.previousValue &&
      changes.file.currentValue === null
    ) {
      this.removeFile();
    }
  }

  selectFile(files: FileList | null): void {
    if (!files?.length) {
      this.removeFile();
      return;
    }

    const file = files.item(0) as File;

    if (!['text/csv', 'application/vnd.ms-excel'].includes(file.type)) {
      this.removeFile();
      return;
    }

    this.fileChange.emit(file);
    this.file = file;
  }

  removeFile(): void {
    this.fileInput.nativeElement.value = '';
    this.fileInput.nativeElement.files = null;
    this.file = null;
    this.fileChange.emit(null);
  }
}
