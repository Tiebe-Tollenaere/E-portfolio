import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { blogPostsData, BlogPost } from '../../data/blog-posts.data';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit {
  blogPost: BlogPost | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.blogPost = blogPostsData.find(post => post.slug === slug);
      if (!this.blogPost) {
        this.router.navigate(['/blogs']);
      }
    });
  }

  get formattedContent(): string {
    if (!this.blogPost) {
      return '';
    }

    return `<p>${this.blogPost.content.split('\n\n').join('</p><p>')}</p>`;
  }
}
