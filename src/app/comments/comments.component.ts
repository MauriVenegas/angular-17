import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comeentarios de lo que sea</h3>
    <img src="https://miro.medium.com/v2/format:webp/0*ZjYSm_q36J4KChdn" alt="This is fine">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia eius unde maiores at cumque in animi modi totam doloribus. Quos quaerat voluptatem culpa rerum fugiat, sequi soluta dignissimos quisquam!
    </p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
