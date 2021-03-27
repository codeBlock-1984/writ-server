import BaseEntity from './base.entity';

class ArticleEntity extends BaseEntity {
  constructor(title, slug, content, genreid) {
    super();
    this.title = title;
    this.slug = slug;
    this.content = content;
    this.genreid = genreid;
  }
}

export default ArticleEntity;
