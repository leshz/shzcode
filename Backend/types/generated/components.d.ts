import type { Schema, Struct } from '@strapi/strapi';

export interface LinksLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    pruebas: Schema.Attribute.Relation<'oneToMany', 'api::prueba.prueba'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'links.links': LinksLinks;
    }
  }
}
