import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../core/services/blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor ( private _FormBuilder: FormBuilder, private _BlogService:BlogService, private _ToastrService:ToastrService ) {}

  postForm: FormGroup = this._FormBuilder.group({
    title: [null,[Validators.required]],
    body: [null,[Validators.required]],
    userId: [null,[Validators.required]]
  })

  submitForm():void{
    this._BlogService.createPost(this.postForm.value).subscribe({
      next: (res)=>{
        console.log(res)
        this._ToastrService.info("Submitted successfully", "E-Commerce", {timeOut:2000, closeButton:true, progressBar:true})
      },
      error: (err)=>{
        console.log(err)
      },
    })
  }
}
