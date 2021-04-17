import BaseEntity from './base.entity';

class ArticleEntity extends BaseEntity {
  constructor(title, slug, content, userid, genreid) {
    super();
    this.title = title;
    this.slug = slug;
    this.content = content;
    this.userid = userid;
    this.genreid = genreid;
  }
}

export default ArticleEntity;
