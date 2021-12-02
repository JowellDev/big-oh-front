import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { NgForm } from '@angular/forms';
import { ArticlesService } from 'src/app/articles/articles.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  providers: [],
})
export class CreateArticleComponent implements OnInit {
  Editor = ClassicEditor;
  editorBody: string = '<p>Hello world</p>';
  isDisabled: boolean = false;
  watchdog: any;
  ready: boolean = false;
  error: string;
  success: string;

  categories = [
    { id: 'algo', name: 'Algorithmie' },
    { id: 'web', name: 'Développement web' },
    { id: 'mobile', name: 'Développement mobile' },
    { id: 'data', name: 'Big data' },
    { id: 'ia', name: 'Intélligence artificielle' },
    { id: 'bc', name: 'Blockchain' },
  ];

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {}

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  onSubmit(form: NgForm) {
    const data = {
      title: form.value.articleTitle,
      description: form.value.articleDescription,
      category: form.value.articleCategory,
      body: form.value.articleBody,
    };

    this.articleService.createArticle(data).subscribe(
      (response) => {
        this.success =
          "L'article a été créé avec succès. Vous devez maitenant le publier. Accéder à l'onglet des articles pas encore publiés pour le faire !";
        form.reset();
      },
      (error) => {
        this.error =
          "Une erreur s'est produite au moment de la création de l'article. Veuillez réessayer !";
      }
    );
  }

  closeAlert() {
    this.success = null;
    this.error = null;
  }
}